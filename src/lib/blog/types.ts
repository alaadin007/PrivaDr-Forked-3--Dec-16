export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: {
    id: string;
    name: string;
    title: string;
    avatar: string;
  };
  category: string;
  tags: string[];
  publishDate: string;
  lastModified: string;
  status: 'draft' | 'review' | 'published';
  seo: {
    title: string;
    description: string;
    keywords: string[];
    canonicalUrl?: string;
  };
  metadata: {
    readTime: number;
    wordCount: number;
    reviewedBy?: string;
    reviewDate?: string;
  };
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  parentId?: string;
}

export interface BlogAuthor {
  id: string;
  name: string;
  title: string;
  bio: string;
  avatar: string;
  specialties: string[];
  credentials: string[];
}