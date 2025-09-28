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
			<h4 class="mt-1 font-light">
				B.A. <span title="History, Political Science & Public Administration" class="font-light"
					>[H.P.P]</span
				>
				<span class="mx-1.5 font-medium">|</span> Self-Taught Web Developer
				<span class="mx-1.5 font-medium">|</span> 2.7+ years IT Experience
			</h4>
		</div>
	</section>

	<!-- About Me -->
	<section id="about" class="scroll-m-20">
		<div class="mx-auto my-16 max-w-[1140px] px-6">
			<h2 class="">About Me</h2>

			<p class="mt-4 md:mt-6">
				Hi, I'm a web developer who enjoys building clean, reliable, and purposeful applications.
				Over the past couple of years, I’ve worked across the frontend and backend, helping shape
				everything from corporate websites to data-driven tools used in bioinformatics.
			</p>

			<p class="mt-4">
				I did my bachelor's in
				<span title="History, Political Science, & Public Administration">Arts [B.A.]</span>, but
				found myself drawn to the logic and creativity of the web. During my second year — around
				the COVID lockdown — I began learning <span class="ml-0.5 text-lg font-medium">HTML</span>,
				<span class="text-lg font-medium">CSS</span>, and
				<span class="mr-0.5 text-lg font-medium">JavaScript</span> through online tutorials, YouTube
				channels, and documentation. The internet became my classroom, and I learned by building, breaking,
				and debugging my way through small projects. What started as curiosity quickly became a daily
				habit — and by the time I graduated, I knew I wanted to build for the web professionally.
			</p>

			<p class="mt-4">
				That journey of self-driven learning turned into real-world work.
				<a href="#projects">See what I’ve contributed to so far. </a>
			</p>
		</div>
	</section>

	<!-- work at aganitha -->
	<section id="projects" class="scroll-m-20">
		<div class="mx-auto my-16 max-w-[1140px] px-6">
			<h2>Work At Aganitha</h2>

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
		<h2>Let's Connect</h2>
		<p class="mt-4 md:mt-6">Open to opportunities and collaborations. Drop me a message!</p>
		<a href="mailto:vilasgannaram@gmail.com" class="mt-2 md:mt-4"> Email Me </a>
	</section>

	<!-- navigation -->
	<nav
		class="bg-light-neutral fixed bottom-10 left-[50%] z-50 hidden -translate-x-[50%] rounded border p-1 lg:inline-block"
	>
		<ul class="flex items-center justify-center gap-x-1.5">
			{#each navItems as item (item.value)}
				<li class="border px-8 py-4">
					<a href={item.value}>{item.label}</a>
				</li>
			{/each}
		</ul>
	</nav>
</main>

<!-- <section id="experience">
	<div class="mx-auto my-16 max-w-[1140px] px-6">
		<h2>Experience</h2>

		<h3 class="mt-6">Aganitha Cognitive Solutions – Hyderabad</h3>
		<p class="text-headline mt-2 text-lg font-medium tracking-tight italic">
			Web Developer Intern → Jr. Web Developer I → Jr. Web Developer II
		</p>
		<p class="mt-0.5 font-semibold italic">March 2023 - Present</p>

		<p class="mt-6">
			Joined as a full-time intern and advanced through 2 Junior roles, contributing across multiple
			projects in bioinformatics and research tooling, with a focus on frontend engineering, data
			visualization.
		</p>


		<div class="mt-4">
			<div class="">
				<h4>Corporate Website:</h4>

				<p class="mt-2">
					Contributed to the company’s existing website by adding new pages and updates. Later,
					under the CTO’s guidance, migrated the site to the <b>WordPress CMS</b>, exploring plugins
					and managing <b>Dockerized deployment</b> to production.
				</p>
			</div>
		</div>
	</div>
</section> -->
