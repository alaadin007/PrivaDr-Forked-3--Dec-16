import { Doctor } from '@/types/doctors'
import { DOCTOR_IMAGES } from '@/lib/config/images'

export const drAnwarHaq: Doctor = {
  slug: "dr-m-anwar-haq",
  name: "Dr. M. Anwar Haq",
  title: "Consultant Pediatrician",
  image: DOCTOR_IMAGES.DR_ANWAR_HAQ,
  about: [
    "Every child is unique, with their own strengths and challenges. In understanding conditions like autism and ADHD, it's not just about diagnosing a disorder; it's about recognizing each child's potential and supporting their journey to thrive.",
    "Dr. Anwar Haq is a distinguished pediatrician with over 40 years of clinical experience, specializing in developmental and neurodevelopmental disorders."
  ],
  expertise: [
    "ADHD Assessment",
    "Child Development",
    "Autism Spectrum Disorder",
    "Learning Disabilities",
    "Behavioral Assessment"
  ],
  qualifications: [
    "F.R.C.P.C.H. Fellow of the Royal College of Paediatrics and Child Health (UK)",
    "F.R.C.P. Fellow of the Royal College of Physicians in Ireland",
    "M.R.C.P.I. (Paediatrics) Member of the Royal College of Physicians in Ireland"
  ]
}