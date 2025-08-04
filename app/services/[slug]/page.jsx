// Path: app\services\[slug]\page.jsx

import Image from "next/image";
import { notFound } from "next/navigation";
import { services } from "@/lib/services";

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default function ServicePage({ params }) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) return notFound();

  return (
    <main className="max-w-4xl p-6 mx-auto">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <Image
          src={service.image}
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
    </main>
  );
}
