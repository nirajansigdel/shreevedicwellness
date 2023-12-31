"use client";

import React, { useState } from "react";

import Input from "../Input";
import Button from "../Button";
import PayPalPayment from "@/components/PayPalPayment";
import PayPalScriptProvider from "@/components/PayPalScriptProvider";
import { useRouter, useSearchParams } from "next/navigation";

function Form3({ setStep }) {
  const [payment, setPayment] = useState(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const order_id = searchParams.get("orderId");
  console.log({ order_id });

  // const order_id = "654241c0ec9b24fdfc34bc8f" // ID referencing the object stored in database after submitting the form

  return (
    <div className=" flex flex-col">
      <p className="text-[#4B5563] font-bold text-4xl">Almost There 🏁</p>

      <p className="text-[#9CA3AF] font-medium text-[13px] my-6">
        Please complete your payment to proceed. Fill the form to reserve your
        class
      </p>

      {/* <div>
        <p className="text-[#4B5563] text-[16px] font-medium mb-6 mt-6">
          Payment Method
        </p>
        <div className="flex flex-row items-center gap-3 flex-wrap justify-around">
          <button
            className={`rounded-md py-3 px-4 bg-[#E5E7EB] flex flex-row gap-3 items-center ${
              payment == 1 ? "bg-[#3B82F6]" : ""
            }`}
            onClick={() => setPayment(1)}
          >
            <span>a</span>
            <span
              className={`text-[#4B5563] text-[13px] font-medium ${
                payment == 1 ? "text-white" : ""
              }`}
            >
              Card
            </span>
          </button>
          <button
            className={`rounded-md py-3 px-4 bg-[#E5E7EB] flex flex-row gap-3 items-center ${
              payment == 2 ? "bg-[#3B82F6]" : ""
            }`}
            onClick={() => setPayment(2)}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clip-path="url(#clip0_1_4198)">
                  <path
                    d="M13.9774 0.00999351C13.9349 -0.0375065 12.4037 0.0287435 11.0712 1.47499C9.73866 2.91999 9.94366 4.57749 9.97366 4.61999C10.0037 4.66249 11.8737 4.72874 13.0674 3.04749C14.2612 1.36624 14.0199 0.0587435 13.9774 0.00999351ZM18.1199 14.6762C18.0599 14.5562 15.2137 13.1337 15.4787 10.3987C15.7437 7.66249 17.5724 6.91249 17.6012 6.83124C17.6299 6.74999 16.8549 5.84374 16.0337 5.38499C15.4307 5.06156 14.7633 4.87625 14.0799 4.84249C13.9449 4.83874 13.4762 4.72374 12.5124 4.98749C11.8774 5.16124 10.4462 5.72374 10.0524 5.74624C9.65741 5.76874 8.48241 5.09374 7.21866 4.91499C6.40991 4.75874 5.55241 5.07874 4.93866 5.32499C4.32616 5.56999 3.16116 6.26749 2.34616 8.12124C1.53116 9.97374 1.95741 12.9087 2.26241 13.8212C2.56741 14.7325 3.04366 16.2262 3.85366 17.3162C4.57366 18.5462 5.52866 19.4 5.92741 19.69C6.32616 19.98 7.45116 20.1725 8.23116 19.7737C8.85866 19.3887 9.99116 19.1675 10.4387 19.1837C10.8849 19.2 11.7649 19.3762 12.6662 19.8575C13.3799 20.1037 14.0549 20.0012 14.7312 19.7262C15.4074 19.45 16.3862 18.4025 17.5287 16.2787C17.9624 15.2912 18.1599 14.7575 18.1199 14.6762Z"
                    fill="#4B5563"
                  />
                  <path
                    d="M13.9774 0.00999351C13.9349 -0.0375065 12.4037 0.0287435 11.0712 1.47499C9.73866 2.91999 9.94366 4.57749 9.97366 4.61999C10.0037 4.66249 11.8737 4.72874 13.0674 3.04749C14.2612 1.36624 14.0199 0.0587435 13.9774 0.00999351ZM18.1199 14.6762C18.0599 14.5562 15.2137 13.1337 15.4787 10.3987C15.7437 7.66249 17.5724 6.91249 17.6012 6.83124C17.6299 6.74999 16.8549 5.84374 16.0337 5.38499C15.4307 5.06156 14.7633 4.87625 14.0799 4.84249C13.9449 4.83874 13.4762 4.72374 12.5124 4.98749C11.8774 5.16124 10.4462 5.72374 10.0524 5.74624C9.65741 5.76874 8.48241 5.09374 7.21866 4.91499C6.40991 4.75874 5.55241 5.07874 4.93866 5.32499C4.32616 5.56999 3.16116 6.26749 2.34616 8.12124C1.53116 9.97374 1.95741 12.9087 2.26241 13.8212C2.56741 14.7325 3.04366 16.2262 3.85366 17.3162C4.57366 18.5462 5.52866 19.4 5.92741 19.69C6.32616 19.98 7.45116 20.1725 8.23116 19.7737C8.85866 19.3887 9.99116 19.1675 10.4387 19.1837C10.8849 19.2 11.7649 19.3762 12.6662 19.8575C13.3799 20.1037 14.0549 20.0012 14.7312 19.7262C15.4074 19.45 16.3862 18.4025 17.5287 16.2787C17.9624 15.2912 18.1599 14.7575 18.1199 14.6762Z"
                    fill="#4B5563"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_4198">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span
              className={`text-[#4B5563] text-[13px] font-medium ${
                payment == 2 ? "text-white" : ""
              }`}
            >
              Apple
            </span>
          </button>

          <button
            onClick={() => setPayment(3)}
            className={`rounded-md py-3 px-4 bg-[#E5E7EB] flex flex-row gap-3 items-center ${
              payment == 3 ? "bg-[#3B82F6]" : ""
            }`}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
              >
                <g clip-path="url(#clip0_1_4203)">
                  <path
                    d="M17.575 4.40919C17.725 3.13738 17.4588 2.23369 16.6975 1.40956C15.785 0.42275 14.14 0 12.0325 0H5.91753C5.70936 8.56374e-05 5.50805 0.0706731 5.34974 0.199086C5.19142 0.327498 5.08649 0.505323 5.05378 0.700625L2.50628 16.0419C2.49434 16.1132 2.49882 16.1861 2.51941 16.2555C2.53999 16.3249 2.57619 16.3893 2.62551 16.4442C2.67483 16.4991 2.73608 16.5431 2.80506 16.5733C2.87403 16.6035 2.94908 16.6191 3.02503 16.6191H6.47003L6.21753 18.1391C6.19983 18.2455 6.20662 18.3543 6.23742 18.458C6.26822 18.5617 6.32231 18.6578 6.39597 18.7397C6.46962 18.8217 6.56109 18.8875 6.66407 18.9326C6.76706 18.9777 6.87911 19.0011 6.99253 19.0012H10.175C10.7113 19.0012 11.1663 18.6331 11.2525 18.1331L11.2838 17.9788L11.8838 14.3652L11.9213 14.1704L11.9225 14.1621C11.9387 14.0636 11.9914 13.9739 12.0712 13.9092C12.151 13.8445 12.2526 13.8091 12.3575 13.8094H12.8325C14.415 13.8094 15.8638 13.5054 17.0138 12.7288C17.4875 12.4082 17.9038 12.0127 18.255 11.5354C18.8383 10.7639 19.2158 9.86943 19.355 8.92881C19.6575 7.44919 19.5175 6.13106 18.6425 5.18344C18.3728 4.8975 18.051 4.66015 17.6925 4.48281L17.575 4.40919ZM8.17878 10.4737C8.30264 10.4123 8.44028 10.3801 8.58003 10.3799H10.375C13.9 10.3799 16.6588 9.02144 17.465 5.08844L17.4688 5.06944C17.74 5.21669 17.9688 5.39006 18.1538 5.58956C18.8363 6.32937 19.0025 7.41237 18.7163 8.80769C18.3763 10.4666 17.6338 11.5473 16.6375 12.2206C15.635 12.8974 14.335 13.1884 12.8338 13.1884H12.3588C12.0992 13.1881 11.8481 13.2756 11.6504 13.4354C11.4527 13.5951 11.3214 13.8166 11.28 14.06L11.2425 14.2547L10.6425 17.8683L10.6125 18.0227L10.6113 18.0274C10.5946 18.1256 10.5417 18.2149 10.462 18.2793C10.3822 18.3438 10.2809 18.3791 10.1763 18.3789H6.99378C6.97454 18.379 6.95552 18.3751 6.93804 18.3675C6.92055 18.3598 6.90503 18.3487 6.89254 18.3348C6.88005 18.3209 6.87089 18.3046 6.86571 18.287C6.86053 18.2694 6.85944 18.2509 6.86253 18.2329L7.12253 16.6654L8.17878 10.4737Z"
                    fill="#4B5563"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_4203">
                    <rect width="20" height="19" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span
              className={`text-[#4B5563] text-[13px] font-medium ${
                payment == 3 ? "text-white" : ""
              }`}
            >
              PayPal
            </span>
          </button>
        </div>
      </div> */}

      {/* <div className="flex flex-col gap-3 mt-8 mb-3">
        <Input type="text" placeholder="Card Number" />

        <Input type="password" placeholder="CVV" />

        <Input type="text" placeholder="Name on Card" />
        <Input type="text" placeholder="Expiry" />
      </div> */}
      <PayPalScriptProvider>
        <PayPalPayment order_id={order_id} />
      </PayPalScriptProvider>

      <div className="flex gap-3 flex-col">
        <Button type={"secondary"} onClick={() => setStep(2)}>
          Go Back
        </Button>
      </div>
    </div>
  );
}

export default Form3;
