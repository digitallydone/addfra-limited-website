"use client"

import type React from "react"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { Upload, X, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { createProduct, updateProduct } from "@/app/actions/product"
import { uploadImage } from "@/app/actions/upload"
import { toast } from "@/hooks/use-toast"

interface ProductFormProps {
  product?: any // The product object for editing, undefined for new product
}

export default function ProductForm({ product }: ProductFormProps) {
  const router = useRouter()
  const [images, setImages] = useState<string[]>(product?.images || [])
  const [uploading, setUploading] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) return

    setUploading(true)

    try {
      // Upload each file to Cloudinary
      const uploadPromises = Array.from(files).map(async (file) => {
        const formData = new FormData()
        formData.append("file", file)

        const result = await uploadImage(formData)
        if (result.success) {
          return result.url
        }
        throw new Error(result.error || "Failed to upload image")
      })

      const uploadedUrls = await Promise.all(uploadPromises)
      setImages([...images, ...uploadedUrls])

      toast({
        title: "Images uploaded",
        description: `Successfully uploaded ${uploadedUrls.length} images.`,
      })
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

  const removeImage = (index: number) => {
    const newImages = [...images]
    newImages.splice(index, 1)
    setImages(newImages)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      const formData = new FormData(e.currentTarget)

      // Add images to form data
      formData.append("imageUrls", JSON.stringify(images))

      let result
      if (product) {
        // Update existing product
        result = await updateProduct(product.id, formData)
      } else {
        // Create new product
        result = await createProduct(formData)
      }

      if (result.success) {
        toast({
          title: product ? "Product updated" : "Product created",
          description: product ? "Product updated successfully" : "Product created successfully",
        })
        router.push("/admin/products")
        router.refresh()
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
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter product name"
                  defaultValue={product?.name || ""}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select name="category" defaultValue={product?.category || ""}>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="parts">Parts</SelectItem>
                      <SelectItem value="accessories">Accessories</SelectItem>
                      <SelectItem value="electronics">Electronics</SelectItem>
                      <SelectItem value="tools">Tools</SelectItem>
                      <SelectItem value="vehicles">Vehicles</SelectItem>
                      <SelectItem value="materials">Materials</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="brand">Brand</Label>
                  <Input id="brand" name="brand" placeholder="Enter brand name" defaultValue={product?.brand || ""} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Enter product description"
                  rows={6}
                  defaultValue={product?.description || ""}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="features">Key Features</Label>
                <Textarea
                  id="features"
                  name="features"
                  placeholder="Enter key features (one per line)"
                  rows={4}
                  defaultValue={product?.features?.join("\n") || ""}
                />
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
                  <Input
                    id="price"
                    name="price"
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="0.00"
                    defaultValue={product?.price || ""}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="comparePrice">Compare at Price ($)</Label>
                  <Input
                    id="comparePrice"
                    name="comparePrice"
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="0.00"
                    defaultValue={product?.comparePrice || ""}
                  />
                  <p className="text-xs text-slate-500">If set, the original price will be shown as a strikethrough.</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cost">Cost per item ($)</Label>
                  <Input
                    id="cost"
                    name="cost"
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="0.00"
                    defaultValue={product?.cost || ""}
                  />
                  <p className="text-xs text-slate-500">Used to calculate profit margins (not shown to customers).</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="sku">SKU (Stock Keeping Unit)</Label>
                  <Input id="sku" name="sku" placeholder="Enter SKU" defaultValue={product?.sku || ""} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="barcode">Barcode (ISBN, UPC, GTIN, etc.)</Label>
                  <Input
                    id="barcode"
                    name="barcode"
                    placeholder="Enter barcode"
                    defaultValue={product?.barcode || ""}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="weight">Weight (kg)</Label>
                  <Input
                    id="weight"
                    name="weight"
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="0.00"
                    defaultValue={product?.weight || ""}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantity in stock</Label>
                  <Input
                    id="quantity"
                    name="quantity"
                    type="number"
                    min="0"
                    step="1"
                    placeholder="0"
                    defaultValue={product?.quantity || "0"}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lowStock">Low stock threshold</Label>
                  <Input
                    id="lowStock"
                    name="lowStock"
                    type="number"
                    min="0"
                    step="1"
                    placeholder="5"
                    defaultValue={product?.lowStock || "5"}
                    required
                  />
                  <p className="text-xs text-slate-500">You'll be notified when stock reaches this level.</p>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="status">Inventory Status</Label>
                <Select name="status" defaultValue={product?.status || "active"}>
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
                    {product ? "Updating..." : "Saving..."}
                  </>
                ) : product ? (
                  "Update Product"
                ) : (
                  "Publish Product"
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </form>
  )
}

