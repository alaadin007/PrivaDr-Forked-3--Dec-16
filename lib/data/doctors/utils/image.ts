import { ImageConfig } from "@/types/images"

export function validateDoctorImage(image: ImageConfig | null | undefined): image is ImageConfig {
  if (!image) {
    console.error('Image configuration is missing')
    return false
  }

  const { src, alt, width, height } = image
  
  const isValid = Boolean(
    typeof src === 'string' &&
    src.length > 0 &&
    typeof alt === 'string' &&
    alt.length > 0 &&
    typeof width === 'number' &&
    width > 0 &&
    typeof height === 'number' &&
    height > 0
  )

  if (!isValid) {
    console.error('Invalid image configuration:', { src, alt, width, height })
  }

  return isValid
}

export function getImageDimensions(aspectRatio: number = 3/4): { width: number; height: number } {
  const baseWidth = 800
  return {
    width: baseWidth,
    height: Math.round(baseWidth * aspectRatio)
  }
}