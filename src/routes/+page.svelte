<script lang="ts">
	import { projects } from '$lib/projects';

	const navItems = [
		{ value: '#about', label: 'About Me' },
		// {
		// 	value: '#experience',
		// 	label: 'Experience'
		// },
		{ value: '#projects', label: 'Projects' },
		{ value: '#contact', label: 'Contact' },
		{ value: '/blogs', label: 'Blogs' }
	];
</script>

<svelte:head>
	<title>Vilas Gannaram | Web Developer</title>
	<meta name="description" content="Vilas Gannaram | Web Developer" />
</svelte:head>

<main class="scroll-smooth">
	<!-- Hero Section -->
	<section class="relative flex h-[680px] scroll-m-20 flex-col justify-center">
		<div class="mx-auto w-full max-w-[1140px] px-6">
			<h4 class="font-light">Hello!, I am</h4>
			<h1 class="text-[clamp(36px,12vw+16px,125px)] font-light">Vilas Gannaram</h1>
			<h5 class="mt-1 font-light">Web Developer <span class="mx-1.5 font-medium">|</span> 2.7+ years IT Experience</h5>
		</div>
	</section>

	<!-- About Me -->
	<section id="about" class="scroll-m-20">
		<div class="mx-auto my-16 max-w-[1140px] px-6">
			<h2 class="text-[clamp(36px,8vw+16px,60px)] font-light">About Me</h2>

			<p class="mt-4 md:mt-6">
				Hello there! I’m <span class="font-semibold">Vilas Gannaram</span>, a self-taught
				web developer with
				<span class="font-semibold">2.7+ years</span>
				of work experience. Over the past couple of years, I’ve worked across the stack, but I enjoy
				working more in spaces where development and design overlap — where I don’t just write code but
				also make UI/UX decisions and become a <em>"de facto designer"</em>.
			</p>

			<p class="mt-4">
				Currently, I work as a Junior Web Developer at <span class="font-semibold"
					>Aganitha Cognitive Solutions</span
				>, Hyderabad, India — where I often get to wear the “de facto designer” hat. I contribute to
				a range of projects, including corporate websites, LLM chat web applications, and
				data-driven tools used in bioinformatics.
			</p>

			<p class="mt-4">
				I did my bachelor's in
				<span title="History, Political Science, & Public Administration">Arts [B.A.]</span>, but
				found myself drawn to the logic and creativity of the web. During my second year — around
				the time of the COVID lockdown — I began learning Web Development through
				<span class="font-semibold"> online tutorials, YouTube channels, </span> and
				<span class="font-semibold"> documentation </span>. The internet became my
				classroom, and I started to understand the web by building, breaking, and debugging small
				projects.
			</p>

			<p class="mt-4">
				What started as curiosity quickly became a daily habit — and by the time I graduated, I knew
				I wanted to keep learning and building for the web. That journey of self-driven learning
				turned into real-world work, and it continues to drive the way I grow as a developer today.
			</p>
		</div>
	</section>

	<!-- <section id="experience">
		<div class="mx-auto my-16 max-w-[1140px] px-6">
			<h2 class="text-[clamp(36px,8vw+16px,60px)] font-light">Experience</h2>

			<h3 class="mt-6">Aganitha Cognitive Solutions – Hyderabad</h3>
			<p class="text-headline mt-2 text-lg font-medium tracking-tight italic">
				Web Developer Intern → Jr. Web Developer I → Jr. Web Developer II
			</p>
			<p class="mt-0.5 font-semibold italic">March 2023 - Present</p>

			<p class="mt-6">
				Joined as a full-time intern and advanced through 2 Junior roles, contributing across
				multiple projects in bioinformatics and research tooling, with a focus on frontend
				engineering, data visualization.
			</p>

			<div class="mt-4">
				<div class="">
					<h4>Corporate Website:</h4>

					<p class="mt-2">
						Contributed to the company’s existing website by adding new pages and updates. Later,
						under the CTO’s guidance, migrated the site to the <b>WordPress CMS</b>, exploring
						plugins and managing <b>Dockerized deployment</b> to production.
					</p>
				</div>
			</div>
		</div>
	</section> -->

	<!-- work at aganitha -->
	<section id="projects" class="scroll-m-20">
		<div class="mx-auto my-16 max-w-[1140px] px-6">
			<h2 class="text-[clamp(36px,8vw+16px,60px)] font-light">Work At Aganitha</h2>

			{#each projects.slice(0, 5) as project (project.title)}
				<div class="mt-4 md:mt-6">
					<!--  eslint-disable-next-line svelte/no-at-html-tags -->
					<h3>{@html project.title}</h3>
					<div class="mt-2 space-y-2 md:mt-2.5">
						<p>{project.description}</p>
						<ul class="ml-5 list-disc pl-5">
							{#each project.keyPoints as item (item)}
								<!--  eslint-disable-next-line svelte/no-at-html-tags -->
								<li class="mt-2">{@html item}</li>
							{/each}
						</ul>
						<ul class="flex flex-wrap gap-2 pl-0">
							{#each project.tools as item (item)}
								<code class="chip text-xs">{item}</code>
							{/each}
						</ul>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- contact me -->
	<section id="contact" class="mx-auto my-16 max-w-[1140px] scroll-m-20 px-6">
		<h2 class="text-[clamp(36px,8vw+16px,60px)] font-light">Let's Connect</h2>
		<p class="mt-4 md:mt-6">Open to opportunities and collaborations. Drop me a message!</p>
		<a href="mailto:vilasgannaram@gmail.com" class="mt-2 md:mt-4"> Email Me </a>
	</section>

	<!-- navigation -->
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
	</nav>
</main>
