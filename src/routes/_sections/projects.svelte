<script lang="ts">
	import { projects } from '$lib/projects';
</script>

<section id="work-at-aganitha" class="">
	<div class="mx-auto my-16 max-w-[1140px] px-6">
		<h2>Work At Aganitha</h2>

		{#each projects.slice(0, 5) as project (project.title)}
			<div class="mt-4 md:mt-6">
				<!--  eslint-disable-next-line svelte/no-at-html-tags -->
				<h3>{@html project.title}</h3>
				<div class="mt-2 md:mt-2.5">
					<p>{project.description}</p>
					<ul class="mt-2 list-disc pl-5">
						{#each project.keyPoints as item (item)}
							<!--  eslint-disable-next-line svelte/no-at-html-tags -->
							<li>{@html item}</li>
						{/each}
					</ul>
					<ul class="mt-2 flex flex-wrap gap-2 pl-0">
						{#each project.tools as item (item)}
							<code class="chip text-xs">{item}</code>
						{/each}
					</ul>
				</div>
			</div>
		{/each}
	</div>
</section>
