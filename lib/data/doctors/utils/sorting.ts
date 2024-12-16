import { Doctor } from '@/types/doctors'

export const DOCTOR_ORDER = [
  'dr-m-anwar-haq',    // 1. Dr. M. Anwar Haq
  'dr-ahmed-haq',      // 2. Dr. Ahmed Haq
  'dr-hena-haq',       // 3. Dr. Hena Haq
  'dr-hassan-a-mirza'  // 4. Dr. Hassan A. Mirza
] as const

export function sortDoctors(doctors: Doctor[]): Doctor[] {
  return doctors.sort((a, b) => {
    const indexA = DOCTOR_ORDER.indexOf(a.slug as typeof DOCTOR_ORDER[number])
    const indexB = DOCTOR_ORDER.indexOf(b.slug as typeof DOCTOR_ORDER[number])
    return indexA - indexB
  })
}