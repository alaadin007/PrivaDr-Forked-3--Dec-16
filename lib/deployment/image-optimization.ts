import sharp from 'sharp'
import { deploymentConfig } from '../config/deployment'

interface ImageOptimizationResult {
  success: boolean
  formats: string[]
  error?: string
}

export async function optimizeImage(
  inputPath: string,
  outputPath: string
): Promise<ImageOptimizationResult> {
  const { quality, formats, sizes } = deploymentConfig.contentRefresh.imageOptimization
  
  try {
    const optimizedFormats: string[] = []
    
    for (const format of formats) {
      for (const size of sizes) {
        const outputFilename = `${outputPath}-${size}.${format}`
        
        await sharp(inputPath)
          .resize(size, null, {
            withoutEnlargement: true,
            fit: 'inside'
          })
          [format]({ quality })
          .toFile(outputFilename)
        
        optimizedFormats.push(format)
      }
    }

    return {
      success: true,
      formats: optimizedFormats
    }
  } catch (error) {
    return {
      success: false,
      formats: [],
      error: error instanceof Error ? error.message : 'Image optimization failed'
    }
  }
}