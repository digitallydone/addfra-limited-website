import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import prisma from "@/lib/prisma"
import EnquiryForm from "./enquiry-form"

export default async function VehicleEnquiryPage({ params }) {
  const { id } = params

  // Get vehicle by id
  const vehicle = await prisma.vehicle.findUnique({
    where: { id },
  })

  if (!vehicle) {
    notFound()
  }

  return (
    <div className="container mx-auto py-12">
      <div className="mb-8">
        <Link href={`/vehicles/${id}`}>
          <Button variant="ghost" size="sm" className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Vehicle Details
          </Button>
        </Link>

        <h1 className="text-3xl font-bold">
          Enquire About {vehicle.make} {vehicle.model} {vehicle.year}
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
              <CardDescription>
                Fill out the form below to enquire about this vehicle. Our team will get back to you as soon as
                possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <EnquiryForm vehicleId={id} vehicle={vehicle} />
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Vehicle Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video w-full overflow-hidden rounded-lg bg-slate-100 mb-4">
                {vehicle.images && vehicle.images.length > 0 ? (
                  <img
                    src={vehicle.images[0] || "/placeholder.svg"}
                    alt={`${vehicle.make} ${vehicle.model}`}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center bg-slate-200 text-slate-400">
                    No Image
                  </div>
                )}
              </div>

              <h3 className="text-lg font-bold mb-2">
                {vehicle.make} {vehicle.model} {vehicle.year}
              </h3>

              <div className="text-2xl font-bold text-primary mb-4">${vehicle.price.toLocaleString()}</div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">Mileage:</span>
                  <span className="font-medium">{vehicle.mileage.toLocaleString()} km</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Transmission:</span>
                  <span className="font-medium">
                    {vehicle.transmission.charAt(0).toUpperCase() + vehicle.transmission.slice(1)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Fuel Type:</span>
                  <span className="font-medium">
                    {vehicle.fuelType.charAt(0).toUpperCase() + vehicle.fuelType.slice(1)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Body Type:</span>
                  <span className="font-medium">
                    {vehicle.bodyType.charAt(0).toUpperCase() + vehicle.bodyType.slice(1)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Color:</span>
                  <span className="font-medium">{vehicle.color}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
