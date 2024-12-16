import { ImageConfig } from "./images"

export interface Doctor {
  slug: string
  name: string
  title: string
  image: ImageConfig
  about: string[]
  expertise: string[]
  qualifications: string[]
  memberships?: string[]
  registrations?: string[]
}