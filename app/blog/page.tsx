import Link from "next/link"
import { Calendar, User, Tag, ArrowRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: "The Future of Refrigerated Transport in Africa",
    image: "/placeholder.svg?height=400&width=600",
    excerpt:
      "Exploring the latest innovations in refrigerated transport technology and their impact on food distribution across Africa.",
    date: "October 15, 2023",
    author: "Daniel Addo",
    category: "Industry Insights",
    tags: ["Refrigeration", "Technology", "Food Transport"],
  },
  {
    id: 2,
    title: "Maintenance Tips for Commercial Vehicle Fleets",
    image: "/placeholder.svg?height=400&width=600",
    excerpt:
      "Essential maintenance practices to extend the lifespan of your commercial vehicles and reduce operational costs.",
    date: "September 28, 2023",
    author: "Francis Mensah",
    category: "Maintenance",
    tags: ["Fleet Management", "Maintenance", "Cost Reduction"],
  },
  {
    id: 3,
    title: "Customizing Vehicles for Healthcare Delivery",
    image: "/placeholder.svg?height=400&width=600",
    excerpt:
      "How customized mobile medical units are revolutionizing healthcare delivery in rural areas of Ghana and beyond.",
    date: "September 10, 2023",
    author: "Abena Frimpong",
    category: "Case Studies",
    tags: ["Healthcare", "Mobile Clinics", "Rural Development"],
  },
  {
    id: 4,
    title: "Sustainable Practices in Vehicle Customization",
    image: "/placeholder.svg?height=400&width=600",
    excerpt:
      "Implementing eco-friendly materials and processes in vehicle customization to reduce environmental impact.",
    date: "August 22, 2023",
    author: "Kwame Osei",
    category: "Sustainability",
    tags: ["Eco-friendly", "Sustainability", "Green Technology"],
  },
  {
    id: 5,
    title: "Choosing the Right Refrigeration System for Your Vehicle",
    image: "/placeholder.svg?height=400&width=600",
    excerpt:
      "A comprehensive guide to selecting the appropriate refrigeration system based on your specific transportation needs.",
    date: "August 5, 2023",
    author: "Daniel Addo",
    category: "Guides",
    tags: ["Refrigeration", "Buying Guide", "Temperature Control"],
  },
  {
    id: 6,
    title: "The Impact of Technology on Fleet Management",
    image: "/placeholder.svg?height=400&width=600",
    excerpt:
      "How GPS tracking, IoT sensors, and fleet management software are transforming commercial vehicle operations.",
    date: "July 18, 2023",
    author: "Francis Mensah",
    category: "Technology",
    tags: ["GPS Tracking", "IoT", "Fleet Management", "Technology"],
  },
]

export default function BlogPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full bg-gradient-to-r from-slate-900 to-slate-800 flex items-center">
        <div className="absolute inset-0 opacity-30 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Blog & Insights</h1>
            <p className="text-xl text-slate-200">
              Stay updated with the latest news, industry insights, and expert advice from our team.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="w-full md:w-auto flex items-center gap-2">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="industry-insights">Industry Insights</SelectItem>
                  <SelectItem value="maintenance">Maintenance</SelectItem>
                  <SelectItem value="case-studies">Case Studies</SelectItem>
                  <SelectItem value="sustainability">Sustainability</SelectItem>
                  <SelectItem value="guides">Guides</SelectItem>
                  <SelectItem value="technology">Technology</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Author" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Authors</SelectItem>
                  <SelectItem value="daniel-addo">Daniel Addo</SelectItem>
                  <SelectItem value="francis-mensah">Francis Mensah</SelectItem>
                  <SelectItem value="abena-frimpong">Abena Frimpong</SelectItem>
                  <SelectItem value="kwame-osei">Kwame Osei</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="w-full md:w-auto flex items-center gap-2">
              <div className="relative w-full md:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
                <Input type="search" placeholder="Search articles..." className="pl-9" />
              </div>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Featured Article</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="rounded-lg overflow-hidden">
              <img
                src={blogPosts[0].image || "/placeholder.svg"}
                alt={blogPosts[0].title}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="space-y-4">
              <Badge>{blogPosts[0].category}</Badge>
              <h3 className="text-3xl font-bold">{blogPosts[0].title}</h3>
              <div className="flex items-center text-slate-600 space-x-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="text-sm">{blogPosts[0].date}</span>
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  <span className="text-sm">{blogPosts[0].author}</span>
                </div>
              </div>
              <p className="text-lg text-slate-700">{blogPosts[0].excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {blogPosts[0].tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="bg-slate-100">
                    {tag}
                  </Badge>
                ))}
              </div>
              <Link href={`/blog/${blogPosts[0].id}`}>
                <Button>
                  Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge>{post.category}</Badge>
                    <div className="flex items-center text-slate-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="text-xs">{post.date}</span>
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 line-clamp-3 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-slate-600">
                    <User className="h-4 w-4 mr-1" />
                    <span className="text-sm">{post.author}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href={`/blog/${post.id}`} className="w-full">
                    <Button variant="outline" className="w-full">
                      Read Article
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Browse by Category</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Link href="/blog/category/industry-insights">
              <div className="bg-slate-100 hover:bg-slate-200 transition-colors rounded-lg p-4 text-center">
                <Tag className="h-6 w-6 mx-auto mb-2 text-primary" />
                <h3 className="font-medium">Industry Insights</h3>
                <p className="text-sm text-slate-600">12 articles</p>
              </div>
            </Link>

            <Link href="/blog/category/maintenance">
              <div className="bg-slate-100 hover:bg-slate-200 transition-colors rounded-lg p-4 text-center">
                <Tag className="h-6 w-6 mx-auto mb-2 text-primary" />
                <h3 className="font-medium">Maintenance</h3>
                <p className="text-sm text-slate-600">8 articles</p>
              </div>
            </Link>

            <Link href="/blog/category/case-studies">
              <div className="bg-slate-100 hover:bg-slate-200 transition-colors rounded-lg p-4 text-center">
                <Tag className="h-6 w-6 mx-auto mb-2 text-primary" />
                <h3 className="font-medium">Case Studies</h3>
                <p className="text-sm text-slate-600">6 articles</p>
              </div>
            </Link>

            <Link href="/blog/category/sustainability">
              <div className="bg-slate-100 hover:bg-slate-200 transition-colors rounded-lg p-4 text-center">
                <Tag className="h-6 w-6 mx-auto mb-2 text-primary" />
                <h3 className="font-medium">Sustainability</h3>
                <p className="text-sm text-slate-600">5 articles</p>
              </div>
            </Link>

            <Link href="/blog/category/guides">
              <div className="bg-slate-100 hover:bg-slate-200 transition-colors rounded-lg p-4 text-center">
                <Tag className="h-6 w-6 mx-auto mb-2 text-primary" />
                <h3 className="font-medium">Guides</h3>
                <p className="text-sm text-slate-600">9 articles</p>
              </div>
            </Link>

            <Link href="/blog/category/technology">
              <div className="bg-slate-100 hover:bg-slate-200 transition-colors rounded-lg p-4 text-center">
                <Tag className="h-6 w-6 mx-auto mb-2 text-primary" />
                <h3 className="font-medium">Technology</h3>
                <p className="text-sm text-slate-600">7 articles</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Stay updated with our latest articles, industry insights, and company news.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
            <Button variant="secondary" className="bg-white text-primary hover:bg-slate-100">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

