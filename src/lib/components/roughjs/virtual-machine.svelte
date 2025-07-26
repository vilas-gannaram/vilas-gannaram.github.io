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
			roughness: 0.85,
			fillStyle: 'solid',
			stroke: 'var(--color-border)',
			strokeWidth: 0.5
		};

		shapes = [
			// VM1
			rc.rectangle(50, 50, 120, 40, commonOpts),
			rc.rectangle(50, 100, 120, 40, commonOpts),

			// VM2
			rc.rectangle(200, 50, 120, 40, commonOpts),
			rc.rectangle(200, 100, 120, 40, commonOpts),

			// VM3
			rc.rectangle(350, 50, 120, 40, commonOpts),
			rc.rectangle(350, 100, 120, 40, commonOpts),

			// Stack
			rc.rectangle(50, 150, 420, 45, { ...commonOpts, roughness: 3 }),
			rc.rectangle(50, 205, 420, 45, { ...commonOpts, roughness: 3 }),
			rc.rectangle(50, 260, 420, 45, { ...commonOpts, roughness: 3 }),

			rc.rectangle(0, 0, 520, 350, { stroke: 'var(--color-border)', roughness: 6 })
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

	<!-- Labels for VM1, VM2, VM3 -->
	<text x="110" y="75" text-anchor="middle">App</text>
	<text x="110" y="125" text-anchor="middle">Guest OS</text>

	<text x="255" y="75" text-anchor="middle">App</text>
	<text x="255" y="125" text-anchor="middle">Guest OS</text>

	<text x="405" y="75" text-anchor="middle">App</text>
	<text x="405" y="125" text-anchor="middle">Guest OS</text>

	<!-- Stack labels -->
	<text x="250" y="175" text-anchor="middle">Hypervisor</text>
	<text x="250" y="235" text-anchor="middle">Host Operating System</text>
	<text x="250" y="285" text-anchor="middle">Host Hardware</text>
</svg>

<style>
	svg#vm_container text {
		font-size: 12px;
		font-family: sans-serif;
	}
</style>
