// This is a utility file for Paystack integration

export interface PaystackConfig {
  publicKey: string
  email: string
  amount: number // in kobo (smallest currency unit)
  reference?: string
  currency?: string
  metadata?: Record<string, any>
  callback?: (response: PaystackResponse) => void
  onClose?: () => void
}

export interface PaystackResponse {
  reference: string
  status: string
  trans: string
  transaction: string
  message: string
}

// Initialize Paystack payment
export const initializePaystack = (config: PaystackConfig): void => {
  // Check if we're in the browser environment
  if (typeof window !== "undefined") {
    // @ts-ignore - Paystack types are not available
    const paystack =
      window.PaystackPop &&
      window.PaystackPop.setup({
        key: config.publicKey,
        email: config.email,
        amount: config.amount,
        ref: config.reference || generatePaystackReference(),
        currency: config.currency || "GHS",
        metadata: config.metadata || {},
        callback: (response: PaystackResponse) => {
          if (config.callback) {
            config.callback(response)
          }
        },
        onClose: () => {
          if (config.onClose) {
            config.onClose()
          }
        },
      })

    if (paystack) {
      paystack.openIframe()
    } else {
      console.error("Paystack not available. Make sure the Paystack script is loaded.")
    }
  } else {
    console.error("Paystack can only be initialized in browser environment")
  }
}

// Verify Paystack payment (server-side)
export const verifyPaystackPayment = async (reference: string): Promise<any> => {
  try {
    const response = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
    })

    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error verifying Paystack payment:", error)
    throw error
  }
}

// Generate a unique reference for Paystack transactions
export const generatePaystackReference = (): string => {
  return `ref-${Date.now()}-${Math.floor(Math.random() * 1000000)}`
}

