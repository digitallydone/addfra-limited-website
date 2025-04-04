"use client"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Upload, X, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { createProduct } from "@/app/actions/product"
import { toast } from "@/hooks/use-toast"

export default function NewProductPage() {
  const router = useRouter()
  const [images, setImages] = useState([])
  const [uploading, setUploading] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const formRef = useRef(null)

  // This would upload to Cloudinary in a real app
  const handleImageUpload = async (e) => {
    const files = e.target.files
    if (!files || files.length === 0) return

    setUploading(true)

    try {
      // In a real app, you would upload to Cloudinary here
      // For demo purposes, we'll use placeholder images
      const newImages = Array.from(files).map(
        (_, index) => `/placeholder.svg?height=500&width=500&text=Product+Image+${images.length + index + 1}`,
      )

      setImages([...images, ...newImages])
    } catch (error) {
      console.error("Error uploading images:", error)
      toast({
        title: "Error",
        description: "Failed to upload images. Please try again.",
        variant: "destructive",
      })
    } finally {
      setUploading(false)
    }
  }

  const removeImage = (index) => {
    const newImages = [...images]
    newImages.splice(index, 1)
    setImages(newImages)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      const formData = new FormData(e.currentTarget)

      // Add images to form data
      formData.append("imageUrls", JSON.stringify(images))

      const result = await createProduct(formData)

      if (result.success) {
        toast({
          title: "Success",
          description: "Product created successfully",
        })
        router.push("/admin/products")
      } else {
        const errors = result.errors || {}

        // Display form errors
        if (errors._form) {
          toast({
            title: "Error",
            description: errors._form[0],
            variant: "destructive",
          })
        }

        // You could handle field-specific errors here
        console.error("Form errors:", errors)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <Link href="/admin/products">
          <Button variant="ghost" className="mr-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">Add New Product</h1>
      </div>

      <form ref={formRef} onSubmit={handleSubmit}>
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="general">General Information</TabsTrigger>
            <TabsTrigger value="images">Images</TabsTrigger>
            <TabsTrigger value="inventory">Inventory & Pricing</TabsTrigger>
          </TabsList>

          <TabsContent value="general">
            <Card>
              <CardHeader>
                <CardTitle>Product Information</CardTitle>
                <CardDescription>Enter the basic information about the product.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Product Name</Label>
                  <Input id="name" name="name" placeholder="Enter product name" required />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select name="category" defaultValue="">
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="parts">Parts</SelectItem>
                        <SelectItem value="accessories">Accessories</SelectItem>
                        <SelectItem value="electronics">Electronics</SelectItem>
                        <SelectItem value="tools">Tools</SelectItem>
                        <SelectItem value="materials">Materials</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="brand">Brand</Label>
                    <Input id="brand" name="brand" placeholder="Enter brand name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Enter product description"
                    rows={6}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="features">Key Features</Label>
                  <Textarea id="features" name="features" placeholder="Enter key features (one per line)" rows={4} />
                  <p className="text-sm text-slate-500">
                    Enter each feature on a new line. These will be displayed as bullet points.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="images">
            <Card>
              <CardHeader>
                <CardTitle>Product Images</CardTitle>
                <CardDescription>
                  Upload images for the product. The first image will be used as the main image.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  {images.map((image, index) => (
                    <div key={index} className="relative rounded-md overflow-hidden border h-40">
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`Product image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        className="absolute top-2 right-2 h-8 w-8 rounded-full"
                        onClick={() => removeImage(index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                      {index === 0 && (
                        <div className="absolute bottom-0 left-0 right-0 bg-primary text-white text-xs py-1 text-center">
                          Main Image
                        </div>
                      )}
                    </div>
                  ))}

                  <div className="border border-dashed rounded-md h-40 flex flex-col items-center justify-center p-4">
                    <input
                      type="file"
                      id="image-upload"
                      multiple
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageUpload}
                      disabled={uploading}
                    />
                    <label
                      htmlFor="image-upload"
                      className="cursor-pointer flex flex-col items-center justify-center w-full h-full"
                    >
                      {uploading ? (
                        <>
                          <Loader2 className="h-8 w-8 text-primary animate-spin mb-2" />
                          <p className="text-sm text-slate-500">Uploading...</p>
                        </>
                      ) : (
                        <>
                          <Upload className="h-8 w-8 text-slate-400 mb-2" />
                          <p className="text-sm text-slate-500 text-center">Click to upload or drag and drop</p>
                          <p className="text-xs text-slate-400 mt-1">PNG, JPG or WEBP (max. 5MB)</p>
                        </>
                      )}
                    </label>
                  </div>
                </div>

                <div className="text-sm text-slate-500">
                  <p>Images will be automatically optimized and resized.</p>
                  <p>For best results, use images with a 1:1 aspect ratio.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="inventory">
            <Card>
              <CardHeader>
                <CardTitle>Inventory & Pricing</CardTitle>
                <CardDescription>Manage inventory levels and pricing information.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="price">Price ($)</Label>
                    <Input id="price" name="price" type="number" min="0" step="0.01" placeholder="0.00" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="comparePrice">Compare at Price ($)</Label>
                    <Input id="comparePrice" name="comparePrice" type="number" min="0" step="0.01" placeholder="0.00" />
                    <p className="text-xs text-slate-500">
                      If set, the original price will be shown as a strikethrough.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cost">Cost per item ($)</Label>
                    <Input id="cost" name="cost" type="number" min="0" step="0.01" placeholder="0.00" />
                    <p className="text-xs text-slate-500">Used to calculate profit margins (not shown to customers).</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="sku">SKU (Stock Keeping Unit)</Label>
                    <Input id="sku" name="sku" placeholder="Enter SKU" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="barcode">Barcode (ISBN, UPC, GTIN, etc.)</Label>
                    <Input id="barcode" name="barcode" placeholder="Enter barcode" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="weight">Weight (kg)</Label>
                    <Input id="weight" name="weight" type="number" min="0" step="0.01" placeholder="0.00" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="quantity">Quantity in stock</Label>
                    <Input id="quantity" name="quantity" type="number" min="0" step="1" placeholder="0" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lowStock">Low stock threshold</Label>
                    <Input id="lowStock" name="lowStock" type="number" min="0" step="1" placeholder="5" required />
                    <p className="text-xs text-slate-500">You'll be notified when stock reaches this level.</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="status">Inventory Status</Label>
                  <Select name="status" defaultValue="active">
                    <SelectTrigger id="status">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="out-of-stock">Out of Stock</SelectItem>
                      <SelectItem value="discontinued">Discontinued</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end space-x-4">
                <Button type="button" variant="outline" onClick={() => formRef.current?.reset()}>
                  Reset
                </Button>
                <Button type="submit" disabled={submitting}>
                  {submitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    "Publish Product"
                  )}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </form>
    </div>
  )
}

