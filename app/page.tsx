export default function Home() {
	return (
		<section>
			<div className='flex mb-8 items-baseline gap-x-1.5'>
				<p className='text-neutral-600 dark:text-neutral-400'>Hi, I&apos;m</p>
				<h1 className='text-2xl font-semibold tracking-tighter'>Vilas</h1>
			</div>

			<p>
				I&apos;m a Software Engineer working on agentic AI systems and full-stack
				platforms — currently at{' '}
				<a
					target='_blank'
					rel='noopener noreferrer'
					href='http://www.aganitha.ai'
					className='underline text-neutral-600 dark:text-neutral-400'
				>
					Aganitha Cognitive Solutions
				</a>{' '}
				in bioinformatics.
			</p>

			<p className='mt-4'>
				Humanities Degree, self-taught into software — think Dora the Explorer
				with a bit of Zoro from One Piece energy. Not lost, just exploring.
			</p>
		</section>
	);
}
