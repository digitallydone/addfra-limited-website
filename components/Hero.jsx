// Path: components\Hero.jsx

"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button"; // Adjust if needed

const carouselSlides = [
  {
    id: 1,
    title: "Premium Refrigerated Trucks",
    description:
      "Temperature-controlled transport solutions for perishable goods.",
    image: "/carousel/refrigerated-truck.jpg",
    cta: "View Fleet",
  },
  {
    id: 2,
    title: "Custom Trailers",
    description: "Tailored to your specific business requirements.",
    // image: "/carousel/custom-trailer.jpg",
    image: "/tru-nk-sm.jpg",
    cta: "Get Quote",
  },
  // {
  //   id: 3,
  //   title: "Commercial Vans",
  //   description: "Reliable transport for your delivery needs.",
  //   image: "/trunk-sm.jpg",
  //   cta: "Explore Options",
  // },
  {
    id: 4,
    title: "General Metal Fabrication",
    description: "Expert metal fabrication for all your automotive needs.",
    image: "/trunk-sm.jpg",
    cta: "Learn More",
  },
  {
    id: 5,
    title: "Maintenance Services",
    description: "Keep your fleet running smoothly with our expert care.",
    image: "/trunk-sm.jpg",
    cta: "Our Services",
  },
  {
    id: 6,
    title: "24/7 Support",
    description: "We're always here when you need assistance.",
    image: "/trunk-sm.jpg",
    cta: "Contact Us",
  },
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goTo = (index) => setCurrent(index);
  const prevSlide = () =>
    setCurrent((prev) =>
      prev === 0 ? carouselSlides.length - 1 : prev - 1
    );
  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % carouselSlides.length);

  return (
    <section className="relative h-[40vh] w-full overflow-hidden">
      <div className="relative w-full h-full">
        {carouselSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Overlay and Image */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-800/80"></div>
            <div
              className="absolute inset-0 bg-center bg-cover opacity-40"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>

            {/* Content */}
            <div className="container relative z-10 flex items-center h-full px-4 mx-auto">
              <div className="max-w-3xl">
                <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">
                  {slide.title}
                </h1>
                <p className="mb-8 text-xl text-slate-200">
                  {slide.description}
                </p>
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  {slide.cta} <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute left-0 right-0 z-20 flex justify-center gap-2 bottom-8">
        {carouselSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              current === index
                ? "bg-white"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute z-20 p-2 transition-colors -translate-y-1/2 left-4 top-1/2 text-white/80 hover:text-white"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute z-20 p-2 transition-colors -translate-y-1/2 right-4 top-1/2 text-white/80 hover:text-white"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8" />
      </button>
    </section>
  );
}
