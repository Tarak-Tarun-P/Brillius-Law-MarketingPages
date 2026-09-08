import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BLOG_POSTS } from '../../../data/blogData';
import { ArticleDetailView } from '../../../views/ArticleDetailView';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) {
    return { title: 'Article Not Found | BrilliusLaw' };
  }
  return {
    title: `${post.title} | BrilliusLaw Insights`,
    description: post.shortDescription,
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) {
    notFound();
  }
  return <ArticleDetailView post={post} />;
}
