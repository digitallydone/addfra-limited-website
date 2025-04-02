import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getProductById } from "@/app/actions/product"
import ProductForm from "../product-form"

export default async function EditProductPage({ params }: { params: { id: string } }) {
  const product = await getProductById(params.id).catch(() => null)

  if (!product) {
    notFound()
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
        <h1 className="text-2xl font-bold">Edit Product</h1>
      </div>

      <ProductForm product={product} />
    </div>
  )
}

