// "use client"

// import { useState, useRef } from "react"
// import { useRouter } from "next/navigation"
// import Link from "next/link"
// import { ArrowLeft, Upload, X, Loader2 } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { toast } from "@/hooks/use-toast"
// import { uploadToCloudinary, extractPublicIdFromUrl, deleteFromCloudinary } from "@/lib/cloudinary"

// export default function NewProductPage() {
//   const router = useRouter()
//   const [images, setImages] = useState([])
//   const [imagePublicIds, setImagePublicIds] = useState([]) // Track public IDs for deletion
//   const [uploading, setUploading] = useState(false)
//   const [submitting, setSubmitting] = useState(false)
//   const formRef = useRef(null)

//   // Handle image upload using Cloudinary
//   const handleImageUpload = async (e) => {
//     const files = e.target.files
//     if (!files || files.length === 0) return

//     setUploading(true)

//     try {
//       // Create an array of promises for each file upload
//       const uploadPromises = Array.from(files).map(async (file) => {
//         const cloudinaryResponse = await uploadToCloudinary(file)

//         // Return both URL and public ID for tracking
//         return {
//           url: cloudinaryResponse.secure_url,
//           publicId: cloudinaryResponse.public_id
//         }
//       })

//       // Wait for all uploads to complete
//       const newImages = await Promise.all(uploadPromises)

//       // Update state with new images and their public IDs
//       setImages([...images, ...newImages.map(img => img.url)])
//       setImagePublicIds([...imagePublicIds, ...newImages.map(img => img.publicId)])

//       toast({
//         title: "Upload Complete",
//         description: `Successfully uploaded ${files.length} image(s) to Cloudinary`,
//       })
//     } catch (error) {
//       console.error("Error uploading images:", error)
//       toast({
//         title: "Upload Failed",
//         description: "There was a problem uploading your images. Please try again.",
//         variant: "destructive",
//       })
//     } finally {
//       setUploading(false)
//     }
//   }

//   const removeImage = async (index) => {
//     try {
//       // Remove the image from Cloudinary
//       const publicId = imagePublicIds[index]
//       if (publicId) {
//         await deleteFromCloudinary(publicId)
//       }

//       // Update state
//       const newImages = [...images]
//       const newPublicIds = [...imagePublicIds]
//       newImages.splice(index, 1)
//       newPublicIds.splice(index, 1)

//       setImages(newImages)
//       setImagePublicIds(newPublicIds)

//       toast({
//         title: "Image Removed",
//         description: "The image has been removed successfully.",
//       })
//     } catch (error) {
//       console.error("Error removing image:", error)
//       toast({
//         title: "Error",
//         description: "Failed to remove the image. Please try again.",
//         variant: "destructive",
//       })
//     }
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setSubmitting(true)

//     try {
//       // Get form data
//       const formData = new FormData(formRef.current)

//       // Convert formData to regular object for easier handling
//       const productData = Object.fromEntries(formData.entries())

//       // Add the images array
//       productData.imageUrls = images
//       productData.imagePublicIds = imagePublicIds

//       // Parse features from text area into array
//       if (productData.features) {
//         productData.features = productData.features
//           .split('\n')
//           .filter(feature => feature.trim() !== '')
//       }

//       // Parse numeric values
//       if (productData.price) productData.price = parseFloat(productData.price)
//       if (productData.comparePrice) productData.comparePrice = parseFloat(productData.comparePrice)
//       if (productData.cost) productData.cost = parseFloat(productData.cost)
//       if (productData.weight) productData.weight = parseFloat(productData.weight)
//       if (productData.quantity) productData.quantity = parseInt(productData.quantity)
//       if (productData.lowStock) productData.lowStock = parseInt(productData.lowStock)

//       // Make API call to create product
//       const response = await fetch('/api/products', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(productData),
//       })

//       const result = await response.json()

//       if (response.ok) {
//         toast({
//           title: "Success",
//           description: "Product created successfully",
//         })

//         // Redirect to products page or the newly created product page
//         router.push(`/admin/products/${result.id}`)
//       } else {
//         // Handle validation errors from API
//         if (result.errors) {
//           const errorMessages = Object.entries(result.errors)
//             .map(([field, message]) => `${field}: ${message}`)
//             .join(', ')

