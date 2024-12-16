import { Doctor } from '@/types/doctors'

export function validateDoctor(doctor: Doctor): boolean {
  const requiredFields: (keyof Doctor)[] = [
    'slug',
    'name',
    'title',
    'image',
    'about',
    'expertise',
    'qualifications'
  ]

  return requiredFields.every(field => {
    const value = doctor[field]
    if (Array.isArray(value)) {
      return value.length > 0
    }
    return !!value
  })
}

export function validateDoctorSlug(slug: string): boolean {
  return /^[a-z0-9-]+$/.test(slug)
}