export interface BlogPost {
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  image: string
  content: string
  seo: {
    title: string
    description: string
    keywords: string[]
  }
}

export const blogPosts: Record<string, BlogPost> = {
  "understanding-adhd-in-children": {
    title: "Understanding ADHD in Children: Signs, Symptoms, and Support",
    excerpt: "Learn about the common signs of ADHD in children and how early intervention can make a significant difference in their development.",
    date: "2024-01-25",
    author: "Dr. M. Anwar Haq",
    category: "ADHD Assessment",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80",
    content: `
      <article class="prose dark:prose-invert max-w-none">
        <p class="lead">
          Understanding ADHD in children is crucial for providing the right support and guidance during their developmental years. Early recognition and intervention can make a significant difference in a child's academic, social, and emotional growth.
        </p>

        <h2>What is ADHD?</h2>
        <p>
          Attention Deficit Hyperactivity Disorder (ADHD) is a neurodevelopmental condition that affects children's behavior, attention, and impulse control. While it presents challenges, it's important to understand that ADHD is not a limitation on a child's potential for success.
        </p>

        <h2>Common Signs and Symptoms</h2>
        <ul>
          <li><strong>Inattention:</strong> Difficulty focusing on tasks, easily distracted</li>
          <li><strong>Hyperactivity:</strong> Excessive movement, difficulty staying seated</li>
          <li><strong>Impulsivity:</strong> Acting without thinking, interrupting others</li>
        </ul>

        <div class="bg-primary/10 p-6 rounded-lg my-8">
          <h3 class="text-xl font-semibold mb-4">Professional Assessment at PRIVA Dr.</h3>
          <p>
            Our experienced team provides comprehensive ADHD assessments and personalized support plans. We understand that each child is unique and requires an individualized approach.
          </p>
          <p class="mt-4">
            <a href="/services/adhd-assessment" class="text-primary hover:text-primary/80 font-medium">
              Learn more about our ADHD Assessment Services →
            </a>
          </p>
        </div>

        <h2>Supporting Your Child</h2>
        <p>
          Supporting a child with ADHD involves a multi-faceted approach:
        </p>
        <ul>
          <li>Creating structured routines and clear expectations</li>
          <li>Providing positive reinforcement and encouragement</li>
          <li>Working closely with healthcare providers and educators</li>
          <li>Maintaining open communication about challenges and progress</li>
        </ul>

        <h2>Early Intervention Matters</h2>
        <p>
          Early identification and intervention can significantly improve outcomes for children with ADHD. Professional assessment helps in:
        </p>
        <ul>
          <li>Understanding your child's specific needs</li>
          <li>Developing effective management strategies</li>
          <li>Accessing appropriate support services</li>
          <li>Building a strong foundation for future success</li>
        </ul>

        <div class="mt-8">
          <p class="font-medium">
            If you notice signs of ADHD in your child, don't hesitate to seek professional guidance. Contact our team to schedule an assessment and take the first step toward supporting your child's development.
          </p>
        </div>
      </article>
    `,
    seo: {
      title: "Understanding ADHD in Children | PRIVA Dr.",
      description: "Learn about ADHD signs, symptoms, and support strategies for children. Expert guidance from PRIVA Dr.'s experienced pediatric team.",
      keywords: ["ADHD in children", "ADHD symptoms", "ADHD support", "child development", "pediatric ADHD"]
    }
  }
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts[slug]
}

export function getRelatedPosts(category: string) {
  return Object.entries(blogPosts)
    .filter(([_, post]) => post.category === category)
    .map(([slug, post]) => ({
      title: post.title,
      excerpt: post.excerpt,
      date: post.date,
      slug,
      image: post.image,
      category: post.category
    }))
    .slice(0, 3)
}