//           toast({
//             title: "Validation Error",
//             description: errorMessages || "Please check the form for errors",
//             variant: "destructive",
//           })
//         } else {
//           toast({
//             title: "Error",
//             description: result.message || "Failed to create product",
//             variant: "destructive",
//           })
//         }
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error)
//       toast({
//         title: "Error",
//         description: "An unexpected error occurred. Please try again.",
//         variant: "destructive",
//       })
//     } finally {
//       setSubmitting(false)
//     }
//   }

//   // Fetch categories from API
//   const [categories, setCategories] = useState([
//     { id: "parts", name: "Parts" },
//     { id: "accessories", name: "Accessories" },
//     { id: "electronics", name: "Electronics" },
//     { id: "tools", name: "Tools" },
//     { id: "materials", name: "Materials" },
//   ])

//   // Load categories when component mounts
//   // useEffect(() => {
//   //   const fetchCategories = async () => {
//   //     try {
//   //       const response = await fetch('/api/categories')
//   //       if (response.ok) {
//   //         const data = await response.json()
//   //         setCategories(data)
//   //       }
//   //     } catch (error) {
//   //       console.error("Error fetching categories:", error)
//   //     }
//   //   }
//   //
//   //   fetchCategories()
//   // }, [])

//   return (
//     <div className="space-y-6">
//       <div className="flex items-center">
//         <Link href="/admin/products">
//           <Button variant="ghost" className="mr-4">
//             <ArrowLeft className="mr-2 h-4 w-4" />
//             Back to Products
//           </Button>
//         </Link>
//         <h1 className="text-2xl font-bold">Add New Product</h1>
//       </div>

//       <form ref={formRef} onSubmit={handleSubmit}>
//         <Tabs defaultValue="general" className="w-full">
//           <TabsList className="grid w-full grid-cols-3 mb-8">
//             <TabsTrigger value="general">General Information</TabsTrigger>
//             <TabsTrigger value="images">Images</TabsTrigger>
//             <TabsTrigger value="inventory">Inventory & Pricing</TabsTrigger>
//           </TabsList>

//           <TabsContent value="general">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Product Information</CardTitle>
//                 <CardDescription>Enter the basic information about the product.</CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-6">
//                 <div className="space-y-2">
//                   <Label htmlFor="name">Product Name</Label>
//                   <Input id="name" name="name" placeholder="Enter product name" required />
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div className="space-y-2">
//                     <Label htmlFor="category">Category</Label>
//                     <Select name="category" defaultValue="">
//                       <SelectTrigger id="category">
//                         <SelectValue placeholder="Select category" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         {categories.map(category => (
//                           <SelectItem key={category.id} value={category.id}>
//                             {category.name}
//                           </SelectItem>
//                         ))}
//                       </SelectContent>
//                     </Select>
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="brand">Brand</Label>
//                     <Input id="brand" name="brand" placeholder="Enter brand name" />
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="description">Description</Label>
//                   <Textarea
//                     id="description"
//                     name="description"
//                     placeholder="Enter product description"
//                     rows={6}
//                     required
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="features">Key Features</Label>
//                   <Textarea id="features" name="features" placeholder="Enter key features (one per line)" rows={4} />
//                   <p className="text-sm text-slate-500">
//                     Enter each feature on a new line. These will be displayed as bullet points.
//                   </p>
//                 </div>
//               </CardContent>
//             </Card>
//           </TabsContent>

//           <TabsContent value="images">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Product Images</CardTitle>
//                 <CardDescription>
//                   Upload images for the product. The first image will be used as the main image.
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
//                   {images.map((image, index) => (
//                     <div key={index} className="relative rounded-md overflow-hidden border h-40">
//                       <img
//                         src={image}
//                         alt={`Product image ${index + 1}`}
//                         className="w-full h-full object-cover"
//                       />
//                       <Button
//                         type="button"
//                         variant="destructive"
//                         size="icon"
//                         className="absolute top-2 right-2 h-8 w-8 rounded-full"
//                         onClick={() => removeImage(index)}
//                       >
//                         <X className="h-4 w-4" />
//                       </Button>
//                       {index === 0 && (
//                         <div className="absolute bottom-0 left-0 right-0 bg-primary text-white text-xs py-1 text-center">
//                           Main Image
//                         </div>
//                       )}
//                     </div>
//                   ))}

