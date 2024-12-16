"use client"

import { DoctorCard } from "./card/doctor-card"
import { getAllDoctors } from "@/lib/data/doctors"

export function DoctorsList() {
  const doctors = getAllDoctors() // This will return doctors in the specified order

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {doctors.map((doctor, index) => (
            <DoctorCard
              key={doctor.slug}
              {...doctor}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  )
}