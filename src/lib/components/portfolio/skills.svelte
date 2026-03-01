<script lang="ts">
	import { cn } from '$lib/utils';

	let skills = [
		{
			title: 'Svelte Ecosystem',
			items: ['SvelteKit', 'Runes'],
			description: 'My primary driver for high-performance UIs.',
			className: 'md:col-span-4 md:row-span-2'
		},
		{
			title: 'Frontend Architecture',
			items: ['React.js', 'Next.js', 'Context API', 'Redux Toolkit', 'Zustand', 'Tailwind CSS'],
			description: 'Building scalable, federated enterprise platforms.',
			className: 'md:col-span-8 md:row-span-4'
		},
		{
			title: 'Data Viz',
			items: ['D3.js', 'Plotly.js'],
			description: '50k+ point rendering.',
			className: 'md:col-span-4 md:row-span-2'
		},
		{
			title: 'Backend & Engine',
			items: [
				'Node.js',
				'Express.js',
				'REST APIs',
				'GraphQL',
				'Hasura',
				'Prisma ORM',
				'TypeORM',
				'PostgreSQL'
			],
			description: 'Robust APIs and real-time data streaming.',
			className: 'md:col-span-8 md:row-span-2'
		},
		{
			title: 'DevOps & Tools',
			items: ['Docker', 'Kubernetes', 'GitHub Actions'],
			description: 'Containerized deployments & CI/CD.',
			className: 'md:col-span-4 md:row-span-2'
		}
	];
</script>

<div class="mx-auto w-full">
	<div class="grid grid-cols-1 gap-4 md:grid-cols-12">
		{#each skills as skill, i (i)}
			<div
				class={cn(
					'group relative overflow-hidden rounded-xl border border-white/10 bg-zinc-900/50 p-6 transition-all hover:bg-zinc-900',
					skill.className
				)}
			>
				<div class="absolute -top-2 -right-2 opacity-5 transition-opacity group-hover:opacity-20">
					<span class="text-6xl font-bold italic select-none">{i + 1}</span>
				</div>

				<div class="relative z-10 flex h-full flex-col justify-between gap-y-4">
					<div class="spacey-1">
						<h3 class="text-lg font-semibold text-white">{skill.title}</h3>
						<p class="text-xs text-zinc-400">{skill.description}</p>
					</div>

					<div class="flex flex-wrap gap-2">
						{#each skill.items as tech (tech)}
							<span
								class="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs font-medium text-zinc-300"
							>
								{tech}
							</span>
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
