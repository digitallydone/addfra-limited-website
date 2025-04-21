// "use client";

// import { useState, useRef } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import { ArrowLeft, Upload, X, Loader2 } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { createProduct } from "@/app/actions/product";
// import { toast } from "@/hooks/use-toast";

// export default function NewProductPage() {
//   const router = useRouter();
//   const [images, setImages] = useState([]);
//   const [uploading, setUploading] = useState(false);
//   const [submitting, setSubmitting] = useState(false);
//   const formRef = useRef(null);

//   // This would upload to Cloudinary in a real app
//   const handleImageUpload = async (e) => {
//     const files = e.target.files;
//     if (!files || files.length === 0) return;

//     setUploading(true);

//     try {
//       const uploadPromises = Array.from(files).map(async (file) => {
//         // Simulate a Cloudinary upload
//         const cloudinaryResponse = await uploadToCloudinary(file);

//         // Return both URL and public ID for tracking
//         return {
//           url: cloudinaryResponse.secure_url,
//           publicId: cloudinaryResponse.public_id,
//         };
//       });
//       const newImages = await Promise.all(uploadPromises);

//       // setImages([...images, ...newImages]);
//       setImages([...images, ...newImages.map((img) => img.secure_url)]);

//     } catch (error) {
//       console.error("Error uploading images:", error);
//       toast({
//         title: "Error",
//         description: "Failed to upload images. Please try again.",
//         variant: "destructive",
//       });
//     } finally {
//       setUploading(false);
//     }
//   };

//   const removeImage = (index) => {
//     const newImages = [...images];
//     newImages.splice(index, 1);
//     setImages(newImages);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitting(true);

//     try {
//       const formData = new FormData(e.currentTarget);

//       // Add images to form data
//       formData.append("imageUrls", JSON.stringify(images));

//       const result = await createProduct(formData);

//       if (result.success) {
//         toast({
//           title: "Success",
//           description: "Product created successfully",
//         });
//         router.push("/admin/products");
//       } else {
//         const errors = result.errors || {};

//         // Display form errors
//         if (errors._form) {
//           toast({
//             title: "Error",
//             description: errors._form[0],
//             variant: "destructive",
//           });
//         }

