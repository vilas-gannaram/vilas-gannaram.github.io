<script lang="ts">
	let showHeader = $state(true);
	let lastScrollY = $state(0);
	const thresholdY = $state(80);

	const handleScroll = () => {
		const currentScrollY = window.scrollY;

		if (currentScrollY > thresholdY) {
			showHeader = currentScrollY < lastScrollY;
		} else {
			showHeader = true;
		}

		lastScrollY = currentScrollY;
	};

	$effect(() => {
		handleScroll();

		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<header
	class="sticky top-0 w-full transform bg-transparent py-4 transition duration-300 ease-in-out lg:py-5"
	class:-translate-y-full={!showHeader}
	class:translate-y-0={showHeader}
	class:backdrop-blur-xs={lastScrollY > 40}
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
