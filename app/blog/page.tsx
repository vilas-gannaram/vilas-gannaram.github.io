import Link from 'next/link';

import { formatDate, getBlogPosts } from './get-posts';

export const metadata = {
	title: 'Blog',
	description: 'Field notes.',
};

export default async function BlogPage() {
	const posts = await getBlogPosts();

	return (
		<section>
			<h1>Blog</h1>
			{posts.map((post) => (
				<Link
					key={post.slug}
					href={`/blog/${post.slug}`}
					className='flex flex-col space-y-1 mb-4'
				>
					<div className='flex flex-col md:flex-row md:items-baseline md:gap-4'>
						<p className='text-neutral-600 dark:text-neutral-400 text-sm font-mono'>
							{formatDate(post.metadata.publishedAt)}
						</p>
						<p className='text-neutral-900 dark:text-neutral-100 tracking-tight'>
							{post.metadata.title}
						</p>
					</div>
				</Link>
			))}
		</section>
	);
}
