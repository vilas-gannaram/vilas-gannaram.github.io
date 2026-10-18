import Link from 'next/link';
import { getDsaTopics, getPostHref } from '../lib/posts';

export const metadata = {
	title: 'DSA',
	description: 'Data structures & algorithms notes, grouped by topic.',
};

export default async function DsaPage() {
	const topics = await getDsaTopics();

	return (
		<section>
			<h1 className='mt-0'>DSA</h1>

			<div className='not-typeset my-6 md:my-8'>
				{topics.map(({ topic, title, posts }) => (
					<div key={topic} className='mb-8'>
						<h2 className='text-foreground font-semibold tracking-tight mb-3'>
							{title}
						</h2>
						{posts.map((post) => (
							<Link
								key={post.slug.join('/')}
								href={getPostHref('dsa', post.slug)}
								className='flex flex-col space-y-1 mb-2'
							>
								<div className='flex flex-col md:flex-row md:items-baseline md:gap-4'>
									<p className='text-muted-foreground text-sm font-mono md:w-16 shrink-0'>
										{post.metadata.difficulty}
									</p>
									<p className='text-foreground tracking-tight'>
										{post.metadata.title}
									</p>
								</div>
							</Link>
						))}
					</div>
				))}
			</div>
		</section>
	);
}
