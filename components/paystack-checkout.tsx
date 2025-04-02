"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { initializePaystack, generatePaystackReference } from "@/lib/paystack"

interface PaystackCheckoutProps {
  amount: number
  email: string
  onSuccess?: (response: any) => void
  onCancel?: () => void
  metadata?: Record<string, any>
  currency?: string
  className?: string
  buttonText?: string
}

export default function PaystackCheckout({
  amount,
  email,
  onSuccess,
  onCancel,
  metadata = {},
  currency = "GHS",
  className = "",
  buttonText = "Pay Now",
}: PaystackCheckoutProps) {
  const [loading, setLoading] = useState(false)
  const [paystackLoaded, setPaystackLoaded] = useState(false)

  useEffect(() => {
    // Load Paystack script if not already loaded
    if (typeof window !== "undefined" && !document.getElementById("paystack-script")) {
      const script = document.createElement("script")
      script.id = "paystack-script"
      script.src = "https://js.paystack.co/v1/inline.js"
      script.async = true
      script.onload = () => setPaystackLoaded(true)
      document.body.appendChild(script)
    } else {
      setPaystackLoaded(true)
    }
  }, [])

  const handlePayment = () => {
    setLoading(true)

    // Convert amount to kobo (smallest currency unit)
    const amountInKobo = Math.round(amount * 100)

    const reference = generatePaystackReference()

    initializePaystack({
      publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "",
      email,
      amount: amountInKobo,
      reference,
      currency,
      metadata: {
        ...metadata,
        custom_fields: [
          {
            display_name: "Customer Email",
            variable_name: "customer_email",
            value: email,
          },
        ],
      },
      callback: (response) => {
        setLoading(false)
        if (onSuccess) {
          onSuccess(response)
        }
      },
      onClose: () => {
        setLoading(false)
        if (onCancel) {
          onCancel()
        }
      },
    })
  }

  return (
    <Button onClick={handlePayment} disabled={loading || !paystackLoaded} className={className}>
      {loading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Processing...
        </>
      ) : (
        buttonText
      )}
    </Button>
  )
}

