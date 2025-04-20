import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import prisma from "@/lib/prisma"

export default async function VehiclesPage({ searchParams }) {
  const page = Number(searchParams.page) || 1
  const limit = 9
  const skip = (page - 1) * limit

  const make = searchParams.make || ""
  const bodyType = searchParams.bodyType || ""
  const minPrice = Number(searchParams.minPrice) || 0
  const maxPrice = Number(searchParams.maxPrice) || 1000000
  const sort = searchParams.sort || "newest"

  // Build filter conditions
  const where = {
    status: "available",
  }

  if (make) {
    where.make = {
      contains: make,
      mode: "insensitive",
    }
  }

  if (bodyType) {
    where.bodyType = bodyType
  }

  where.price = {
    gte: minPrice,
    lte: maxPrice,
  }

  // Build sort options
  let orderBy = {}

  switch (sort) {
    case "newest":
      orderBy = { createdAt: "desc" }
      break
    case "oldest":
      orderBy = { createdAt: "asc" }
      break
    case "price-high":
      orderBy = { price: "desc" }
      break
    case "price-low":
      orderBy = { price: "asc" }
      break
    default:
      orderBy = { createdAt: "desc" }
  }

  // Get vehicles with pagination
  const vehicles = await prisma.vehicle.findMany({
    where,
    orderBy,
    skip,
    take: limit,
  })

  // Get total count for pagination
  const total = await prisma.vehicle.count({ where })
  const totalPages = Math.ceil(total / limit)

  // Get unique makes for filter
  const makes = await prisma.vehicle.findMany({
    where: { status: "available" },
    select: { make: true },
    distinct: ["make"],
  })

  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Vehicles</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Browse our selection of quality vehicles available for purchase
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8">
        <form className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
            <Input
              type="search"
              name="make"
              placeholder="Search by make or model..."
              className="pl-9"
              defaultValue={make}
            />
          </div>

          <Select name="bodyType" defaultValue={bodyType}>
            <SelectTrigger>
              <SelectValue placeholder="Body Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Body Types</SelectItem>
              <SelectItem value="sedan">Sedan</SelectItem>
              <SelectItem value="suv">SUV</SelectItem>
              <SelectItem value="hatchback">Hatchback</SelectItem>
              <SelectItem value="coupe">Coupe</SelectItem>
              <SelectItem value="convertible">Convertible</SelectItem>
              <SelectItem value="wagon">Wagon</SelectItem>
              <SelectItem value="van">Van</SelectItem>
              <SelectItem value="truck">Truck</SelectItem>
            </SelectContent>
          </Select>

          <Select name="sort" defaultValue={sort}>
            <SelectTrigger>
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
            </SelectContent>
          </Select>

          <Button type="submit">
            <Filter className="h-4 w-4 mr-2" />
            Apply Filters
          </Button>
        </form>
      </div>

      {/* Vehicles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicles.length > 0 ? (
          vehicles.map((vehicle) => (
            <Card key={vehicle.id} className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden bg-slate-100">
                {vehicle.images && vehicle.images.length > 0 ? (
                  <img
                    src={vehicle.images[0] || "/placeholder.svg"}
                    alt={`${vehicle.make} ${vehicle.model}`}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center bg-slate-200 text-slate-400">
                    No Image
                  </div>
                )}
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg">
                    {vehicle.make} {vehicle.model}
                  </h3>
                  <Badge className="bg-green-500">${vehicle.price.toLocaleString()}</Badge>
                </div>
                <div className="text-sm text-slate-500 mb-3">
                  {vehicle.year} • {vehicle.mileage.toLocaleString()} km •{" "}
                  {vehicle.transmission.charAt(0).toUpperCase() + vehicle.transmission.slice(1)} •{" "}
                  {vehicle.fuelType.charAt(0).toUpperCase() + vehicle.fuelType.slice(1)}
                </div>
                <p className="text-sm text-slate-600 mb-4 line-clamp-2">{vehicle.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {vehicle.features.slice(0, 3).map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                  {vehicle.features.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{vehicle.features.length - 3} more
                    </Badge>
                  )}
                </div>
                <div className="flex justify-between">
                  <Link href={`/vehicles/${vehicle.id}`}>
                    <Button variant="outline">View Details</Button>
                  </Link>
                  <Link href={`/vehicles/${vehicle.id}/enquire`}>
                    <Button>Enquire Now</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="col-span-3 text-center py-12 text-slate-500">
            <p className="text-lg mb-4">No vehicles found matching your criteria</p>
            <Link href="/vehicles">
              <Button>View All Vehicles</Button>
            </Link>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-12">
          <Pagination>
            <PaginationContent>
              {page > 1 && (
                <PaginationItem>
                  <PaginationPrevious
                    href={`/vehicles?page=${page - 1}&make=${make}&bodyType=${bodyType}&sort=${sort}`}
                  />
                </PaginationItem>
              )}

              {Array.from({ length: Math.min(totalPages, 3) }, (_, i) => {
                const pageNumber = i + 1
                const isCurrentPage = pageNumber === page

                return (
                  <PaginationItem key={pageNumber}>
                    <PaginationLink
                      href={`/vehicles?page=${pageNumber}&make=${make}&bodyType=${bodyType}&sort=${sort}`}
                      isActive={isCurrentPage}
                    >
                      {pageNumber}
                    </PaginationLink>
                  </PaginationItem>
                )
              })}

              {totalPages > 3 && (
                <>
                  {page < totalPages - 2 && (
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                  )}
                  {page < totalPages && (
                    <PaginationItem>
                      <PaginationLink
                        href={`/vehicles?page=${totalPages}&make=${make}&bodyType=${bodyType}&sort=${sort}`}
                      >
                        {totalPages}
                      </PaginationLink>
                    </PaginationItem>
                  )}
                </>
              )}

              {page < totalPages && (
                <PaginationItem>
                  <PaginationNext href={`/vehicles?page=${page + 1}&make=${make}&bodyType=${bodyType}&sort=${sort}`} />
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  )
}
