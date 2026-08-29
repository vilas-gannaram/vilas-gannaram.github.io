import { notFound } from 'next/navigation';
import { formatDate, getPost, getPostSlugs } from '../../lib/posts';

export async function generateStaticParams() {
	const slugs = await getPostSlugs();
	return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: IBlogPostPageProps) {
	const { slug } = await params;
	const post = await getPost(slug);
	if (!post) return {};

	return {
		title: post.metadata.title,
		description: post.metadata.summary,
	};
}

export default async function BlogPostPage({ params }: IBlogPostPageProps) {
	const { slug } = await params;
	const post = await getPost(slug);
	if (!post) notFound();

	const { default: Content, metadata, readingTime } = post;

	return (
		<section>
			<h1>{metadata.title}</h1>
			<p
				className={`text-neutral-600 dark:text-neutral-400 text-sm font-mono ${
					metadata.tags && metadata.tags.length > 0 ? 'mb-2' : 'mb-6'
				}`}
			>
				{formatDate(metadata.publishedAt)}
				{metadata.updatedAt && ` · Updated ${formatDate(metadata.updatedAt)}`}
				{` · ${readingTime} min read`}
			</p>
			{metadata.tags && metadata.tags.length > 0 && (
				<div className='flex gap-2 mb-6 md:mb-8'>
					{metadata.tags.map((tag) => (
						<span
							key={tag}
							className='text-xs font-mono text-neutral-500 dark:text-neutral-400 border border-neutral-300 dark:border-neutral-700 rounded-full px-2 py-0.5'
						>
							{tag}
						</span>
					))}
				</div>
			)}
			<Content />
		</section>
	);
}

interface IBlogPostPageProps {
	params: Promise<{ slug: string[] }>;
}
