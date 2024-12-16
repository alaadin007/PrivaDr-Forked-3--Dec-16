import { Doctor } from '@/types/doctors'
import { DOCTOR_IMAGES } from '@/lib/config/images'

export const drAnwarHaq: Doctor = {
  slug: "dr-m-anwar-haq",
  name: "Dr. M. Anwar Haq",
  title: "Consultant Pediatrician",
  image: DOCTOR_IMAGES.DR_ANWAR_HAQ,
  about: [
    "Every child is unique, with their own strengths and challenges. In understanding conditions like autism and ADHD, it's not just about diagnosing a disorder; it's about recognizing each child's potential and supporting their journey to thrive. With the right guidance and compassion, we can help them unlock doors to a brighter future.",
    "Dr. Anwar Haq is a distinguished pediatrician with over 40 years of clinical experience, specializing in developmental and neurodevelopmental disorders such as autism spectrum disorder (ASD), ADHD, and learning disabilities. He is a Fellow of the Royal College of Physicians in Ireland and the Royal College of Paediatrics and Child Health (UK), reflecting his dedication to advancing child healthcare."
  ],
  expertise: [
    "Autism Spectrum Disorder (ASD)",
    "ADHD",
    "Developmental Delays",
    "Learning Disabilities",
    "Speech and Language Disorders",
    "Multidisciplinary Development Assessments"
  ],
  qualifications: [
    "F.R.C.P.C.H. Fellow of the Royal College of Paediatrics and Child Health (UK), 1997",
    "F.R.C.P. Fellow of the Royal College of Physicians in Ireland, 1996",
    "M.R.C.P.I. (Paediatrics) Member of the Royal College of Physicians in Ireland, 1986",
    "D.C.H. Diploma in Child Health, University College Dublin, 1980",
    "M.B.B.S. Bachelor of Medicine and Bachelor of Surgery, Nishtar Medical College, 1973"
  ],
  memberships: [
    "Member, Royal College of Physicians of Ireland (MRCPI)",
    "Fellow, Royal College of Paediatrics and Child Health (FRCPCH), UK",
    "Fellow, Royal College of Physicians of Ireland (FRCP)",
    "Member, British Association of Community Child Health (BACCH)"
  ],
  registrations: [
    "GMC UK Full Registration (Specialist in Paediatrics), GMC No. 5109985",
    "Specialist Register in Paediatrics, Ireland, Reg. No. 10269"
  ]
}