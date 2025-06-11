<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

{@render children()}

<div
	class="absolute top-0 right-0 bottom-0 left-0 -z-10 grid grid-cols-3 gap-x-3 px-[5vw] md:grid-cols-8 lg:grid-cols-12"
>
	<div class="border-r border-l border-dashed border-gray-100"></div>
	<div class="border-r border-l border-dashed border-gray-100"></div>
	<div class="border-r border-l border-dashed border-gray-100"></div>

	<div class="hidden border-r border-l border-dashed border-gray-100 md:block"></div>
	<div class="hidden border-r border-l border-dashed border-gray-100 md:block"></div>
	<div class="hidden border-r border-l border-dashed border-gray-100 md:block"></div>
	<div class="hidden border-r border-l border-dashed border-gray-100 md:block"></div>
	<div class="hidden border-r border-l border-dashed border-gray-100 md:block"></div>

	<div class="hidden border-r border-l border-dashed border-gray-100 lg:block"></div>
	<div class="hidden border-r border-l border-dashed border-gray-100 lg:block"></div>
	<div class="hidden border-r border-l border-dashed border-gray-100 lg:block"></div>
	<div class="hidden border-r border-l border-dashed border-gray-100 lg:block"></div>
</div>
