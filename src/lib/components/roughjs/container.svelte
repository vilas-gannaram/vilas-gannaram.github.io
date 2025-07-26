<script lang="ts">
	import rough from 'roughjs';
	let svgEl: SVGSVGElement | null = null;
	let shapes: SVGElement[] = [];

	$: if (svgEl) {
		const rc = rough.svg(svgEl);

		const commonOpts = {
			fill: '#f8fafc',
			fillWeight: 0.25,
			bowing: 0,
			roughness: 1,
			fillStyle: 'solid',
			stroke: 'var(--color-border)',
			strokeWidth: 0.5
		};

		shapes = [
			rc.rectangle(50, 50, 80, 40, commonOpts),
			rc.rectangle(160, 50, 80, 40, commonOpts),
			rc.rectangle(280, 50, 80, 40, commonOpts),
			rc.rectangle(390, 50, 80, 40, commonOpts),

			// Stack
			rc.rectangle(50, 110, 420, 45, { ...commonOpts, roughness: 3 }),
			rc.rectangle(50, 170, 420, 45, { ...commonOpts, roughness: 3 }),
			rc.rectangle(50, 230, 420, 45, { ...commonOpts, roughness: 3 }),

			rc.rectangle(0, 0, 520, 330, { stroke: 'var(--color-border)', roughness: 6 })
		];
	}
</script>

<svg
	id="vm_container"
	bind:this={svgEl}
	viewBox="0 0 520 350"
	preserveAspectRatio="xMidYMid meet"
	style="width: 100%; height: auto"
	class="border-border my-4 max-w-3xl md:my-8"
>
	{#each shapes as shape, index (index)}
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html shape.outerHTML}
	{/each}

	<!-- Labels for Apps -->
	<text x="90" y="75" text-anchor="middle">App 1</text>
	<text x="200" y="75" text-anchor="middle">App 2</text>
	<text x="320" y="75" text-anchor="middle">App 3</text>
	<text x="425" y="75" text-anchor="middle">App 4</text>

	<!-- Stack labels -->
	<text x="250" y="135" text-anchor="middle">Docker Engine</text>
	<text x="250" y="195" text-anchor="middle">Host Operating System</text>
	<text x="250" y="255" text-anchor="middle">Host Hardware</text>
</svg>

<style>
	svg#vm_container text {
		font-size: 12px;
		font-family: sans-serif;
	}
</style>
