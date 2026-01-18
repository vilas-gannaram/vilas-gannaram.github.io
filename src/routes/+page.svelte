<script lang="ts">
	import Hero from '$lib/hero.svelte';
	import About from '$lib/about.svelte';
	import Experience from '$lib/experience.svelte';
	import Projects from '$lib/projects.svelte';

	let activeId = $state('about');

	function scrollSpy(node: HTMLElement, onIntersect: (id: string) => void) {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						onIntersect(entry.target.id);
					}
				});
			},
			{ threshold: 0.6 }
		);

		const sections = node.querySelectorAll('section.observe');
		sections.forEach((section) => observer.observe(section));

		return {
			destroy() {
				observer.disconnect();
			}
		};
	}
</script>

<main class="mx-auto min-h-screen max-w-7xl gap-x-12 rounded-xl lg:flex lg:px-12">
	<Hero {activeId} />

	<div class="w-full lg:py-20" use:scrollSpy={(id) => (activeId = id)}>
		<About />
		<Experience />
		<Projects />

		<footer class="mx-auto my-8 px-4 w-[90%] lg:my-0 lg:w-full">
			<p class="text-sm lg:text-base">
				Made with
				<a
					class="underline underline-offset-2"
					href="https://svelte.dev/docs/kit/introduction"
					target="_blank"
					rel="noopener noreferrer">SvelteKit</a
				>
				<br />
				Layout inspired by
				<a
					class="underline underline-offset-2"
					href="https://brittanychiang.com"
					target="_blank"
					rel="noopener noreferrer">Brittany Chiang</a
				>'s portfolio <br /> Color palette inspired by Microsoft
				<a
					class="underline underline-offset-2"
					href="https://copilot.microsoft.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					Copilot</a
				>
			</p>
		</footer>
	</div>
</main>
