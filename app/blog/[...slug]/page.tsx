import { notFound } from 'next/navigation';
import { formatDate, getPostSlugs, type PostMetadata } from '../../lib/posts';

export function generateStaticParams() {
	return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string[] }>;
}) {
	const { slug } = await params;
	const post = await loadPost(slug);
	if (!post) return {};

	return {
		title: post.metadata.title,
		description: post.metadata.summary,
	};
}

async function loadPost(slug: string[]) {
	try {
		const mod = (await import(`../posts/${slug.join('/')}/index.mdx`)) as {
			default: React.ComponentType;
			metadata: PostMetadata;
		};
		return mod;
	} catch {
		return null;
	}
}

export default async function BlogPostPage({
	params,
}: {
	params: Promise<{ slug: string[] }>;
}) {
	const { slug } = await params;
	const post = await loadPost(slug);
	if (!post) notFound();

	const { default: Content, metadata } = post;

	return (
		<section>
			<h1>{metadata.title}</h1>
			<p className='text-neutral-600 dark:text-neutral-400 text-sm font-mono mb-6'>
				{formatDate(metadata.publishedAt)}
			</p>
			<Content />
		</section>
	);
}
