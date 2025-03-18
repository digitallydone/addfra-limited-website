"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "John Mensah",
    company: "Fresh Foods Delivery",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "ADDFRA Limited built us a fleet of refrigerated vans that have been crucial to our business growth. The quality of their work is exceptional, and their after-sales service is outstanding.",
  },
  {
    id: 2,
    name: "Akosua Boateng",
    company: "Boateng Logistics",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "We've been working with ADDFRA for over 5 years now. Their custom trailers have significantly improved our logistics operations. Highly recommended!",
  },
  {
    id: 3,
    name: "Emmanuel Osei",
    company: "Osei Construction",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 4,
    text: "The specialized trucks ADDFRA built for our construction company have been reliable and durable, even in the toughest conditions. Great value for money.",
  },
  {
    id: 4,
    name: "Fatima Ibrahim",
    company: "Ibrahim Pharmaceuticals",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "Our temperature-controlled delivery vans from ADDFRA have been perfect for transporting sensitive medical supplies. The attention to detail in their work is impressive.",
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  useEffect(() => {
    let interval
    if (autoplay) {
      interval = setInterval(() => {
        nextSlide()
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [autoplay, currentIndex])

  const handleMouseEnter = () => setAutoplay(false)
  const handleMouseLeave = () => setAutoplay(true)

  return (
    <div className="relative max-w-4xl mx-auto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="w-full flex-shrink-0 bg-white shadow-lg mx-2">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-slate-600">{testimonial.company}</p>
                  </div>
                  <div className="ml-auto flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-slate-300"}`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-slate-700 italic">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-white shadow-md z-10"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-white shadow-md z-10"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-primary" : "bg-slate-300"}`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

