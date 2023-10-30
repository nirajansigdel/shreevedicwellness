'use client'
import React from 'react'
import { PayPalScriptProvider as Provider } from "@paypal/react-paypal-js";

const initialOptions = {
    "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
    "currency": "USD",
    "intent": "capture"
}

const PayPalScriptProvider = ({ children }) => {
    return (
        <Provider options={initialOptions}>{children}</Provider>
    )
}

export default PayPalScriptProvider