//                   <div className="border border-dashed rounded-md h-40 flex flex-col items-center justify-center p-4">
//                     <input
//                       type="file"
//                       id="image-upload"
//                       multiple
//                       accept="image/*"
//                       className="hidden"
//                       onChange={handleImageUpload}
//                       disabled={uploading}
//                     />
//                     <label
//                       htmlFor="image-upload"
//                       className="cursor-pointer flex flex-col items-center justify-center w-full h-full"
//                     >
//                       {uploading ? (
//                         <>
//                           <Loader2 className="h-8 w-8 text-primary animate-spin mb-2" />
//                           <p className="text-sm text-slate-500">Uploading to Cloudinary...</p>
//                         </>
//                       ) : (
//                         <>
//                           <Upload className="h-8 w-8 text-slate-400 mb-2" />
//                           <p className="text-sm text-slate-500 text-center">Click to upload or drag and drop</p>
//                           <p className="text-xs text-slate-400 mt-1">PNG, JPG or WEBP (max. 5MB)</p>
//                         </>
//                       )}
//                     </label>
//                   </div>
//                 </div>

//                 <div className="text-sm text-slate-500">
//                   <p>Images will be automatically optimized and resized by Cloudinary.</p>
//                   <p>For best results, use images with a 1:1 aspect ratio.</p>
//                 </div>
//               </CardContent>
//             </Card>
//           </TabsContent>

//           <TabsContent value="inventory">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Inventory & Pricing</CardTitle>
//                 <CardDescription>Manage inventory levels and pricing information.</CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-6">
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                   <div className="space-y-2">
//                     <Label htmlFor="price">Price ($)</Label>
//                     <Input id="price" name="price" type="number" min="0" step="0.01" placeholder="0.00" required />
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="comparePrice">Compare at Price ($)</Label>
//                     <Input id="comparePrice" name="comparePrice" type="number" min="0" step="0.01" placeholder="0.00" />
//                     <p className="text-xs text-slate-500">
//                       If set, the original price will be shown as a strikethrough.
//                     </p>
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="cost">Cost per item ($)</Label>
//                     <Input id="cost" name="cost" type="number" min="0" step="0.01" placeholder="0.00" />
//                     <p className="text-xs text-slate-500">Used to calculate profit margins (not shown to customers).</p>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                   <div className="space-y-2">
//                     <Label htmlFor="sku">SKU (Stock Keeping Unit)</Label>
//                     <Input id="sku" name="sku" placeholder="Enter SKU" required />
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="barcode">Barcode (ISBN, UPC, GTIN, etc.)</Label>
//                     <Input id="barcode" name="barcode" placeholder="Enter barcode" />
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="weight">Weight (kg)</Label>
//                     <Input id="weight" name="weight" type="number" min="0" step="0.01" placeholder="0.00" />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div className="space-y-2">
//                     <Label htmlFor="quantity">Quantity in stock</Label>
//                     <Input id="quantity" name="quantity" type="number" min="0" step="1" placeholder="0" required />
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="lowStock">Low stock threshold</Label>
//                     <Input id="lowStock" name="lowStock" type="number" min="0" step="1" placeholder="5" required />
//                     <p className="text-xs text-slate-500">You'll be notified when stock reaches this level.</p>
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="status">Inventory Status</Label>
//                   <Select name="status" defaultValue="active">
//                     <SelectTrigger id="status">
//                       <SelectValue placeholder="Select status" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="active">Active</SelectItem>
//                       <SelectItem value="draft">Draft</SelectItem>
//                       <SelectItem value="out-of-stock">Out of Stock</SelectItem>
//                       <SelectItem value="discontinued">Discontinued</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
//               </CardContent>
//               <CardFooter className="flex justify-end space-x-4">
//                 <Button type="button" variant="outline" onClick={() => formRef.current?.reset()}>
//                   Reset
//                 </Button>
//                 <Button type="submit" disabled={submitting}>
//                   {submitting ? (
//                     <>
//                       <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                       Saving...
//                     </>
//                   ) : (
//                     "Publish Product"
//                   )}
//                 </Button>
//               </CardFooter>
//             </Card>
//           </TabsContent>
//         </Tabs>
//       </form>
//     </div>
//   )
// }

"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Upload, X, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";
import { uploadToCloudinary, deleteFromCloudinary } from "@/lib/cloudinary";
import { createProduct } from "@/app/actions/product";

