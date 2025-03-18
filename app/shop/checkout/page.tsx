"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CreditCard, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample cart summary data
const cartSummary = {
  items: [
    { id: 1, title: "Refrigeration Unit", price: 1200, quantity: 1 },
    { id: 2, title: "Heavy-Duty Toolbox", price: 250, quantity: 2 },
    { id: 5, title: "Digital Temperature Controller", price: 320, quantity: 1 },
  ],
  subtotal: 2020,
  shipping: 50,
  discount: 0,
  total: 2070,
}

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [step, setStep] = useState(1)

  const handleContinue = () => {
    setStep(step + 1)
  }

  const handleBack = () => {
    setStep(step - 1)
  }

  return (
    <main className="flex min-h-screen flex-col bg-slate-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <Link href="/shop/cart">
            <Button variant="ghost" className="p-0 mr-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Cart
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">Checkout</h1>
        </div>

        {/* Checkout Steps */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center">
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 1 ? "bg-primary text-white" : "bg-slate-200 text-slate-500"}`}
            >
              {step > 1 ? <Check className="h-4 w-4" /> : 1}
            </div>
            <div className={`w-16 h-1 ${step >= 2 ? "bg-primary" : "bg-slate-200"}`}></div>
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 2 ? "bg-primary text-white" : "bg-slate-200 text-slate-500"}`}
            >
              {step > 2 ? <Check className="h-4 w-4" /> : 2}
            </div>
            <div className={`w-16 h-1 ${step >= 3 ? "bg-primary" : "bg-slate-200"}`}></div>
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 3 ? "bg-primary text-white" : "bg-slate-200 text-slate-500"}`}
            >
              3
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>
                  {step === 1 && "Shipping Information"}
                  {step === 2 && "Payment Method"}
                  {step === 3 && "Review Order"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {step === 1 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Street Address</Label>
                      <Input id="address" required />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State/Region</Label>
                        <Input id="state" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zip">Postal Code</Label>
                        <Input id="zip" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Select>
                        <SelectTrigger id="country">
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ghana">Ghana</SelectItem>
                          <SelectItem value="nigeria">Nigeria</SelectItem>
                          <SelectItem value="kenya">Kenya</SelectItem>
                          <SelectItem value="southafrica">South Africa</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
                      <div className="flex items-center space-x-2 border rounded-md p-4">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card" className="flex items-center">
                          <CreditCard className="h-5 w-5 mr-2" />
                          Credit/Debit Card
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2 border rounded-md p-4">
                        <RadioGroupItem value="paystack" id="paystack" />
                        <Label htmlFor="paystack" className="flex items-center">
                          <svg
                            className="h-5 w-5 mr-2"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect width="24" height="24" rx="4" fill="#0BA4DB" />
                            <path d="M7 15.2L12.0005 8L17 15.2H7Z" fill="white" />
                          </svg>
                          Paystack
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2 border rounded-md p-4">
                        <RadioGroupItem value="mobilemoney" id="mobilemoney" />
                        <Label htmlFor="mobilemoney" className="flex items-center">
                          <svg
                            className="h-5 w-5 mr-2"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect width="24" height="24" rx="4" fill="#FFD700" />
                            <path d="M12 6V18M7 9H17M7 15H17" stroke="#000" strokeWidth="2" />
                          </svg>
                          Mobile Money
                        </Label>
                      </div>
                    </RadioGroup>

                    {paymentMethod === "card" && (
                      <div className="space-y-4 mt-6">
                        <div className="space-y-2">
                          <Label htmlFor="cardName">Name on Card</Label>
                          <Input id="cardName" required />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <Input id="cardNumber" placeholder="XXXX XXXX XXXX XXXX" required />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="expiry">Expiry Date</Label>
                            <Input id="expiry" placeholder="MM/YY" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvv">CVV</Label>
                            <Input id="cvv" placeholder="XXX" required />
                          </div>
                        </div>
                      </div>
                    )}

                    {paymentMethod === "paystack" && (
                      <div className="mt-6">
                        <p className="text-slate-600">
                          You will be redirected to Paystack to complete your payment securely.
                        </p>
                      </div>
                    )}

                    {paymentMethod === "mobilemoney" && (
                      <div className="space-y-4 mt-6">
                        <div className="space-y-2">
                          <Label htmlFor="mobileProvider">Mobile Provider</Label>
                          <Select>
                            <SelectTrigger id="mobileProvider">
                              <SelectValue placeholder="Select provider" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="mtn">MTN Mobile Money</SelectItem>
                              <SelectItem value="vodafone">Vodafone Cash</SelectItem>
                              <SelectItem value="airteltigo">AirtelTigo Money</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="mobileNumber">Mobile Number</Label>
                          <Input id="mobileNumber" placeholder="Enter mobile number" required />
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-2">Shipping Information</h3>
                      <div className="bg-slate-50 p-4 rounded-md">
                        <p>John Doe</p>
                        <p>123 Main Street, Accra, Ghana</p>
                        <p>johndoe@example.com</p>
                        <p>+233 123 456 789</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">Payment Method</h3>
                      <div className="bg-slate-50 p-4 rounded-md">
                        <p className="flex items-center">
                          <CreditCard className="h-4 w-4 mr-2" />
                          Credit Card ending in 1234
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">Order Items</h3>
                      <div className="bg-slate-50 p-4 rounded-md space-y-2">
                        {cartSummary.items.map((item) => (
                          <div key={item.id} className="flex justify-between">
                            <span>
                              {item.title} x {item.quantity}
                            </span>
                            <span>${(item.price * item.quantity).toFixed(2)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-between">
                {step > 1 && (
                  <Button variant="outline" onClick={handleBack}>
                    Back
                  </Button>
                )}
                {step < 3 ? (
                  <Button onClick={handleContinue} className={`${step > 1 ? "" : "ml-auto"}`}>
                    Continue
                  </Button>
                ) : (
                  <Button className="bg-green-600 hover:bg-green-700">Place Order</Button>
                )}
              </CardFooter>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cartSummary.items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>
                      {item.title} x {item.quantity}
                    </span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}

                <Separator />

                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${cartSummary.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>${cartSummary.shipping.toFixed(2)}</span>
                </div>
                {cartSummary.discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span>-${cartSummary.discount.toFixed(2)}</span>
                  </div>
                )}
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${cartSummary.total.toFixed(2)}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}

