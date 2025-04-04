// Cloudinary utility functions

export async function uploadToCloudinary(file) {
  try {
    const formData = new FormData()
    formData.append("file", file)
    formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || "addfra_uploads")
    formData.append("cloud_name", process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "")

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      },
    )

    if (!response.ok) {
      throw new Error("Failed to upload image to Cloudinary")
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error)
    throw error
  }
}

export function buildCloudinaryUrl(publicId, options = {}) {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME

  if (!cloudName) {
    console.error("Cloudinary cloud name is not defined")
    return ""
  }

  const { width, height, crop = "fill", quality = 80 } = options

  let transformations = ""

  if (width || height) {
    transformations += `c_${crop},q_${quality}`

    if (width) {
      transformations += `,w_${width}`
    }

    if (height) {
      transformations += `,h_${height}`
    }
  }

  const transformationPath = transformations ? `${transformations}/` : ""

  return `https://res.cloudinary.com/${cloudName}/image/upload/${transformationPath}${publicId}`
}

export function extractPublicIdFromUrl(url) {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME

  if (!cloudName || !url.includes(cloudName)) {
    return null
  }

  const regex = new RegExp(`https://res.cloudinary.com/${cloudName}/image/upload/(?:v\\d+/)?(?:[^/]+/)?(.+)`)
  const match = url.match(regex)

  return match ? match[1] : null
}

export async function deleteFromCloudinary(publicId) {
  try {
    // This would typically be a server-side operation
    // For client-side, you would need to call a server action or API route
    console.log("Would delete image with public ID:", publicId)
    return true
  } catch (error) {
    console.error("Error deleting from Cloudinary:", error)
    return false
  }
}

