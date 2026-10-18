import Link from 'next/link';
import { experience, projects } from '@/app/lib/profile';
import { formatDate, getPostHref, getRecentPosts } from '@/app/lib/posts';

export default async function Home() {
	const recentPosts = await getRecentPosts(3);

	return (
		<section>
			<div className='flex mb-8 items-baseline gap-x-1.5'>
				<p className='mt-0 text-[1.25em] leading-[1.4] font-semibold'>
					Hi, I&apos;m
				</p>
				<h1 className='mt-0'>Vilas</h1>
			</div>

			<p>
				I&apos;m a Software Engineer working on agentic AI systems and
				full-stack platforms, mostly in bioinformatics. Humanities degree,
				self-taught into software.
			</p>

			<h2>Experience</h2>
			<div className='not-typeset my-6'>
				{experience.map((job) => (
					<div
						key={job.company}
						className='flex flex-col md:flex-row md:items-baseline md:gap-4'
					>
						<p className='text-muted-foreground text-sm font-mono'>
							{job.period}
						</p>
						<p className='text-foreground tracking-tight'>
							<a
								target='_blank'
								rel='noopener noreferrer'
								href={job.href}
								className='underline underline-offset-2'
							>
								{job.company}
							</a>
							<span className='text-muted-foreground'> · {job.role}</span>
						</p>
					</div>
				))}
			</div>

			<h2>Selected work</h2>
			<div className='not-typeset my-6'>
				{projects.map((project) => (
					<p key={project.name} className='mb-4 text-foreground tracking-tight'>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href={project.href}
							className='underline underline-offset-2'
						>
							{project.name}
						</a>
						<span className='text-muted-foreground'>
							{' '}
							· {project.description}
						</span>
					</p>
				))}
			</div>

			<h2>Writing &amp; practice</h2>
			<div className='not-typeset my-6'>
				{recentPosts.map((post) => (
					<Link
						key={`${post.section}/${post.slug.join('/')}`}
						href={getPostHref(post.section, post.slug)}
						className='flex flex-col space-y-1 mb-4'
					>
						<div className='flex flex-col md:flex-row md:items-baseline md:gap-4'>
							<p className='text-muted-foreground text-sm font-mono'>
								{formatDate(post.metadata.publishedAt)}
							</p>
							<p className='text-foreground tracking-tight'>
								{post.metadata.title}
							</p>
						</div>
					</Link>
				))}
				<p className='mt-6 text-sm font-mono flex gap-x-3'>
					<Link
						href='/blog'
						className='text-muted-foreground underline underline-offset-2 transition-all hover:text-foreground'
					>
						all posts
					</Link>
					<Link
						href='/dsa'
						className='text-muted-foreground underline underline-offset-2 transition-all hover:text-foreground'
					>
						dsa notes
					</Link>
				</p>
			</div>
		</section>
	);
}
