<script lang="ts">
	import { onMount } from 'svelte';
	import { projects } from '$lib/projects';
	// import type { PageProps } from './$types';
	// let { data }: PageProps = $props();

	let shouldBlur = $state(false);
	let thresholdY = 120;

	const handleScroll = () => {
		shouldBlur = window.scrollY > thresholdY;
	};

	onMount(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });

		// Set initial state on load
		handleScroll();

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<svelte:head>
	<title>Vilas Gannaram | Web Developer</title>
	<meta name="description" content="Vilas Gannaram | Web Developer" />
</svelte:head>

<header
	class="bg-ivory/70 sticky top-0 w-full py-4 pb-6 transition"
	class:backdrop-blur-xs={shouldBlur}
	class:backdrop-blur-none={!shouldBlur}
>
	<div class="mx-auto flex max-w-[1140px] items-center justify-between px-6">
		<p class="uppercase">Vilas Gannaram</p>

		<ul class="hidden items-center justify-end gap-x-6 text-sm uppercase md:flex">
			<li>Background</li>
			<li>My Work</li>
		</ul>
	</div>
</header>

<main class="">
	<!-- Hero section -->
	<section class="flex min-h-[calc(100dvh-120px)] flex-col justify-center">
		<div class="mx-auto w-full max-w-[1140px] px-6">
			<p class="">Hey, I'm</p>
			<h1>Vilas Gannaram</h1>
			<p>
				A passionate <code>Web Developer</code> building user-friendly applications and interfaces.
			</p>
		</div>
	</section>

	<!-- About -->
	<article id="about" class="">
		<div class="mx-auto my-16 max-w-[1140px] px-6">
			<h2>About Me</h2>

			<p class="mt-4 md:mt-6">
				Hi, I'm a web developer who enjoys building clean, reliable, and purposeful applications.
				Over the past couple of years, I’ve worked across the frontend and backend, helping shape
				everything from corporate websites to data-driven tools used in bioinformatics.
			</p>

			<p class="mt-4">
				I did my bachelor's in
				<span title="History, Political Science, & Public Administration">Arts [B.A.]</span>, but
				found myself drawn to the logic and creativity of the web. During my second year — around
				the COVID lockdown — I began learning <code>HTML</code>, <code>CSS</code>, and
				<code>JavaScript</code> through online tutorials, YouTube channels, and documentation. The internet
				became my classroom, and I learned by building, breaking, and debugging my way through small
				projects. What started as curiosity quickly became a daily habit — and by the time I graduated,
				I knew I wanted to build for the web professionally.
			</p>

			<p class="mt-4">
				That journey of self-driven learning turned into real-world work.
				<a href="#work-at-aganitha">See what I’ve contributed to so far. </a>
			</p>
		</div>
	</article>

	<!-- Aganitha Projects -->
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

	<!-- Contact -->
	<section id="contact" class="mx-auto my-16 max-w-[1140px] px-6">
		<h2>Let's Connect</h2>
		<p class="mt-4 md:mt-6">Open to opportunities and collaborations. Drop me a message!</p>
		<a href="mailto:vilas@example.com" class="mt-2 md:mt-4"> Email Me </a>
	</section>
</main>
