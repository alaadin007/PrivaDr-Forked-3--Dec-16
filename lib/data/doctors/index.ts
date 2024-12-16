import { Doctor } from '@/types/doctors'
import { drAnwarHaq } from './doctors/dr-anwar-haq'
import { drAhmedHaq } from './doctors/dr-ahmed-haq'
import { drHenaHaq } from './doctors/dr-hena-haq'
import { drHassanMirza } from './doctors/dr-hassan-mirza'
import { validateDoctor } from './utils/validation'
import { DOCTOR_ORDER, sortDoctors } from './utils/sorting'

const doctors: Record<string, Doctor> = {
  [drAnwarHaq.slug]: drAnwarHaq,
  [drAhmedHaq.slug]: drAhmedHaq,
  [drHenaHaq.slug]: drHenaHaq,
  [drHassanMirza.slug]: drHassanMirza
}

// Validate all doctors on initialization
Object.values(doctors).forEach(doctor => {
  if (!validateDoctor(doctor)) {
    console.error(`Invalid doctor data for ${doctor.name}`)
  }
})

export function getDoctorBySlug(slug: string): Doctor | undefined {
  return doctors[slug]
}

export function getAllDoctors(): Doctor[] {
  return sortDoctors(Object.values(doctors))
}

export function getFeaturedDoctors(count: number = 4): Doctor[] {
  return getAllDoctors().slice(0, count)
}