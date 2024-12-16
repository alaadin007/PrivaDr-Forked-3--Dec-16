import { Metadata } from 'next'
import { BlogList } from "@/components/blog/blog-list"

export const metadata: Metadata = {
  title: "Medical Blog & Healthcare Insights | PRIVA Dr.",
  description: "Stay informed with the latest medical insights, health tips, and expert advice from PRIVA Dr. healthcare professionals.",
  keywords: ['medical blog', 'healthcare insights', 'health tips', 'medical advice', 'wellness blog']
}

export default function BlogPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Medical Insights & Updates
            </h1>
            <p className="text-xl text-muted-foreground">
              Expert healthcare knowledge and advice from our medical professionals
            </p>
          </div>
        </div>
      </section>
      <BlogList />
    </main>
  )
}