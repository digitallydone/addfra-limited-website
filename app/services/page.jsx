// Path: app\services\page.jsx
// app/services/page.jsx
import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/services";

export default function ServicesListPage() {
  return (
    <main className="container p-6 mx-auto">
      <h1 className="mb-8 text-4xl font-bold text-center">Our Services</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="block overflow-hidden transition border rounded-lg shadow hover:shadow-md"
          >
            <Image
              src={service.image}
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
    </main>
  );
}
