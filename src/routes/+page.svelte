<script lang="ts">
	// import { projects } from '$lib/projects';
	import { Github, Linkedin, Mail } from '@lucide/svelte';
</script>

<svelte:head>
	<title>Vilas Gannaram | Web Developer</title>
	<meta name="description" content="Vilas Gannaram | Web Developer" />
</svelte:head>

<main
	class="mx-auto my-8 min-h-screen w-[90%] max-w-7xl gap-x-12 rounded-2xl lg:my-0 lg:flex lg:px-6"
>
	<!-- Hero Section -->
	<section
		class="top-0 flex w-full flex-col justify-between gap-y-4 lg:sticky lg:h-screen lg:max-w-xl lg:py-20"
	>
		<div>
			<h1 class="text-slate-300">Vilas Gannaram</h1>
			<h5 class="mt-1 text-slate-300">Web Developer</h5>
		</div>

		<div class="flex items-center gap-x-4">
			<a href="https://github.com/vilas-gannaram" target="_blank" rel="noopener noreferrer">
				<Github />
			</a>

			<a
				href="https://www.linkedin.com/in/vilasgannaram/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Linkedin />
			</a>

			<a href="mailto:vilasgannaram@gmail.com" target="_blank" rel="noopener noreferrer">
				<Mail />
			</a>
		</div>
	</section>

	<section class="w-full lg:py-20">
		<!-- About Me -->
		<section id="about" class="">
			<!-- <h3 class="border-b">About Me</h3> -->

			<p class="mt-4 md:mt-6">
				I am a Full-Stack Developer with 3 years of experience building and shipping web
				applications. I focus on the entire lifecycle of a feature—from building responsive UI
				components to writing the APIs and handling the data integration that connects them.

				<br />
				<br />

				I’ve spent the last few years working on a variety of projects, including corporate
				platforms, LLM-integrated chat tools, and data-driven applications for the biotech sector. I
				enjoy the challenge of taking a complex requirement and breaking it down into a functional,
				end-to-end solution.

				<br />
				<br />

				My path into development was non-traditional. I started with a B.A. and taught myself to
				build for the web by digging into documentation and solving real-world bugs. That background
				has made me a developer who is comfortable jumping into unfamiliar codebases, navigating
				technical debt, and learning whatever stack is necessary to get the job done.
			</p>
		</section>

		<!-- work at aganitha -->
		<section id="projects" class="mt-12">
			<h3 class="border-b pb-0.5">Experience</h3>

			<div class="mt-4 space-y-1 md:mt-6">
				<h4>Web Developer | Aganitha Cognitive Solutions</h4>
				<p class="text-sm italic">Hyderabad, India | 2023 – Present</p>
			</div>

			<!-- {#each projects.slice(0, 5) as project (project.title)}
				<div class="mt-4 space-y-2 md:mt-6">
					 eslint-disable-next-line svelte/no-at-html-tags
					<h4>{@html project.title}</h4>
					<div class=" space-y-2">
						<p>{project.description}</p>
						<ul class="ml-5 list-disc pl-5">
							{#each project.keyPoints as item (item)}
								 eslint-disable-next-line svelte/no-at-html-tags
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
			{/each} -->
		</section>

		<!-- navigation
	<nav
		class="bg-light-neutral fixed bottom-5 left-[50%] z-50 hidden -translate-x-[50%] rounded border border-dashed p-1.5 lg:inline-block"
	>
		<ul class="flex items-center justify-center gap-x-1.5">
			{#each navItems as item (item.value)}
				<li class="border border-dashed px-8 py-4">
					<a href={item.value} class="font-light">{item.label}</a>
				</li>
			{/each}
		</ul>
	</nav> -->
	</section>
</main>
