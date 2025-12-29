<script lang="ts">
	// import { onMount } from 'svelte';
	// import Lenis from 'lenis';

	import '../app.css';
	import 'lenis/dist/lenis.css';

	let { children } = $props();

	// onMount(() => {
	// 	new Lenis({
	// 		autoRaf: true,
	// 		anchors: true
	// 	});
	// });
</script>

{@render children()}
