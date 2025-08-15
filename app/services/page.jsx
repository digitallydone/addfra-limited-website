// Path: app\services\page.jsx
"use client";

import Image from "next/image";
import Link from "next/link";

import { getServices } from "@/app/actions/services";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function ServicesListPage() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch services on component mount
  useEffect(() => {
    fetchServices();
  }, []);

  async function fetchServices() {
    try {
      setLoading(true);
      const fetchedServices = await getServices();
      setServices(fetchedServices);
    } catch (error) {
      console.error("Error fetching services:", error);
      toast.error("Failed to fetch services");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="container p-6 mx-auto">
      <h1 className="mb-8 text-4xl font-bold text-center">Our Services</h1>
      {loading ? (
        <p>Loading...</p>
      ) : services.length === 0 ? (
        <p>No services found</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="block overflow-hidden transition border rounded-lg shadow hover:shadow-md"
            >
              <Image
                src={service.image[0] || "/placeholder-image.jpg"}
                alt={service.title}
                width={600}
                height={300}
                className="object-cover w-full h-48"
              />
              <div className="p-4">
                <h2 className="mb-2 text-xl font-semibold">{service.title}</h2>
                <p className="text-sm text-gray-600">{service.description}</p>
                <span className="inline-block mt-2 font-medium text-blue-600">
                  Learn More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
