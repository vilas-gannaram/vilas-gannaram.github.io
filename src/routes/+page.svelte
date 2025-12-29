<script lang="ts">
	import { projects } from '$lib/projects';
</script>

<svelte:head>
	<title>Vilas Gannaram | Web Developer</title>
	<meta name="description" content="Vilas Gannaram | Web Developer" />
</svelte:head>

<main class="mx-auto min-h-screen w-[90%] max-w-[1440px] gap-x-6 rounded-2xl border lg:flex">
	<!-- Hero Section -->
	<section
		class="top-0 w-full flex-col justify-between border-r p-6 lg:sticky lg:flex lg:h-screen lg:max-w-xl"
	>
		<div>
			<h1>Vilas Gannaram</h1>
			<h6>Full Stack Web Developer</h6>
		</div>

		<div class="flex items-center gap-x-4">
			<a href="https://github.com/vilas-gannaram" target="_blank" rel="noopener noreferrer">
				<img class="aspect-auto w-8" src="/images/github-mark/github-mark.png" alt="Git Hub" />
			</a>

			<a
				href="https://www.linkedin.com/in/vilasgannaram/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img class="aspect-auto w-8" src="/images/in-logo/InBug-Black.png" alt="LinkedIn" />
			</a>
		</div>
	</section>

	<section class="w-full p-6">
		<!-- About Me -->
		<section id="about" class="">
			<!-- <h3 class="border-b">About Me</h3> -->

			<p class="mt-4 md:mt-6">
				Hello there! I’m <span class="font-semibold">Vilas Gannaram</span>, a self-taught web
				developer with
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
				<span class="font-semibold"> documentation </span>. The internet became my classroom, and I
				started to understand the web by building, breaking, and debugging small projects.
			</p>

			<p class="mt-4">
				What started as curiosity quickly became a daily habit — and by the time I graduated, I knew
				I wanted to keep learning and building for the web. That journey of self-driven learning
				turned into real-world work, and it continues to drive the way I grow as a developer today.
			</p>
		</section>

		<!-- work at aganitha -->
		<section id="projects" class="mt-12">
			<h3 class="border-background-gray-2 border-b">Experience</h3>

			{#each projects.slice(0, 5) as project (project.title)}
				<div class="mt-4 md:mt-6">
					<!--  eslint-disable-next-line svelte/no-at-html-tags -->
					<h4>{@html project.title}</h4>
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
		</section>

		<!-- contact me -->
		<section id="contact" class="">
			<h2 class="text-[clamp(36px,8vw+16px,60px)] font-light">Let's Connect</h2>
			<p class="mt-4 md:mt-6">Open to opportunities and collaborations. Drop me a message!</p>
			<a href="mailto:vilasgannaram@gmail.com" class="mt-2 md:mt-4"> Email Me </a>
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
