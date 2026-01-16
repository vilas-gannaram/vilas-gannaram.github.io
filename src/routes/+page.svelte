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

<main
	class="mx-auto min-h-screen w-[90%] max-w-7xl gap-x-12 rounded-xl px-1 md:px-6 lg:flex lg:px-12"
>
	<Hero {activeId} />

	<div class="w-full lg:py-20" use:scrollSpy={(id) => (activeId = id)}>
		<About />
		<Experience />
		<Projects />

		<footer>
			<p>
				Made with SvelteKit <br />
				Layout inspired by Brittany Chiang's portfolio <br /> Colors from Microsoft Copilot
			</p>
		</footer>
	</div>
</main>
