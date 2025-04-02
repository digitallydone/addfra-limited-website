"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { updateUserRole } from "@/app/actions/user"
import { toast } from "@/hooks/use-toast"

interface ChangeRoleFormProps {
  userId: string
  currentRole: string
}

export default function ChangeRoleForm({ userId, currentRole }: ChangeRoleFormProps) {
  const [role, setRole] = useState(currentRole)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (role === currentRole) {
      toast({
        title: "No changes",
        description: "The role is already set to this value.",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const formData = new FormData()
      formData.append("role", role)

      const result = await updateUserRole(userId, formData)

      if (result.success) {
        toast({
          title: "Role updated",
          description: `User role has been updated to ${role}.`,
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
            description: "Failed to update user role.",
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
        <Select value={role} onValueChange={setRole}>
          <SelectTrigger>
            <SelectValue placeholder="Select role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="user">User</SelectItem>
            <SelectItem value="admin">Admin</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting || role === currentRole}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Updating...
          </>
        ) : (
          "Update Role"
        )}
      </Button>
    </form>
  )
}

