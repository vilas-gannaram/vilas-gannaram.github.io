import Link from 'next/link';
import { formatDate, getBlogPosts } from '../lib/posts';

export const metadata = {
	title: 'Blog',
	description: 'Field notes.',
};

export default async function BlogPage() {
	const posts = await getBlogPosts();

	return (
		<section>
			<h1 className='mt-0'>Blog</h1>

			<div className='not-typeset my-6 md:my-8'>
				{posts.map((post) => (
					<Link
						key={post.slug.join('/')}
						href={`/blog/${post.slug.join('/')}`}
						className='flex flex-col space-y-1 mb-4'
					>
						<div className='flex flex-col md:flex-row md:items-baseline md:gap-4'>
							<p className='text-muted-foreground text-sm font-mono'>
								{formatDate(post.metadata.publishedAt)} · {post.readingTime} min
								read
							</p>
							<p className='text-foreground tracking-tight'>
								{post.metadata.title}
							</p>
						</div>
					</Link>
				))}
			</div>
		</section>
	);
}
