import { BlogPost } from '@/lib/blog/types';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'understanding-adhd-in-children',
    title: 'Understanding ADHD in Children: Signs, Symptoms, and Support',
    excerpt: 'Learn about the common signs of ADHD in children and how early intervention can make a significant difference in their development.',
    content: `[Content here]`,
    author: 'dr-m-anwar-haq',
    category: 'Child Development',
    date: '2024-01-25',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80',
    seo: {
      title: 'Understanding ADHD in Children - Expert Guide | PRIVA Dr.',
      description: "Learn about ADHD signs, symptoms, and support strategies for children. Expert guidance from PRIVA Dr's pediatric team.",
      keywords: ['ADHD', 'child development', 'pediatric care']
    }
  },
  {
    id: '2',
    slug: 'benefits-of-iv-vitamin-therapy',
    title: 'The Benefits of IV Vitamin Therapy',
    excerpt: 'Discover how IV vitamin therapy can boost your immune system, increase energy levels, and improve overall wellness.',
    content: `[Content here]`,
    author: 'dr-hena-haq',
    category: 'IV Therapy',
    date: '2024-01-24',
    image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80',
    seo: {
      title: 'Benefits of IV Vitamin Therapy | PRIVA Dr.',
      description: 'Learn about the advantages of IV vitamin therapy for immunity, energy, and wellness.',
      keywords: ['IV therapy', 'vitamin infusion', 'wellness']
    }
  }
];

export function getAllPosts(): BlogPost[] {
  return blogPosts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category);
}