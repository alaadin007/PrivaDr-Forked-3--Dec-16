import { Doctor } from '@/types/doctors'
import { DOCTOR_IMAGES } from '@/lib/config/images'

export const drHassanMirza: Doctor = {
  slug: "dr-hassan-a-mirza",
  name: "Dr. Hassan A. Mirza",
  title: "Consultant Dermatologist",
  image: DOCTOR_IMAGES.DR_HASSAN_MIRZA,
  // Rest of the doctor data remains unchanged
  about: [
    "Dr. Hassan A. Mirza is a highly skilled Consultant Dermatologist with extensive experience in both medical and aesthetic dermatology. His approach combines evidence-based medicine with cutting-edge treatments to deliver optimal results for his patients.",
    "With a special interest in skin cancer, inflammatory skin conditions, and aesthetic procedures, Dr. Mirza provides comprehensive care that addresses both medical concerns and cosmetic goals."
  ],
  expertise: [
    "Medical Dermatology",
    "Skin Cancer Screening",
    "Acne Treatment",
    "Psoriasis Management",
    "Aesthetic Medicine",
    "Advanced Skin Procedures"
  ],
  qualifications: [
    "MRCP (UK) Member of the Royal College of Physicians",
    "Specialist Certificate in Dermatology (UK)",
    "Fellowship in Advanced Dermatology",
    "M.B.B.S. Bachelor of Medicine and Surgery"
  ],
  memberships: [
    "British Association of Dermatologists",
    "Royal Society of Medicine",
    "European Academy of Dermatology and Venereology"
  ],
  registrations: [
    "GMC Specialist Register in Dermatology",
    "British Cosmetic Dermatology Group"
  ]
}