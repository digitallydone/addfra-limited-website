// import Link from "next/link"
// import { ArrowRight, Calendar, User, MapPin, CheckCircle } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// // Sample project data
// const projects = [
//   {
//     id: 1,
//     title: "Fleet of Refrigerated Trucks for Fresh Foods Ltd",
//     image: "/placeholder.svg?height=400&width=600",
//     status: "Completed",
//     category: "Fleet",
//     client: "Fresh Foods Ltd",
//     location: "Accra, Ghana",
//     startDate: "January 2023",
//     endDate: "April 2023",
//     description:
//       "Design and build of 10 custom refrigerated trucks for food distribution with dual-temperature zones and advanced tracking systems.",
//     highlights: [
//       "Custom refrigeration systems with dual temperature zones",
//       "GPS tracking and temperature monitoring",
//       "Fuel-efficient design reducing consumption by 15%",
//       "Enhanced insulation for better temperature retention",
//       "Custom loading mechanisms for efficient operations",
//     ],
//   },
//   {
//     id: 2,
//     title: "Mobile Medical Clinic Vans for Health Ministry",
//     image: "/placeholder.svg?height=400&width=600",
//     status: "Completed",
//     category: "Specialized",
//     client: "Ministry of Health",
//     location: "Various Locations, Ghana",
//     startDate: "March 2023",
//     endDate: "August 2023",
//     description:
//       "Development of 5 mobile medical clinic vans equipped with examination rooms, basic laboratory facilities, and medical storage systems.",
//     highlights: [
//       "Custom medical examination rooms",
//       "Integrated power systems for medical equipment",
//       "Climate-controlled medication storage",
//       "Wheelchair accessibility features",
//       "Satellite communication systems",
//     ],
//   },
//   {
//     id: 3,
//     title: "Heavy-Duty Trailers for Mining Operations",
//     image: "/placeholder.svg?height=400&width=600",
//     status: "Completed",
//     category: "Industrial",
//     client: "GoldStar Mining Company",
//     location: "Western Region, Ghana",
//     startDate: "May 2023",
//     endDate: "September 2023",
//     description:
//       "Construction of 8 heavy-duty trailers designed for transporting mining equipment and materials in challenging terrain conditions.",
//     highlights: [
//       "Reinforced chassis for extreme loads",
//       "Advanced suspension systems for rough terrain",
//       "Corrosion-resistant materials for harsh environments",
//       "Custom securing mechanisms for oversized equipment",
//       "Enhanced safety features for mining operations",
//     ],
//   },
//   {
//     id: 4,
//     title: "Customized Delivery Vans for E-commerce Company",
//     image: "/placeholder.svg?height=400&width=600",
//     status: "In Progress",
//     category: "Fleet",
//     client: "QuickShop Online",
//     location: "Accra, Ghana",
//     startDate: "August 2023",
//     endDate: "Estimated: December 2023",
//     description:
//       "Ongoing project to build 15 customized delivery vans with organized storage systems and efficient loading/unloading features.",
//     highlights: [
//       "Modular storage systems for package organization",
//       "Quick-access side and rear doors",
//       "Integrated package tracking technology",
//       "Fuel-efficient engines for urban delivery",
//       "Driver comfort and safety enhancements",
//     ],
//   },
//   {
//     id: 5,
//     title: "Agricultural Transport Trailers",
//     image: "/placeholder.svg?height=400&width=600",
//     status: "In Progress",
//     category: "Agricultural",
//     client: "Ghana Agricultural Cooperative",
//     location: "Northern Region, Ghana",
//     startDate: "September 2023",
//     endDate: "Estimated: January 2024",
//     description:
//       "Development of specialized trailers for transporting agricultural produce with preservation features to maintain freshness during transit.",
//     highlights: [
//       "Ventilated storage compartments for fresh produce",
//       "Adjustable partitions for different crop types",
//       "Easy-clean surfaces for hygiene maintenance",
//       "Lightweight design for reduced fuel consumption",
//       "Weather protection systems",
//     ],
//   },
//   {
//     id: 6,
//     title: "Mobile Workshop Trucks for Utility Company",
//     image: "/placeholder.svg?height=400&width=600",
//     status: "Planning",
//     category: "Specialized",
//     client: "National Power Distribution",
//     location: "Multiple Regions, Ghana",
//     startDate: "Planned: January 2024",
//     endDate: "Estimated: May 2024",
//     description:
//       "Upcoming project to design and build 12 mobile workshop trucks equipped with tools, spare parts, and equipment for field repairs of power infrastructure.",
//     highlights: [
//       "Comprehensive tool storage systems",
//       "Onboard power generation",
//       "Hydraulic lifting equipment",
//       "Specialized compartments for electrical components",
//       "All-terrain capability for remote access",
//     ],
//   },
// ]

