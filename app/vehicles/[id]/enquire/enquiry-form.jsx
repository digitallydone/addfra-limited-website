"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2 } from "lucide-react"
import { toast } from "@/hooks/use-toast"

export default function EnquiryForm({ vehicle }) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    enquiryType: "general",
    message: `I am interested in the ${vehicle.make} ${vehicle.model} ${vehicle.year} priced at $${vehicle.price.toLocaleString()}. Please contact me with more information.`,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSelectChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Prepare data for submission
      const enquiryData = {
        ...formData,
        vehicleId: vehicle.id,
        vehicleDetails: {
          make: vehicle.make,
          model: vehicle.model,
          year: vehicle.year,
          price: vehicle.price,
        },
      }

      // Submit to API
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(enquiryData),
      })

      const data = await response.json()

      if (response.ok) {
        toast({
          title: "Success",
          description: "Your enquiry has been submitted. We will contact you shortly.",
        })
        router.push(`/vehicles/${vehicle.id}/enquire/thank-you`)
      } else {
        throw new Error(data.message || "Something went wrong")
      }
    } catch (error) {
      console.error("Error submitting enquiry:", error)
      toast({
        title: "Error",
        description: error.message || "Failed to submit enquiry. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter your first name"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter your last name"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="enquiryType">Enquiry Type</Label>
        <Select value={formData.enquiryType} onValueChange={(value) => handleSelectChange("enquiryType", value)}>
          <SelectTrigger id="enquiryType">
            <SelectValue placeholder="Select enquiry type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="general">General Enquiry</SelectItem>
            <SelectItem value="test-drive">Test Drive Request</SelectItem>
            <SelectItem value="price">Price Enquiry</SelectItem>
            <SelectItem value="trade-in">Trade-In Valuation</SelectItem>
            <SelectItem value="financing">Financing Options</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message"
          rows={5}
          required
        />
      </div>

      <div className="flex justify-end">
        <Button type="submit" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            "Submit Enquiry"
          )}
        </Button>
      </div>
    </form>
  )
}
