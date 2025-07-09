// Path: components\ServicesCarousel.jsx
"use client";
import React from "react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { services } from "@/lib/services";

// const services = [
//   {
//     title: "Bulk Fuel Tankers",
//     image: "/images/fuel-tanker.jpg",
//     description:
//       "Custom-designed fuel tankers built to meet safety and efficiency standards for transport.",
//     link: "/services/bulk-fuel-tankers",
//   },
//   {
//     title: "Cold Rooms",
//     image: "/images/cold-room.jpg",
//     description:
//       "Durable, energy-efficient cold storage rooms ideal for food and pharmaceutical storage.",
//     link: "/services/cold-rooms",
//   },
//   {
//     title: "Flat Bed Semi Trailers",
//     image: "/images/flatbed.jpg",
//     description:
//       "Reliable and strong flatbed trailers for transporting large and heavy-duty loads.",
//     link: "/services/flat-bed-semi-trailers",
//   },
//   {
//     title: "House Metal Burglary",
//     image: "/images/burglary.jpg",
//     description:
//       "Secure and stylish metal burglary solutions including doors and window bars.",
//     link: "/services/house-metal-burglary",
//   },
//   {
//     title: "Refrigerated Truck Bodies",
//     image: "/images/refrigerated-truck.jpg",
//     description:
//       "Insulated truck bodies for transporting perishable goods under controlled temperatures.",
//     link: "/services/refrigerated-truck-bodies",
//   },
//   {
//     title: "Signboards And Billboards",
//     image: "/images/billboard.jpg",
//     description:
//       "High-impact signboards and billboards designed to increase brand visibility.",
//     link: "/services/signboards-billboards",
//   },
//   {
//     title: "Truck Body Building",
//     image: "/images/truck-body.jpg",
//     description:
//       "Custom-built truck bodies tailored for logistics, construction, and more.",
//     link: "/services/truck-body-building",
//   },
//   {
//     title: "Water Tanker Fabrication",
//     image: "/images/water-tanker.jpg",
//     description:
//       "Robust water tankers engineered for industrial, commercial, and agricultural use.",
//     link: "/services/water-tanker-fabrication",
//   },
// ];

export default function ServicesCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container px-4 mx-auto">
      <style jsx>{`
        .slick-dots {
          bottom: -50px;
        }
        .slick-dots li button:before {
          color: #3b82f6;
          font-size: 12px;
        }
        .slick-dots li.slick-active button:before {
          color: #1d4ed8;
        }
        .slick-prev:before,
        .slick-next:before {
          color: #374151;
          font-size: 20px;
        }
        .slick-prev {
          left: -30px;
          z-index: 10;
        }
        .slick-next {
          right: -30px;
          z-index: 10;
        }
      `}</style>

      <div className="mb-16 text-center">
        <h2 className="mb-4 text-3xl font-bold text-slate-900">Our Services</h2>
        <p className="max-w-3xl mx-auto text-lg text-slate-700">
          We offer a comprehensive range of services to meet all your automobile
          needs.
        </p>
      </div>

      <Slider {...settings}>
        {services.map((service, index) => (
          <div key={index} className="px-2">
            <div className="h-full mx-2 overflow-hidden bg-white rounded-lg shadow-lg">
              <img
                src={service.image}
                alt={service.title}
                className="object-cover w-full h-48"
              />
              <div className="p-4">
                <h3 className="mb-2 text-xl font-bold text-gray-800 line-clamp-2">
                  {service.title}
                </h3>
                <p className="mb-4 text-sm text-gray-600 line-clamp-3">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}` || "#"}
                  className="inline-block px-4 py-2 text-white transition-colors duration-200 bg-blue-600 rounded hover:bg-blue-700"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
