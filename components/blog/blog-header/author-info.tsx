interface AuthorInfoProps {
  author: string
  category: string
}

export function AuthorInfo({ author, category }: AuthorInfoProps) {
  return (
    <div>
      <p className="font-medium">{author}</p>
      <p className="text-sm text-muted-foreground">
        {category === "ADHD Assessment" ? "Consultant Pediatrician" : "General Practitioner"}
      </p>
    </div>
  )
}