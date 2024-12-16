import { Doctor } from '@/types/doctors'
import { DOCTOR_IMAGES } from '@/lib/config/images'

export const drHenaHaq: Doctor = {
  slug: "dr-hena-haq",
  name: "Dr. Hena Haq",
  title: "General Practitioner",
  image: DOCTOR_IMAGES.DR_HENA_HAQ,
  // Rest of the doctor data remains unchanged
  about: [
    "Dr. Hena Haq is a dedicated General Practitioner with a holistic approach to healthcare. She believes in treating not just symptoms but understanding the whole person, including their lifestyle, environment, and personal circumstances.",
    "With special interests in women's health, preventive medicine, and lifestyle interventions, Dr. Haq helps patients achieve optimal health through comprehensive care plans."
  ],
  expertise: [
    "Women's Health",
    "Preventive Medicine",
    "Lifestyle Medicine",
    "Mental Health",
    "Chronic Disease Management",
    "Family Medicine"
  ],
  qualifications: [
    "MRCGP Member of the Royal College of General Practitioners",
    "DRCOG Diploma of the Royal College of Obstetricians and Gynaecologists",
    "DFSRH Diploma of the Faculty of Sexual and Reproductive Healthcare",
    "M.B.B.S. Bachelor of Medicine and Surgery"
  ],
  memberships: [
    "Royal College of General Practitioners",
    "British Medical Association",
    "Faculty of Sexual and Reproductive Healthcare"
  ],
  registrations: [
    "GMC Registration with License to Practice",
    "NHS England Performers List"
  ]
}