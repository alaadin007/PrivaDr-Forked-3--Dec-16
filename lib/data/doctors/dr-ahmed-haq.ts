import { Doctor } from '@/types/doctors'
import { DOCTOR_IMAGES } from '@/lib/config/images'

export const drAhmedHaq: Doctor = {
  slug: "dr-ahmed-haq",
  name: "Dr. Ahmed Haq",
  title: "Aesthetic Medicine Specialist",
  image: DOCTOR_IMAGES.DR_AHMED_HAQ,
  // Rest of the doctor data remains unchanged
  about: [
    "Dr. Ahmed Haq is an extensively experienced practitioner and a distinguished figure in the field of aesthetic medicine. A graduate of the Royal College of Surgeons Medical School, he is a member of the British Association of Cosmetic Doctors.",
    "Specializing in complex facial contouring and non-surgical jaw reduction, Dr. Haq has received widespread recognition for his highly regarded work in creating subtle enhancements that provide youthful yet natural outcomes."
  ],
  expertise: [
    "Facial Contouring",
    "Non-Surgical Aesthetics", 
    "Dermal Fillers",
    "Anti-Wrinkle Treatments",
    "Skin Rejuvenation",
    "Advanced Injection Techniques"
  ],
  qualifications: [
    "MB,BCh,BAO,LRCSP&I Royal College of Surgeons Medical School",
    "MSc Surgical Technology - Imperial London",
    "Advanced Certification in Aesthetic Medicine",
    "Specialist Training in Non-Surgical Procedures"
  ],
  memberships: [
    "British Association of Cosmetic Doctors",
    "Royal College of Surgeons",
    "British Medical Association"
  ],
  registrations: [
    "GMC Registration with License to Practice"
  ]
}