// export default function ProjectsPage() {
//   return (
//     <main className="flex min-h-screen flex-col">
//       {/* Hero Section */}
//       <section className="relative h-[40vh] w-full bg-gradient-to-r from-slate-900 to-slate-800 flex items-center">
//         <div className="absolute inset-0 opacity-30 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center"></div>
//         <div className="container mx-auto px-4 z-10">
//           <div className="max-w-3xl">
//             <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Projects</h1>
//             <p className="text-xl text-slate-200">
//               Explore our portfolio of custom vehicle projects for clients across various industries.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Project Filters */}
//       <section className="py-8 bg-white border-b">
//         <div className="container mx-auto px-4">
//           <Tabs defaultValue="all" className="w-full">
//             <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
//               <TabsTrigger value="all">All Projects</TabsTrigger>
//               <TabsTrigger value="completed">Completed</TabsTrigger>
//               <TabsTrigger value="in-progress">In Progress</TabsTrigger>
//               <TabsTrigger value="planning">Planning</TabsTrigger>
//             </TabsList>

//             <TabsContent value="all">
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {projects.map((project) => (
//                   <ProjectCard key={project.id} project={project} />
//                 ))}
//               </div>
//             </TabsContent>

//             <TabsContent value="completed">
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {projects
//                   .filter((p) => p.status === "Completed")
//                   .map((project) => (
//                     <ProjectCard key={project.id} project={project} />
//                   ))}
//               </div>
//             </TabsContent>

//             <TabsContent value="in-progress">
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {projects
//                   .filter((p) => p.status === "In Progress")
//                   .map((project) => (
//                     <ProjectCard key={project.id} project={project} />
//                   ))}
//               </div>
//             </TabsContent>

//             <TabsContent value="planning">
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {projects
//                   .filter((p) => p.status === "Planning")
//                   .map((project) => (
//                     <ProjectCard key={project.id} project={project} />
//                   ))}
//               </div>
//             </TabsContent>
//           </Tabs>
//         </div>
//       </section>

//       {/* Project Timeline */}
//       <section className="py-16 bg-slate-50">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold mb-12 text-center">Project Timeline</h2>

//           <div className="relative">
//             {/* Timeline line */}
//             <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>

//             {/* Timeline items */}
//             <div className="space-y-12">
//               {projects
//                 .sort((a, b) => {
//                   // Sort by start date (most recent first)
//                   const dateA = a.startDate.includes("Planned")
//                     ? new Date(a.startDate.replace("Planned: ", ""))
//                     : new Date(a.startDate)
//                   const dateB = b.startDate.includes("Planned")
//                     ? new Date(b.startDate.replace("Planned: ", ""))
//                     : new Date(b.startDate)
//                   return dateB.getTime() - dateA.getTime()
//                 })
//                 .map((project, index) => (
//                   <div key={project.id} className="relative">
//                     <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
//                       <div className="w-4 h-4 bg-white rounded-full"></div>
//                     </div>
//                     <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${index % 2 === 0 ? "" : "md:rtl"}`}>
//                       <div
//                         className={`md:text-right md:pr-12 ${index % 2 === 0 ? "" : "md:text-left md:pl-12 md:pr-0"}`}
//                       >
//                         <Badge
//                           className={`mb-2 ${
//                             project.status === "Completed"
//                               ? "bg-green-500"
//                               : project.status === "In Progress"
//                                 ? "bg-blue-500"
//                                 : "bg-amber-500"
//                           }`}
//                         >
//                           {project.status}
//                         </Badge>
//                         <h3 className="text-xl font-bold text-primary">
//                           {project.startDate} - {project.endDate}
//                         </h3>
//                         <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
//                         <div className="flex items-center mb-2 md:justify-end">
//                           <User className="h-4 w-4 text-slate-500 mr-1" />
//                           <span className="text-sm text-slate-600">{project.client}</span>
//                         </div>
//                         <div className="flex items-center mb-4 md:justify-end">
//                           <MapPin className="h-4 w-4 text-slate-500 mr-1" />
//                           <span className="text-sm text-slate-600">{project.location}</span>
//                         </div>
//                         <p className="text-slate-700">{project.description}</p>
//                       </div>
//                       <div className={`${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
//                         <img
//                           src={project.image || "/placeholder.svg"}
//                           alt={project.title}
//                           className="rounded-lg shadow-md"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 bg-primary text-white">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold mb-6">Have a Custom Project in Mind?</h2>
//           <p className="text-xl mb-8 max-w-2xl mx-auto">
//             Contact our team today to discuss your custom vehicle requirements. We'll work with you to bring your vision
//             to life.
//           </p>
//           <Link href="/contact?project=custom">
//             <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-slate-100">
//               Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
//             </Button>
//           </Link>
//         </div>
//       </section>
//     </main>
//   )
// }

// // Project Card Component
// function ProjectCard({ project }) {
//   return (
//     <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
//       <div className="relative h-48 overflow-hidden">
//         <img
//           src={project.image || "/placeholder.svg"}
//           alt={project.title}
//           className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
//         />
//         <Badge
//           className={`absolute top-3 right-3 ${
//             project.status === "Completed"
//               ? "bg-green-500"
//               : project.status === "In Progress"
//                 ? "bg-blue-500"
//                 : "bg-amber-500"
//           }`}
//         >
//           {project.status}
//         </Badge>
//       </div>
//       <CardHeader>
//         <div className="flex justify-between items-start mb-2">
//           <CardTitle className="text-lg">{project.title}</CardTitle>
//           <Badge variant="outline" className="ml-2">
//             {project.category}
//           </Badge>
//         </div>
//       </CardHeader>
//       <CardContent>
//         <div className="flex items-center mb-2">
//           <User className="h-4 w-4 text-slate-500 mr-2" />
//           <span className="text-sm text-slate-600">{project.client}</span>
//         </div>
//         <div className="flex items-center mb-2">
//           <MapPin className="h-4 w-4 text-slate-500 mr-2" />
//           <span className="text-sm text-slate-600">{project.location}</span>
//         </div>
//         <div className="flex items-center mb-4">
//           <Calendar className="h-4 w-4 text-slate-500 mr-2" />
//           <span className="text-sm text-slate-600">
//             {project.startDate} - {project.endDate}
//           </span>
//         </div>
//         <p className="text-slate-700 mb-4 line-clamp-3">{project.description}</p>
//         <div className="space-y-1">
//           {project.highlights.slice(0, 2).map((highlight, index) => (
//             <div key={index} className="flex items-start">
//               <CheckCircle className="h-4 w-4 text-green-500 mr-2 shrink-0 mt-0.5" />
//               <span className="text-sm text-slate-700">{highlight}</span>
//             </div>
//           ))}
//           {project.highlights.length > 2 && (
//             <div className="text-sm text-primary">+{project.highlights.length - 2} more features</div>
//           )}
//         </div>
//       </CardContent>
//       <CardFooter>
//         <Link href={`/projects/${project.id}`} className="w-full">
//           <Button variant="outline" className="w-full">
//             View Project Details
//           </Button>
//         </Link>
//       </CardFooter>
//     </Card>
//   )
// }

import React from 'react'

const page = () => {
  return (
    <div>
      
    </div>
  )
}

export default page
