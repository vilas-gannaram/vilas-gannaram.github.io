import { notFound } from 'next/navigation';
import PostView from '@/app/components/post-view';
import { getPost, getPostSlugs } from '@/app/lib/posts';

export async function generateStaticParams() {
	const slugs = await getPostSlugs('blog');
	return slugs.map(([slug]) => ({ slug }));
}

export async function generateMetadata({ params }: IBlogPostPageProps) {
	const { slug } = await params;
	const post = await getPost('blog', [slug]);
	if (!post) return {};

	return {
		title: post.metadata.title,
		description: post.metadata.summary,
	};
}

export default async function BlogPostPage({ params }: IBlogPostPageProps) {
	const { slug } = await params;
	const post = await getPost('blog', [slug]);
	if (!post) notFound();

	return (
		<PostView
			Content={post.default}
			metadata={post.metadata}
			readingTime={post.readingTime}
		/>
	);
}

interface IBlogPostPageProps {
	params: Promise<{ slug: string }>;
}
