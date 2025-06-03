<script lang="ts">
	import { onMount } from 'svelte';
	// import type { PageProps } from './$types';
	// let { data }: PageProps = $props();

	import HeroSection from '$lib/components/hero-section.svelte';
	import AboutSection from '$lib/components/about-section.svelte';
	import ContactSection from '$lib/components/contact-section.svelte';
	// import ProjectsSection from '$lib/components/projects-section.svelte';
	import Experience from '$lib/components/experience.svelte';

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

<div
	class="absolute top-0 right-0 bottom-0 left-0 -z-10 grid grid-cols-5 gap-x-3 px-[5vw] md:grid-cols-8 lg:grid-cols-12"
>
	<div class="border-r border-l border-dashed border-gray-100"></div>
	<div class="border-r border-l border-dashed border-gray-100"></div>
	<div class="border-r border-l border-dashed border-gray-100"></div>
	<div class="border-r border-l border-dashed border-gray-100"></div>
	<div class="border-r border-l border-dashed border-gray-100"></div>
	<div class="hidden border-r border-l border-dashed border-gray-100 md:block"></div>
	<div class="hidden border-r border-l border-dashed border-gray-100 md:block"></div>
	<div class="hidden border-r border-l border-dashed border-gray-100 md:block"></div>
	<div class="hidden border-r border-l border-dashed border-gray-100 lg:block"></div>
	<div class="hidden border-r border-l border-dashed border-gray-100 lg:block"></div>
	<div class="hidden border-r border-l border-dashed border-gray-100 lg:block"></div>
	<div class="hidden border-r border-l border-dashed border-gray-100 lg:block"></div>
</div>

<header
	class="bg-ivory/70 sticky top-0 w-full py-4 pb-6 transition"
	class:backdrop-blur-xs={shouldBlur}
	class:backdrop-blur-none={!shouldBlur}
>
	<div class="mx-auto flex max-w-[1140px] items-center justify-between px-6">
		<p class="uppercase">Vilas Gannaram</p>

		<ul class="hidden items-center justify-end gap-x-6 font-serif text-sm uppercase md:flex">
			<li>Background</li>
			<li>My Work</li>
		</ul>
	</div>
</header>

<main class="">
	<HeroSection />
	<AboutSection />
	<Experience />
	<!-- <ProjectsSection /> -->
	<ContactSection />
</main>

<!-- header -->
<!-- <header class="bg-slate-100">
	<div class="container mx-auto bg-slate-200 py-3">
		<h1 class="font-['Jost'] text-3xl font-medium tracking-tighter">
			<span class="italic">V</span>
			<span class="-ml-2">G</span>
		</h1>
	</div>
</header> -->

<!-- hero section -->
<!-- <section class="h-screen border-t bg-slate-100">
	<div class="container mx-auto h-full bg-slate-200">
		<h3>Hi, my name is</h3>
		<h1>Vilas Gannaram</h1>
		<p>A passionate Web Developer building user-friendly applications and interfaces.</p>
	</div>
</section> -->

<!-- <section class="h-screen border-t bg-slate-100">
	<div class="container mx-auto h-full bg-slate-200">
		<h2>About</h2>

		<div class="space-y-2">
			<p class="text-secondary-foreground">
				I’m a web developer passionate about crafting intuitive and interactive digital experiences.
				My journey began during my college years, where I dove into web development through
				self-learning, exploring modern tools and frameworks.
			</p>

			<p class="text-secondary-foreground">
				With hands-on experience in React, TailwindCSS, and other frontend technologies, I’ve
				contributed to diverse projects, from creating corporate websites to building data-driven
				applications for Genome-Wide Association Studies (GWAS). I thrive on solving challenges,
				delivering clean and efficient code, and collaborating with teams to bring ideas to life.
			</p>
		</div>
	</div>
</section> -->

<!-- recent blog posts -->
<!-- <section class="border-t bg-slate-100">
	<ul class="container mx-auto bg-slate-200">
		{#each data.posts.slice(0, 5) as post (post.slug)}
			<li>
				<a href={`/blogs/${post.slug}`}>
					{post.metadata?.title}
				</a>
				{#if post.metadata.date}
					<small> — {post.metadata.date}</small>
				{/if}
			</li>
		{/each}
	</ul>
</section> -->
