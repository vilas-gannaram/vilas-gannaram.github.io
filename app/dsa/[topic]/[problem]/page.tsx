import { notFound } from 'next/navigation';
import PostView from '@/app/components/post-view';
import { getPost, getPostSlugs } from '@/app/lib/posts';

export async function generateStaticParams() {
	const slugs = await getPostSlugs('dsa');
	return slugs.map(([topic, problem]) => ({ topic, problem }));
}

export async function generateMetadata({ params }: IDsaPostPageProps) {
	const { topic, problem } = await params;
	const post = await getPost('dsa', [topic, problem]);
	if (!post) return {};

	return {
		title: post.metadata.title,
		description: post.metadata.summary,
	};
}

export default async function DsaPostPage({ params }: IDsaPostPageProps) {
	const { topic, problem } = await params;
	const post = await getPost('dsa', [topic, problem]);
	if (!post) notFound();

	return (
		<PostView
			Content={post.default}
			metadata={post.metadata}
			readingTime={post.readingTime}
		/>
	);
}

interface IDsaPostPageProps {
	params: Promise<{ topic: string; problem: string }>;
}
