export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string; // This should be the doctor's slug
  category: string;
  date: string;
  image: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
}