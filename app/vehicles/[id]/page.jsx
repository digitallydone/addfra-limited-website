import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Gauge, Fuel, Truck, Palette, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import prisma from "@/lib/prisma"

export default async function VehicleDetailPage({ params }) {
  const { id } = params

  // Get vehicle by id
  const vehicle = await prisma.vehicle.findUnique({
    where: { id },
  })

  if (!vehicle) {
    notFound()
  }

  // Get similar vehicles
  const similarVehicles = await prisma.vehicle.findMany({
    where: {
      OR: [{ make: vehicle.make }, { bodyType: vehicle.bodyType }],
      NOT: {
        id: vehicle.id,
      },
      status: "available",
    },
    take: 3,
  })

  return (
    <div className="container mx-auto py-12">
      <div className="mb-8">
        <Link href="/vehicles">
          <Button variant="ghost" size="sm" className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Vehicles
          </Button>
        </Link>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <h1 className="text-3xl font-bold">
            {vehicle.make} {vehicle.model} {vehicle.year}
          </h1>
          <div className="flex items-center gap-2">
            <Badge className="text-lg py-1.5 px-4 bg-green-500">${vehicle.price.toLocaleString()}</Badge>
            <Link href={`/vehicles/${vehicle.id}/enquire`}>
              <Button size="lg">Enquire Now</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Vehicle Images */}
          <div className="space-y-4">
            {vehicle.images && vehicle.images.length > 0 ? (
              <>
                <div className="aspect-video w-full overflow-hidden rounded-lg bg-slate-100">
                  <img
                    src={vehicle.images[0] || "/placeholder.svg"}
                    alt={`${vehicle.make} ${vehicle.model}`}
                    className="h-full w-full object-cover"
                  />
                </div>

                {vehicle.images.length > 1 && (
                  <div className="grid grid-cols-4 gap-4">
                    {vehicle.images.slice(1, 5).map((image, index) => (
                      <div key={index} className="aspect-video w-full overflow-hidden rounded-lg bg-slate-100">
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`${vehicle.make} ${vehicle.model} ${index + 2}`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="aspect-video w-full flex items-center justify-center rounded-lg bg-slate-200 text-slate-400">
                No Images Available
              </div>
            )}
          </div>

          {/* Vehicle Description */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Description</h2>
            <div className="prose max-w-none">
              {vehicle.description.split("\n").map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Vehicle Features */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {vehicle.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Vehicle Specifications */}
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Specifications</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-slate-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Year</p>
                  <p className="font-medium">{vehicle.year}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center">
                  <Gauge className="h-5 w-5 text-slate-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Mileage</p>
                  <p className="font-medium">{vehicle.mileage.toLocaleString()} km</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center">
                  <Truck className="h-5 w-5 text-slate-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Transmission</p>
                  <p className="font-medium">
                    {vehicle.transmission.charAt(0).toUpperCase() + vehicle.transmission.slice(1)}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center">
                  <Fuel className="h-5 w-5 text-slate-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Fuel Type</p>
                  <p className="font-medium">{vehicle.fuelType.charAt(0).toUpperCase() + vehicle.fuelType.slice(1)}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center">
                  <Truck className="h-5 w-5 text-slate-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Body Type</p>
                  <p className="font-medium">{vehicle.bodyType.charAt(0).toUpperCase() + vehicle.bodyType.slice(1)}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center">
                  <Palette className="h-5 w-5 text-slate-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Color</p>
                  <p className="font-medium">{vehicle.color}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Enquiry CTA */}
          <div className="border rounded-lg p-6 bg-slate-50">
            <h2 className="text-xl font-bold mb-2">Interested in this vehicle?</h2>
            <p className="text-slate-600 mb-4">
              Contact us today to schedule a test drive or get more information about this {vehicle.make}{" "}
              {vehicle.model}.
            </p>
            <Link href={`/vehicles/${vehicle.id}/enquire`} className="w-full">
              <Button className="w-full">Enquire Now</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Similar Vehicles */}
      {similarVehicles.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Similar Vehicles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {similarVehicles.map((similarVehicle) => (
              <div key={similarVehicle.id} className="border rounded-lg overflow-hidden">
                <div className="aspect-video w-full overflow-hidden bg-slate-100">
                  {similarVehicle.images && similarVehicle.images.length > 0 ? (
                    <img
                      src={similarVehicle.images[0] || "/placeholder.svg"}
                      alt={`${similarVehicle.make} ${similarVehicle.model}`}
                      className="h-full w-full object-cover transition-transform hover:scale-105"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center bg-slate-200 text-slate-400">
                      No Image
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold">
                      {similarVehicle.make} {similarVehicle.model}
                    </h3>
                    <Badge>${similarVehicle.price.toLocaleString()}</Badge>
                  </div>
                  <p className="text-sm text-slate-500 mb-4">
                    {similarVehicle.year} • {similarVehicle.mileage.toLocaleString()} km
                  </p>
                  <Link href={`/vehicles/${similarVehicle.id}`}>
                    <Button variant="outline" className="w-full">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
