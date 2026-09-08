import type { Metadata } from 'next';
import { BlogListView } from '../../views/BlogListView';

export const metadata: Metadata = {
  title: 'Insights & Perspectives | BrilliusLaw Blog',
  description:
    'Practical perspectives on legal research, technology, drafting, and the evolving practice of law in India.',
};

export default function Page() {
  return <BlogListView />;
}
