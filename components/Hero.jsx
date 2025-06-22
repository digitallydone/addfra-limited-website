
import { useState, useEffect } from "react";
import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

const heroImages = [
  "/assets/upsa-au-in.png",
  "/assets/upsa-au-out.png",
  "/assets/upsa-au-top.png",
  "/assets/upsa-field.png"
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const scrollToContent = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background carousel */}
      <div className="absolute inset-0 -z-10">
        {heroImages.map((img, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <img 
              src={img} 
              alt={`UPSA Campus Image ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      
      {/* Carousel controls */}
      <div className="absolute top-1/2 left-4 z-20">
        <button 
          onClick={prevSlide}
          aria-label="Previous slide"
          className="text-white p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
      </div>
      <div className="absolute top-1/2 right-4 z-20">
        <button 
          onClick={nextSlide}
          aria-label="Next slide"
          className="text-white p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
      
      {/* Slide indicators */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-primary" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      <Container className="z-10 relative">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-white text-xs font-medium mb-6 animate-fadeIn">
            AUGUST 22-25, 2025
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white animate-fadeIn opacity-0" style={{ animationDelay: "200ms" }}>
            IEEE R8 <span className="text-primary">Africa Student & Young Professional</span> Congress
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8 animate-fadeIn opacity-0" style={{ animationDelay: "400ms" }}>
            Join us at University of Professional Studies, Accra (UPSA), Ghana for the premier gathering of IEEE members and STEM professionals from across Africa and beyond.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn opacity-0" style={{ animationDelay: "600ms" }}>
            <a 
              href="/registration" 
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-2px]"
            >
              Register Now
            </a>
            <a 
              href="#about" 
              className="px-6 py-3 bg-white/10 text-white border border-white/30 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300"
              onClick={(e) => {
                e.preventDefault();
                scrollToContent();
              }}
            >
              Learn More
            </a>
          </div>
          
          <div className="mt-8 text-white/80 text-sm animate-fadeIn opacity-0" style={{ animationDelay: "800ms" }}>
            <a href="https://www.ieeer8asypc.org" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              www.ieeer8asypc.org
            </a>
          </div>
        </div>
      </Container>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pulse z-20">
        <button 
          onClick={scrollToContent}
          aria-label="Scroll down"
          className="text-white hover:text-primary transition-colors duration-300"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
