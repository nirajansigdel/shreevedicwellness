import { PayPalButtons } from '@paypal/react-paypal-js';
import React from 'react'
import toast from 'react-hot-toast';
import axios from 'axios'

const PayPalPayment = ({ order_id }) => {

    const createOrder = async () => {
        try {
            const res = await axios.post("/api/payment/create", { order_id })
            return res.data.id

        } catch (error) {
            if (error.response && error.response.data.error) {
                toast.error(error.response.data.error)
                throw new Error(error.response.data.error);
            } else {
                throw new Error(error.message);
            }
        }
    }
    const onApprove = async (data) => {
        console.log(data)
        try {
            const res = await axios.post(`/api/payment/capture/${data.orderID}`, { order_id })
            toast.success("Payment Successful")
            // Navigate to success page after payment successs
            // const url = `${window.location.protocol}//${window.location.host}/success`

            return res.data
        } catch (error) {
            console.log(error)
            if (error.response && error.response.data.error) {
                toast.error(error.response.data.error)
                return error.response.data.error;
            } else {
                return error.message;
            }
        }
    }

    return (
        <PayPalButtons createOrder={createOrder} onApprove={onApprove} />)
}

export default PayPalPayment;