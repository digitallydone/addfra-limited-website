import Link from "next/link";
import { Filter, Search, ChevronDown, ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { getProducts } from "@/app/actions/product";

export default async function ShopPage({ searchParams }) {
  // Parse search parameters
  const category =
    typeof searchParams.category === "string"
      ? searchParams.category
      : undefined;
  const status =
    typeof searchParams.status === "string" ? searchParams.status : undefined;
  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined;
  const sort =
    typeof searchParams.sort === "string" ? searchParams.sort : "newest";
  const page =
    typeof searchParams.page === "string"
      ? Number.parseInt(searchParams.page)
      : 1;
  const limit = 12;

  // Fetch products from database
  const { products, pagination } = await getProducts({
    category,
    status: "active", // Only show active products
    search,
    sort,
    page,
    limit,
  });

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full bg-gradient-to-r from-slate-900 to-slate-800 flex items-center">
        <div className="absolute inset-0 opacity-30 bg-[url('/shop-img.jpg?height=800&width=1600')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Shop
            </h1>
            <p className="text-xl text-slate-200">
              Browse our selection of high-quality parts, accessories, and tools
              for your vehicles.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-slate-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="w-full md:w-auto flex items-center gap-2">
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" /> Filters{" "}
                <ChevronDown className="h-4 w-4" />
              </Button>

              <Select defaultValue={category || "all"}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="parts">Parts</SelectItem>
                  <SelectItem value="accessories">Accessories</SelectItem>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="tools">Tools</SelectItem>
                  <SelectItem value="materials">Materials</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="0-100">$0 - $100</SelectItem>
                  <SelectItem value="100-500">$100 - $500</SelectItem>
                  <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                  <SelectItem value="1000+">$1,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="w-full md:w-auto flex items-center gap-2">
              <div className="relative w-full md:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-9"
                />
              </div>
              <Select defaultValue={sort}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Featured</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="name-asc">Name: A to Z</SelectItem>
                  <SelectItem value="name-desc">Name: Z to A</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.length > 0 ? (
              products.map((product) => (
                <Card
                  key={product.id}
                  className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={
                        product.images?.[0] ||
                        "/placeholder.svg?height=300&width=300"
                      }
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full"
                    >
                      <Heart className="h-4 w-4 text-slate-700" />
                    </Button>
                  </div>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                      <Badge variant="outline" className="ml-2">
                        {product.category}
                      </Badge>
                    </div>
                    <p className="text-slate-700 text-sm mb-2 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex justify-between items-center mt-4">
                      <p className="text-xl font-bold text-primary">
                        ${product.price.toFixed(2)}
                      </p>
                      <div className="flex items-center">
                        <span className="text-sm ml-1">
                          {product.quantity > 0 ? "In Stock" : "Out of Stock"}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Link href={`/shop/products/${product.id}`}>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </Link>
                    <Button
                      size="sm"
                      className="flex items-center gap-1"
                      disabled={product.quantity <= 0}
                    >
                      <ShoppingCart className="h-4 w-4" /> Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <div className="col-span-4 text-center py-12">
                <p className="text-lg text-slate-500">
                  No products found. Try adjusting your filters.
                </p>
              </div>
            )}
          </div>

          {/* Pagination */}
          {pagination && pagination.totalPages > 1 && (
            <div className="mt-12">
              <Pagination>
                <PaginationContent>
                  {page > 1 && (
                    <PaginationItem>
                      <PaginationPrevious
                        href={`/shop?page=${page - 1}&sort=${sort}${
                          category ? `&category=${category}` : ""
                        }${search ? `&search=${search}` : ""}`}
                      />
                    </PaginationItem>
                  )}

                  {Array.from(
                    { length: Math.min(5, pagination.totalPages) },
                    (_, i) => {
                      const pageNumber = i + 1;
                      return (
                        <PaginationItem key={pageNumber}>
                          <PaginationLink
                            href={`/shop?page=${pageNumber}&sort=${sort}${
                              category ? `&category=${category}` : ""
                            }${search ? `&search=${search}` : ""}`}
                            isActive={pageNumber === page}
                          >
                            {pageNumber}
                          </PaginationLink>
                        </PaginationItem>
                      );
                    }
                  )}

                  {pagination.totalPages > 5 && <PaginationEllipsis />}

                  {page < pagination.totalPages && (
                    <PaginationItem>
                      <PaginationNext
                        href={`/shop?page=${page + 1}&sort=${sort}${
                          category ? `&category=${category}` : ""
                        }${search ? `&search=${search}` : ""}`}
                      />
                    </PaginationItem>
                  )}
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Shop by Category
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md group">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Vehicle Parts"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  Vehicle Parts
                </h3>
                <p className="text-slate-200 mb-4">
                  High-quality parts for all types of commercial vehicles
                </p>
                <Link href="/shop?category=parts">
                  <Button variant="secondary" size="sm">
                    Browse Parts
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative h-64 rounded-lg overflow-hidden shadow-md group">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Accessories"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  Accessories
                </h3>
                <p className="text-slate-200 mb-4">
                  Enhance your vehicle with our range of accessories
                </p>
                <Link href="/shop?category=accessories">
                  <Button variant="secondary" size="sm">
                    Browse Accessories
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative h-64 rounded-lg overflow-hidden shadow-md group">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Tools & Equipment"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  Tools & Equipment
                </h3>
                <p className="text-slate-200 mb-4">
                  Professional tools for maintenance and repairs
                </p>
                <Link href="/shop?category=tools">
                  <Button variant="secondary" size="sm">
                    Browse Tools
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest product updates, special
            offers, and promotions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
            <Button
              variant="secondary"
              className="bg-white text-primary hover:bg-slate-100"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
