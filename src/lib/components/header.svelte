<script lang="ts">
	import { onMount } from 'svelte';

	let showHeader = true;
	let lastScrollY = 0;
	const thresholdY = 80;

	const handleScroll = () => {
		const currentScrollY = window.scrollY;

		// Only trigger if past the threshold to avoid flickers at top
		if (currentScrollY > thresholdY) {
			showHeader = currentScrollY < lastScrollY; // scroll up → show header
		} else {
			showHeader = true; // near top → always show header
		}

		lastScrollY = currentScrollY;
	};

	onMount(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll(); // Set initial state
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<header
	class="sticky top-0 w-full transform py-4 lg:py-5 transition duration-300 ease-in-out bg-transparent backdrop-blur-xs"
	class:-translate-y-full={!showHeader}
	class:translate-y-0={showHeader}
>
	<div class="mx-auto flex max-w-[1140px] items-center justify-between px-6">
		<h1 class="text-body text-lg font-normal uppercase">
			<a href="/">Vilas Gannaram</a>
		</h1>

		<ul class="hidden items-center justify-end gap-x-6 uppercase md:flex">
			<li>Background</li>
			<li>My Work</li>
			<li><a href="/blogs">Blogs</a></li>
		</ul>
	</div>
</header>
