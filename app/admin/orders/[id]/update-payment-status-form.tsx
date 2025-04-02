"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { updatePaymentStatus } from "@/app/actions/order"
import { toast } from "@/hooks/use-toast"

interface UpdatePaymentStatusFormProps {
  orderId: string
  currentStatus: string
}

export default function UpdatePaymentStatusForm({ orderId, currentStatus }: UpdatePaymentStatusFormProps) {
  const [status, setStatus] = useState(currentStatus)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (status === currentStatus) {
      toast({
        title: "No changes",
        description: "The payment status is already set to this value.",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const result = await updatePaymentStatus(orderId, status)

      if (result.success) {
        toast({
          title: "Status updated",
          description: `Payment status has been updated to ${status}.`,
        })
        router.refresh()
      } else {
        const errors = result.errors || {}

        if (errors._form) {
          toast({
            title: "Error",
            description: errors._form[0],
            variant: "destructive",
          })
        } else {
          toast({
            title: "Error",
            description: "Failed to update payment status.",
            variant: "destructive",
          })
        }
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Update Payment Status</label>
        <Select value={status} onValueChange={setStatus}>
          <SelectTrigger>
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="paid">Paid</SelectItem>
            <SelectItem value="refunded">Refunded</SelectItem>
            <SelectItem value="failed">Failed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting || status === currentStatus}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Updating...
          </>
        ) : (
          "Update Payment Status"
        )}
      </Button>
    </form>
  )
}

