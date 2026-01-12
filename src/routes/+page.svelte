<script lang="ts">
	import Hero from '$lib/hero.svelte';

	import About from '$lib/about.svelte';
	import Experience from '$lib/experience.svelte';
	import Projects from '$lib/projects.svelte';
</script>

<main
	class="mx-auto my-8 min-h-screen w-[90%] max-w-7xl gap-x-12 rounded-2xl lg:my-0 lg:flex lg:px-6"
>
	<Hero />

	<section class="w-full lg:py-18">
		<About />
		<Experience />
		<Projects />
	</section>
</main>