//         // You could handle field-specific errors here
//         console.error("Form errors:", errors);
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       toast({
//         title: "Error",
//         description: "An unexpected error occurred. Please try again.",
//         variant: "destructive",
//       });
//     } finally {
//       setSubmitting(false);
//     }
//   };

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
//                 <CardDescription>
//                   Enter the basic information about the product.
//                 </CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-6">
//                 <div className="space-y-2">
//                   <Label htmlFor="name">Product Name</Label>
//                   <Input
//                     id="name"
//                     name="name"
//                     placeholder="Enter product name"
//                     required
//                   />
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div className="space-y-2">
//                     <Label htmlFor="category">Category</Label>
//                     <Select name="category" defaultValue="">
//                       <SelectTrigger id="category">
//                         <SelectValue placeholder="Select category" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         <SelectItem value="parts">Parts</SelectItem>
//                         <SelectItem value="accessories">Accessories</SelectItem>
//                         <SelectItem value="electronics">Electronics</SelectItem>
//                         <SelectItem value="tools">Tools</SelectItem>
//                         <SelectItem value="materials">Materials</SelectItem>
//                       </SelectContent>
//                     </Select>
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="brand">Brand</Label>
//                     <Input
//                       id="brand"
//                       name="brand"
//                       placeholder="Enter brand name"
//                     />
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
//                   <Textarea
//                     id="features"
//                     name="features"
//                     placeholder="Enter key features (one per line)"
//                     rows={4}
//                   />
//                   <p className="text-sm text-slate-500">
//                     Enter each feature on a new line. These will be displayed as
//                     bullet points.
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
//                   Upload images for the product. The first image will be used as
//                   the main image.
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
//                   {images.map((image, index) => (
//                     <div
//                       key={index}
//                       className="relative rounded-md overflow-hidden border h-40"
//                     >
//                       <img
//                         src={image || "/placeholder.svg"}
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
//                           <p className="text-sm text-slate-500">Uploading...</p>
//                         </>
//                       ) : (
//                         <>
//                           <Upload className="h-8 w-8 text-slate-400 mb-2" />
//                           <p className="text-sm text-slate-500 text-center">
//                             Click to upload or drag and drop
//                           </p>
//                           <p className="text-xs text-slate-400 mt-1">
//                             PNG, JPG or WEBP (max. 5MB)
//                           </p>
//                         </>
//                       )}
//                     </label>
//                   </div>
//                 </div>

//                 <div className="text-sm text-slate-500">
//                   <p>Images will be automatically optimized and resized.</p>
//                   <p>For best results, use images with a 1:1 aspect ratio.</p>
//                 </div>
//               </CardContent>
//             </Card>
//           </TabsContent>

//           <TabsContent value="inventory">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Inventory & Pricing</CardTitle>
//                 <CardDescription>
//                   Manage inventory levels and pricing information.
//                 </CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-6">
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                   <div className="space-y-2">
//                     <Label htmlFor="price">Price ($)</Label>
//                     <Input
//                       id="price"
//                       name="price"
//                       type="number"
//                       min="0"
//                       step="0.01"
//                       placeholder="0.00"
//                       required
//                     />
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="comparePrice">Compare at Price ($)</Label>
//                     <Input
//                       id="comparePrice"
//                       name="comparePrice"
//                       type="number"
//                       min="0"
//                       step="0.01"
//                       placeholder="0.00"
//                     />
//                     <p className="text-xs text-slate-500">
//                       If set, the original price will be shown as a
//                       strikethrough.
//                     </p>
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="cost">Cost per item ($)</Label>
//                     <Input
//                       id="cost"
//                       name="cost"
//                       type="number"
//                       min="0"
//                       step="0.01"
//                       placeholder="0.00"
//                     />
//                     <p className="text-xs text-slate-500">
//                       Used to calculate profit margins (not shown to customers).
//                     </p>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                   <div className="space-y-2">
//                     <Label htmlFor="sku">SKU (Stock Keeping Unit)</Label>
//                     <Input
//                       id="sku"
//                       name="sku"
//                       placeholder="Enter SKU"
//                       required
//                     />
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="barcode">
//                       Barcode (ISBN, UPC, GTIN, etc.)
//                     </Label>
//                     <Input
//                       id="barcode"
//                       name="barcode"
//                       placeholder="Enter barcode"
//                     />
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="weight">Weight (kg)</Label>
//                     <Input
//                       id="weight"
//                       name="weight"
//                       type="number"
//                       min="0"
//                       step="0.01"
//                       placeholder="0.00"
//                     />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div className="space-y-2">
//                     <Label htmlFor="quantity">Quantity in stock</Label>
//                     <Input
//                       id="quantity"
//                       name="quantity"
//                       type="number"
//                       min="0"
//                       step="1"
//                       placeholder="0"
//                       required
//                     />
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="lowStock">Low stock threshold</Label>
//                     <Input
//                       id="lowStock"
//                       name="lowStock"
//                       type="number"
//                       min="0"
//                       step="1"
//                       placeholder="5"
//                       required
//                     />
//                     <p className="text-xs text-slate-500">
//                       You'll be notified when stock reaches this level.
//                     </p>
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
//                 <Button
//                   type="button"
//                   variant="outline"
//                   onClick={() => formRef.current?.reset()}
//                 >
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
//   );
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
import ProductForm from "../ProductForm";

export default function NewProductPage() {
  const router = useRouter();
  const [images, setImages] = useState([]);
  const [imagePublicIds, setImagePublicIds] = useState([]); // Track public IDs for deletion
  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState("general");
  const [previewImages, setPreviewImages] = useState([]);
  const formRef = useRef(null);

  // State to track form data
  const [productData, setProductData] = useState({
    name: "",
    category: "",
    brand: "",
    description: "",
    features: "",
    price: "",
    comparePrice: "",
    cost: "",
    sku: "",
    barcode: "",
    weight: "",
    quantity: "",
    lowStock: "5", // Default value
    status: "active", // Default value
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle select changes
  const handleSelectChange = (name, value) => {
    setProductData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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

  const resetForm = () => {
    setProductData({
      name: "",
      category: "",
      brand: "",
      description: "",
      features: "",
      price: "",
      comparePrice: "",
      cost: "",
      sku: "",
      barcode: "",
      weight: "",
      quantity: "",
      lowStock: "5",
      status: "active",
    });
    formRef.current?.reset();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Create a copy of the productData object
      const submissionData = { ...productData };

      // Add the images and image public IDs
      submissionData.imageUrls = images;
      submissionData.imagePublicIds = imagePublicIds;

      // Process features field
      if (submissionData.features) {
        submissionData.features = submissionData.features
          .split("\n")
          .filter((feature) => feature.trim() !== "");
      } else {
        submissionData.features = [];
      }

      // Parse numeric values
      if (submissionData.price)
        submissionData.price = parseFloat(submissionData.price);
      if (submissionData.comparePrice)
        submissionData.comparePrice = parseFloat(submissionData.comparePrice);
      if (submissionData.cost)
        submissionData.cost = parseFloat(submissionData.cost);
      if (submissionData.weight)
        submissionData.weight = parseFloat(submissionData.weight);
      if (submissionData.quantity)
        submissionData.quantity = parseInt(submissionData.quantity);
      if (submissionData.lowStock)
        submissionData.lowStock = parseInt(submissionData.lowStock);

      // Submit the product
      await createProduct(submissionData);

      toast({
        title: "Product created successfully",
        description: "Your product has been added.",
        variant: "default",
      });

      router.push("/admin/products"); // Uncomment if you want to redirect after submission
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
    <div>
   

      <ProductForm />
    </div>
  );
}
