<script>
	import BlurFade from '$lib/components/magic/blur-fade.svelte';
	import ProjectCard from '$lib/components/portfolio/ProjectCard.svelte';
	import Work from '$lib/components/portfolio/work/index.svelte';
	import Skills from '$lib/components/portfolio/skills.svelte';
	import PROJECTS from '$lib/data/projects';
	import { CONTACT } from '$lib/data/contact';
	let BLUR_FADE_DELAY = 0.04;
</script>

<!-- META TAGS -->

<svelte:head>
	<title>Vilas Gannaram | Software Engineer</title>
	<meta name="description" content="Vilas Gannaram | Software Engineer" />
	<meta property="og:title" content="Vilas Gannaram" />
	<meta property="og:description" content="Vilas Gannaram | Software Engineer" />
	<meta property="og:url" content="https://vilas-gannaram.github.io" />
	<meta property="og:site_name" content="Vilas Gannaram" />
	<!-- <meta property="og:image" content={DATA.img} /> -->
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta name="robots" content="index, follow" />
	<meta
		name="googlebot"
		content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
	/>
	<meta name="twitter:title" content="Vilas Gannaram" />
	<meta name="twitter:card" content="summary_large_image" />
	<!-- <meta name="twitter:image" content={DATA.img} /> -->
	<meta name="twitter:description" content="Vilas Gannaram | Software Engineer" />

	<meta name="google-site-verification" content="your-google-verification-code" />
	<meta name="yandex-verification" content="your-yandex-verification-code" />
</svelte:head>

<!-- MAIN SECTION -->
<main class="flex min-h-[100dvh] flex-col space-y-10">
	<!-- Hero Secion -->
	<section id="hero">
		<div class="mx-auto w-full max-w-3xl space-y-8">
			<div class="flex justify-between gap-2">
				<div class="flex flex-1 flex-col space-y-1.5">
					<BlurFade
						delay={BLUR_FADE_DELAY}
						class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
						yOffset={8}>Hi, I'm Vilas 👋</BlurFade
					>
					<BlurFade class="max-w-[600px] md:text-xl" delay={BLUR_FADE_DELAY}
						>Software Engineer
					</BlurFade>
				</div>
				<!-- <BlurFade delay={BLUR_FADE_DELAY}>
					<Avatar.Root class="size-28 border">
						<Avatar.Image alt='' src='' />
						<Avatar.Fallback>VG</Avatar.Fallback>
					</Avatar.Root>
				</BlurFade> -->
			</div>
		</div>
	</section>

	<!-- About Section -->
	<section id="about">
		<BlurFade delay={BLUR_FADE_DELAY}>
			<h2 class="text-lg font-bold md:text-2xl">About</h2>
		</BlurFade>
		<BlurFade delay={BLUR_FADE_DELAY * 1.4}>
			<p class="text-muted-foreground mt-4 font-sans text-sm">
				Software Engineer with 3+ years of experience building high-performance, real-time web
				platforms for data-intensive and AI-driven products. Proven track record of optimizing
				rendering pipelines, structuring scalable state systems, and delivering production-grade
				interfaces for global research teams.
			</p>
		</BlurFade>
	</section>

	<!-- Work Experience -->
	<section id="work">
		<BlurFade delay={BLUR_FADE_DELAY}>
			<h2 class="text-lg font-bold md:text-2xl">Work Experience</h2>
		</BlurFade>

		<BlurFade delay={BLUR_FADE_DELAY * 1.4}>
			<Work />
		</BlurFade>
	</section>

	<!-- Skills -->
	<section id="skills">
		<div class="flex min-h-0 flex-col gap-y-3">
			<BlurFade delay={BLUR_FADE_DELAY}>
				<h2 class="text-xl font-bold">Skills</h2>
			</BlurFade>
			<div class="flex flex-wrap gap-1">
				<BlurFade delay={BLUR_FADE_DELAY * 0.002}>
					<Skills />
				</BlurFade>
			</div>
		</div>
	</section>

	<!-- Projects -->
	<section id="projects">
		<div class="w-full space-y-12 py-12">
			<BlurFade delay={BLUR_FADE_DELAY}>
				<div class="flex flex-col items-center justify-center space-y-4 text-center">
					<div class="space-y-2">
						<div class="bg-foreground text-background inline-block rounded-lg px-3 py-1 text-sm">
							My Projects
						</div>
						<h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">
							Check out my latest work
						</h2>
						<p
							class="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
						>
							I&apos;ve worked on a variety of projects, from simple websites to complex web
							applications. Here are a few of my favorites.
						</p>
					</div>
				</div>
			</BlurFade>
			<div class="mx-auto grid max-w-[800px] grid-cols-1 gap-3 sm:grid-cols-2">
				{#each PROJECTS as project, id (id)}
					<BlurFade delay={BLUR_FADE_DELAY * 1.5 + id * 0.05}>
						<ProjectCard
							href={project.href}
							title={project.title}
							description={project.description}
							dates={project.dates}
							tags={project.technologies}
							image={project.image}
							video={project.video}
							links={project.links}
						/>
					</BlurFade>
				{/each}
			</div>
		</div>
	</section>

	<section id="contact">
		<div class="grid w-full items-center justify-center gap-4 px-4 py-12 text-center md:px-6">
			<BlurFade delay={BLUR_FADE_DELAY * 2}>
				<div class="space-y-3">
					<div class="bg-foreground text-background inline-block rounded-lg px-3 py-1 text-sm">
						Contact
					</div>
					<h2 class="text-3xl font-bold tracking-tight sm:text-5xl">Get in Touch</h2>
					<p
						class="text-muted-foreground mx-auto max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
					>
						Want to chat? Just shoot me a dm
						<a href={CONTACT.social.X.url} target="_blank" class="text-blue-500 hover:underline">
							with a direct question on twitter
						</a>
						and I&apos;ll respond whenever I can.
					</p>
				</div>
			</BlurFade>
		</div>
	</section>
</main>
