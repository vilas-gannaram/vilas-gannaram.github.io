<script>
	import { projects } from '$lib/projects';
</script>

<section id="experience" class="mt-12 min-h-svh scroll-mt-16">
	<h3 class="border-b pb-0.5">Experience</h3>

	<div class="mt-4 space-y-1 md:mt-6">
		<h4>Web Developer | Aganitha Cognitive Solutions</h4>
		<p class="text-sm italic">Hyderabad, India | 2023 – Present</p>

		{#each projects.slice(0, 5) as project (project.title)}
			<div class="mt-4 space-y-2 md:mt-6">
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				<h5>{@html project.title}</h5>
				<div class=" space-y-2">
					<p>{project.description}</p>
					<ul class="ml-5 list-disc pl-5">
						{#each project.keyPoints as item (item)}
							<!-- eslint-disable-next-line svelte/no-at-html-tags -->
							<li class="mt-1">{@html item}</li>
						{/each}
					</ul>
					<ul class="flex flex-wrap gap-2 pl-0">
						{#each project.tools as item (item)}
							<code class="rounded-2xl border px-2 py-1 text-xs">{item}</code>
						{/each}
					</ul>
				</div>
			</div>
		{/each}
	</div>
</section>
