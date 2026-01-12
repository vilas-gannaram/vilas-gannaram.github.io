<script lang="ts">
	import Hero from '$lib/hero.svelte';
	import About from '$lib/about.svelte';
	import Experience from '$lib/experience.svelte';
	import Projects from '$lib/projects.svelte';
</script>

<main
	class="mx-auto min-h-screen w-[90%] max-w-7xl gap-x-12 rounded-xl px-1 md:px-6 lg:flex lg:px-12"
>
	<Hero />

	<section class="w-full lg:py-22">
		<About />
		<Experience />
		<Projects />
	</section>
</main>
