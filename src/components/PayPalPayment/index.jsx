import { PayPalButtons } from "@paypal/react-paypal-js";
import React from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

const PayPalPayment = ({ order_id }) => {
  const router = useRouter();

  const createOrder = async () => {
    try {
      const res = await axios.post("/api/payment/create", { order_id });
      return res.data.id;
    } catch (error) {
      if (error.response && error.response.data.error) {
        toast.error(error.response.data.error);
        throw new Error(error.response.data.error);
      } else {
        throw new Error(error.message);
      }
    }
  };
  const onApprove = async (data) => {
    console.log(data);
    try {
      const res = await axios.post(`/api/payment/capture/${data.orderID}`, {
        order_id,
      });

      console.log(res.data);

      toast.success("Payment Successful");
      router.push("/checkout/" + order_id);
      // Navigate to success page after payment successs
      // const url = `${window.location.protocol}//${window.location.host}/success`

      return res.data;
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.error) {
        toast.error(error.response.data.error);
        return error.response.data.error;
      } else {
        return error.message;
      }
    }
  };

  // if (!order_id) {
  //   return (
  //     <div>
  //       <span>
  //         <Loader />
  //       </span>
  //     </div>
  //   );
  // }

  if (!PayPalButtons) {
    return <div className="py-12">Loading Please Wait...</div>;
  }

  return (
    <PayPalButtons
      createOrder={createOrder}
      onApprove={onApprove}
      onError={(error) => console.log(error)}
    />
  );
};

export default PayPalPayment;
