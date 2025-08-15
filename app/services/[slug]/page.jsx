// Path: app\services\[slug]\page.jsx
// // Path: app\services\[slug]\page.jsx
// "use client";

// import Image from "next/image";

// import { getServiceBySlug } from "@/app/actions/services";
// import { notFound } from "next/navigation";
// import { use, useEffect, useState } from "react";
// import { toast } from "sonner";

// export default function ServicePage({ params }) {
//   const { slug } = use(params);

//   const [service, setService] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Fetch services on component mount
//   useEffect(() => {
//     fetchServices();
//   }, []);

//   async function fetchServices() {
//     try {
//       setLoading(true);
//       // Fetch service by slug

//       const fetchedService = await getServiceBySlug(slug);
//       setService(fetchedService);
//     } catch (error) {
//       console.error("Error fetching services:", error);
//       toast.error("Failed to fetch services");
//     } finally {
//       setLoading(false);
//     }
//   }

//   if (!service && !loading) return notFound();

//   return (
//     <main className="max-w-4xl p-6 mx-auto">
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         service && (
//           <div className="overflow-hidden rounded-lg shadow-lg">
//             <Image
//               src={service.image[0] || "/placeholder-image.jpg"}
//               alt={service.title}
//               width={1200}
//               height={400}
//               className="object-cover w-full h-72"
//             />
//             <div className="p-6 bg-white">
//               <h1 className="mb-4 text-3xl font-bold">{service.title}</h1>
//               <p className="mb-4 text-gray-700">{service.description}</p>
//               <p className="text-gray-600">{service.details}</p>
//             </div>
//           </div>
//         )
//       )}
//     </main>
//   );
// }



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

  useEffect(() => {
    fetchService();
  }, []);

  async function fetchService() {
    try {
      setLoading(true);
      const fetchedService = await getServiceBySlug(slug);
      setService(fetchedService);
    } catch (error) {
      console.error("Error fetching service:", error);
      toast.error("Failed to fetch service");
    } finally {
      setLoading(false);
    }
  }

  if (!service && !loading) return notFound();

  return (
    <main className="max-w-5xl p-6 mx-auto">
      {loading ? (
        <div className="flex items-center justify-center min-h-[300px]">
          <span className="text-gray-500 animate-pulse">Loading...</span>
        </div>
      ) : (
        service && (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Service Header */}
            <div className="p-6">
              <h1 className="mb-2 text-3xl font-bold">{service.title}</h1>
              <p className="text-gray-600">{service.description}</p>
            </div>
            {/* Image Gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {service.image && service.image.length > 0 ? (
                service.image.map((img, idx) => (
                  <div key={idx} className="relative w-full h-64">
                    <Image
                      src={img || "/placeholder-image.jpg"}
                      alt={`${service.title} - ${idx + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))
              ) : (
                <div className="relative w-full h-64">
                  <Image
                    src="/placeholder-image.jpg"
                    alt="Placeholder"
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>

            {/* Content Section */}
            <div className="p-8">
              <h1 className="mb-4 text-4xl font-bold text-gray-900">{service.title}</h1>
              <p className="mb-6 text-lg text-gray-700 leading-relaxed">
                {service.description}
              </p>
              {service.details && (
                <p className="text-gray-600 leading-relaxed">{service.details}</p>
              )}
            </div>
          </div>
        )
      )}
    </main>
  );
}
