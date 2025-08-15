// Path: app\services\[slug]\page.jsx
"use client";

import Image from "next/image";

import { getServiceBySlug } from "@/app/actions/services";
import { notFound } from "next/navigation";
import { use, useEffect, useState } from "react";
import { toast } from "sonner";

export default function ServicePage({ params }) {
  const { slug } = use(params);

  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch services on component mount
  useEffect(() => {
    fetchServices();
  }, []);

  async function fetchServices() {

    console.log('====================================');
    console.log(slug);
    console.log('====================================');
    
    try {
      setLoading(true);
      // Fetch service by slug

      const fetchedService = await getServiceBySlug(slug);
      setService(fetchedService);
    } catch (error) {
      console.error("Error fetching services:", error);
      toast.error("Failed to fetch services");
    } finally {
      setLoading(false);
    }
  }

  if (!service) return notFound();

  return (
    <main className="max-w-4xl p-6 mx-auto">
      {loading ? (
        <p>Loading...</p>
      ) : service ? (
        <div className="overflow-hidden rounded-lg shadow-lg">
          <Image
            src={service.image[0] || "/placeholder-image.jpg"}
            alt={service.title}
            width={1200}
            height={400}
            className="object-cover w-full h-72"
          />
          <div className="p-6 bg-white">
            <h1 className="mb-4 text-3xl font-bold">{service.title}</h1>
            <p className="mb-4 text-gray-700">{service.description}</p>
            <p className="text-gray-600">{service.details}</p>
          </div>
        </div>
      ) : (
        notFound()
      )}
    </main>
  );
}