export default function NewProductPage() {
  const router = useRouter();
  const [images, setImages] = useState([]);
  const [imagePublicIds, setImagePublicIds] = useState([]); // Track public IDs for deletion
  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState("general");
  const [previewImages, setPreviewImages] = useState([]);
  const formRef = useRef(null);

  // Handle image upload using Cloudinary
  const handleImageUpload = async (e) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);

    try {
      // Create temporary preview URLs for immediate feedback
      const newPreviews = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setPreviewImages([...previewImages, ...newPreviews]);

      // Create an array of promises for each file upload
      const uploadPromises = Array.from(files).map(async (file) => {
        const cloudinaryResponse = await uploadToCloudinary(file);

        // Return both URL and public ID for tracking
        return {
          url: cloudinaryResponse.secure_url,
          publicId: cloudinaryResponse.public_id,
        };
      });

      // Wait for all uploads to complete
      const newImages = await Promise.all(uploadPromises);

      // Update state with new images and their public IDs
      setImages([...images, ...newImages.map((img) => img.url)]);
      setImagePublicIds([
        ...imagePublicIds,
        ...newImages.map((img) => img.publicId),
      ]);

      // Remove the temporary previews
      setPreviewImages([]);

      toast({
        title: "Upload Complete",
        description: `Successfully uploaded ${files.length} image(s) to Cloudinary`,
      });
    } catch (error) {
      console.error("Error uploading images:", error);
      toast({
        title: "Upload Failed",
        description:
          "There was a problem uploading your images. Please try again.",
        variant: "destructive",
      });
      // Clear preview images if upload fails
      setPreviewImages([]);
    } finally {
      setUploading(false);
    }
  };

  const removeImage = async (index) => {
    try {
      // Remove the image from Cloudinary
      const publicId = imagePublicIds[index];
      if (publicId) {
        await deleteFromCloudinary(publicId);
      }

      // Update state
      const newImages = [...images];
      const newPublicIds = [...imagePublicIds];
      newImages.splice(index, 1);
      newPublicIds.splice(index, 1);

      setImages(newImages);
      setImagePublicIds(newPublicIds);

      toast({
        title: "Image Removed",
        description: "The image has been removed successfully.",
      });
    } catch (error) {
      console.error("Error removing image:", error);
      toast({
        title: "Error",
        description: "Failed to remove the image. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Collect all form data
      const formData = new FormData(formRef.current);
      const productData = {};

      // Convert FormData to object, handling all field types properly
      for (const [key, value] of formData.entries()) {
        productData[key] = value;
      }

      // Add the images and image public IDs
      productData.imageUrls = images;
      productData.imagePublicIds = imagePublicIds;

      // Process specific fields
      if (productData.features) {
        productData.features = productData.features
          .split("\n")
          .filter((feature) => feature.trim() !== "");
      } else {
        productData.features = [];
      }

      // Parse numeric values
      if (productData.price) productData.price = parseFloat(productData.price);
      if (productData.comparePrice)
        productData.comparePrice = parseFloat(productData.comparePrice);
      if (productData.cost) productData.cost = parseFloat(productData.cost);
      if (productData.weight)
        productData.weight = parseFloat(productData.weight);
      if (productData.quantity)
        productData.quantity = parseInt(productData.quantity);
      if (productData.lowStock)
        productData.lowStock = parseInt(productData.lowStock);

      console.log("Submitting product data:", productData);

      // Make API call to create product
      // const response = await fetch("/api/products", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(productData),
      // });

      // const result = await response.json();

      // if (response.ok) {
      //   toast({
      //     title: "Success",
      //     description: "Product created successfully",
      //   });

      //   // Redirect to products page or the newly created product page
      //   router.push(`/admin/products/${result.id}`);
      // } else {
      //   // Handle validation errors from API
      //   if (result.errors) {
      //     const errorMessages = Object.entries(result.errors)
      //       .map(([field, message]) => `${field}: ${message}`)
      //       .join(", ");

      //     toast({
      //       title: "Validation Error",
      //       description: errorMessages || "Please check the form for errors",
      //       variant: "destructive",
      //     });
      //   } else {
      //     toast({
      //       title: "Error",
      //       description: result.message || "Failed to create product",
      //       variant: "destructive",
      //     });
      //   }
      // }
      await createProduct(productData);
      toast({
        title: "Success",
        description: "Product created successfully",
      });
      // Redirect to products page or the newly created product page
      router.push(`/admin/products`);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  // Cleanup preview URLs when component unmounts
  useEffect(() => {
    return () => {
      previewImages.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [previewImages]);

  // Fetch categories from API
  const [categories, setCategories] = useState([
    { id: "parts", name: "Parts" },
    { id: "accessories", name: "Accessories" },
    { id: "electronics", name: "Electronics" },
    { id: "tools", name: "Tools" },
    { id: "materials", name: "Materials" },
  ]);

  // Load categories from API when component mounts
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("/api/categories");
        if (response.ok) {
          const data = await response.json();
          setCategories(data);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
        // Keep using the default categories if API call fails
      }
    };

    fetchCategories();
  }, []);

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
        <Tabs
          defaultValue="general"
          className="w-full"
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="general">General Information</TabsTrigger>
            <TabsTrigger value="images">Images</TabsTrigger>
            <TabsTrigger value="inventory">Inventory & Pricing</TabsTrigger>
          </TabsList>

          <TabsContent value="general">
            <Card>
              <CardHeader>
                <CardTitle>Product Information</CardTitle>
                <CardDescription>
                  Enter the basic information about the product.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Product Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter product name"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select name="category" defaultValue="">
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category.id} value={category.id}>
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="brand">Brand</Label>
                    <Input
                      id="brand"
                      name="brand"
                      placeholder="Enter brand name"
                    />
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
                  <Textarea
                    id="features"
                    name="features"
                    placeholder="Enter key features (one per line)"
                    rows={4}
                  />
                  <p className="text-sm text-slate-500">
                    Enter each feature on a new line. These will be displayed as
                    bullet points.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => formRef.current?.reset()}
                >
                  Reset
                </Button>
                <Button type="button" onClick={() => setActiveTab("images")}>
                  Continue to Images
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="images">
            <Card>
              <CardHeader>
                <CardTitle>Product Images</CardTitle>
                <CardDescription>
                  Upload images for the product. The first image will be used as
                  the main image.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  {/* Uploaded images */}
                  {images.map((image, index) => (
                    <div
                      key={`uploaded-${index}`}
                      className="relative rounded-md overflow-hidden border h-40"
                    >
                      <img
                        src={image}
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

                  {/* Preview images (while uploading) */}
                  {previewImages.map((previewUrl, index) => (
                    <div
                      key={`preview-${index}`}
                      className="relative rounded-md overflow-hidden border h-40 opacity-70"
                    >
                      <img
                        src={previewUrl}
                        alt={`Preview image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                        <Loader2 className="h-8 w-8 text-white animate-spin" />
                      </div>
                    </div>
                  ))}

                  {/* Upload button */}
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
                          <p className="text-sm text-slate-500">
                            Uploading to Cloudinary...
                          </p>
                        </>
                      ) : (
                        <>
                          <Upload className="h-8 w-8 text-slate-400 mb-2" />
                          <p className="text-sm text-slate-500 text-center">
                            Click to upload or drag and drop
                          </p>
                          <p className="text-xs text-slate-400 mt-1">
                            PNG, JPG or WEBP (max. 5MB)
                          </p>
                        </>
                      )}
                    </label>
                  </div>
                </div>

                <div className="text-sm text-slate-500">
                  <p>
                    Images will be automatically optimized and resized by
                    Cloudinary.
                  </p>
                  <p>For best results, use images with a 1:1 aspect ratio.</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button type="button" onClick={() => setActiveTab("general")}>
                  Back to General
                </Button>
                <Button type="button" onClick={() => setActiveTab("inventory")}>
                  Continue to Inventory
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="inventory">
            <Card>
              <CardHeader>
                <CardTitle>Inventory & Pricing</CardTitle>
                <CardDescription>
                  Manage inventory levels and pricing information.
                </CardDescription>
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
                    />
                    <p className="text-xs text-slate-500">
                      If set, the original price will be shown as a
                      strikethrough.
                    </p>
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
                    />
                    <p className="text-xs text-slate-500">
                      Used to calculate profit margins (not shown to customers).
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="sku">SKU (Stock Keeping Unit)</Label>
                    <Input
                      id="sku"
                      name="sku"
                      placeholder="Enter SKU"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="barcode">
                      Barcode (ISBN, UPC, GTIN, etc.)
                    </Label>
                    <Input
                      id="barcode"
                      name="barcode"
                      placeholder="Enter barcode"
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
                      required
                    />
                    <p className="text-xs text-slate-500">
                      You'll be notified when stock reaches this level.
                    </p>
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
              <CardFooter className="flex justify-between">
                <Button type="button" onClick={() => setActiveTab("images")}>
                  Back to Images
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
  );
}
