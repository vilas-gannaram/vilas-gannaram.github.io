<script>
	const projects = [
		{
			title: 'Corporate Website',
			desc: 'Solo-developed using 11ty, Nunjucks, Tailwind, later migrated to WordPress with Docker deployment.',
			link: '#'
		},
		{
			title: 'Genomic Data Explorer',
			desc: 'Interactive frontend for large datasets using D3.js and Plotly.',
			link: '#'
		}
	];
</script>

<section id="projects" class="mx-auto max-w-[1140px] px-6 my-16">
	<h2>Projects</h2>
	<div class="mt-4 grid gap-8 md:mt-6 md:grid-cols-2">
		{#each projects as project (project)}
			<div class="rounded-xl">
				<h3 class="mb-2 text-xl font-medium">{project.title}</h3>
				<p class="mb-4">{project.desc}</p>
				<a href={project.link} class="underline">View Project →</a>
			</div>
		{/each}
	</div>
</section>
