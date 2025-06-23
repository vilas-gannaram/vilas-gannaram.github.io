<script lang="ts">
	import mermaid from 'mermaid';

	const { diagram }: { diagram: string } = $props();

	let diagramText = $state('');

	$effect(() => {
		const renderMermaid = async () => {
			mermaid.initialize({
				startOnLoad: false,
				theme: 'base', // ← set your theme here
				themeVariables: {
					primaryColor: '#f8fafc',
					lineColor: '#ccc',
					background: '#f2ede0',
					fontFamily: 'monospace'
				}
			});

			const { svg } = await mermaid.render(
				'mermaid-' + Math.random().toString(36).substring(2),
				diagram.trim()
			);

			diagramText = svg;
		};

		renderMermaid();
	});
</script>

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
<div class="mx-auto my-2 w-full first:mx-auto">{@html diagramText}</div>
