interface DoctorSpecialtiesProps {
  specialties: string[]
}

export function DoctorSpecialties({ specialties }: DoctorSpecialtiesProps) {
  if (!specialties.length) return null

  return (
    <div className="mb-6">
      <div className="flex flex-wrap gap-2">
        {specialties.map((specialty, index) => (
          <span
            key={index}
            className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
          >
            {specialty}
          </span>
        ))}
      </div>
    </div>
  )
}