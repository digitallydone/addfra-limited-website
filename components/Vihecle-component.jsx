// Path: components\Vihecle-component.jsx
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import prisma from "@/lib/prisma";
import Link from "next/link";
import { SearchForm } from "./SearchForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, Search } from "lucide-react";

export default async function VehiclesComponent() {
  // Fetch vehicles data
  const vehicles = await prisma.vehicle.findMany({
    where: { status: "available" },
    orderBy: { createdAt: "desc" },
    take: 12
  });

  return (
    <div className="w-full container mx-auto py-8">
      <div className="text-center mb-4">
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Browse our selection of quality vehicles
        </p>
      </div>

      <SearchForm />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {vehicles.length > 0 ? (
          vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))
        ) : (
          <NoVehiclesFound />
        )}
      </div>
    </div>
  );
}

function VehicleCard({ vehicle }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/vehicles/${vehicle.id}`} className="block aspect-video bg-slate-100">
        {vehicle.images?.[0] ? (
          <img
            src={vehicle.images[0]}
            alt={`${vehicle.make} ${vehicle.model}`}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full flex items-center justify-center text-slate-400">
            No Image
          </div>
        )}
      </Link>
      
      <CardContent className="p-2">
        <div className="flex justify-between mb-2">
          <h3 className="font-bold text-xs md:text-sm">
            {vehicle.make} {vehicle.model}
          </h3>
        {/*   <Badge className="bg-green-500">
            {vehicle.price.toLocaleString()}
          </Badge> */}
        </div>
        
        <VehicleInfo vehicle={vehicle} />

     
        <VehicleFeatures features={vehicle.features} />
        
       {/*  <div className="flex justify-between mt-4">
          <Link href={`/vehicles/${vehicle.id}`}>
            <Button variant="outline">Details</Button>
          </Link>
          <Link href={`/vehicles/${vehicle.id}/enquire`}>
            <Button>Enquire</Button>
          </Link>
        </div> */}
      </CardContent>
    </Card>
  );
}

function VehicleInfo({ vehicle }) {
  const { year, mileage, transmission, fuelType } = vehicle;
  const formattedTransmission = transmission.charAt(0).toUpperCase() + transmission.slice(1);
  const formattedFuelType = fuelType.charAt(0).toUpperCase() + fuelType.slice(1);

  return (
    <div className="text-xs md:text-sm text-slate-500 mb-3">
      {year} • {mileage.toLocaleString()} km • {formattedTransmission} • {formattedFuelType}
    </div>
  );
}

function VehicleFeatures({ features = [] }) {
  if (features.length === 0) return null;
  
  return (
    <div className="hidden md:flex flex-wrap gap-1 mb-1">
      {features.slice(0, 3).map((feature, i) => (
        <Badge key={i} variant="outline" className="text-xs">
          {feature}
        </Badge>
      ))}
      {features.length > 3 && (
        <Badge variant="outline" className="text-xs">
          +{features.length - 3} more
        </Badge>
      )}
    </div>
  );
}

function NoVehiclesFound() {
  return (
    <div className="col-span-full text-center py-12 text-slate-500">
      <p className="text-lg mb-4">No vehicles found</p>
      <Link href="/vehicles">
        <Button>View All Vehicles</Button>
      </Link>
    </div>
  );
}