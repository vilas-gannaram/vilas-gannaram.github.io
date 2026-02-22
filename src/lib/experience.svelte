<section id="experience" class="observe my-32 min-h-svh scroll-mt-20">
	<h3
		class="sticky top-0 mx-auto my-8 px-[5%] py-4 text-sm font-semibold uppercase backdrop-blur lg:hidden lg:w-full"
	>
		Experience
	</h3>

	<div class="mx-auto w-[90%] lg:w-full">
		<h4>Software Engineer | Aganitha Cognitive Solutions</h4>
		<p class="mt-1 text-sm italic">Hyderabad, India | 2023 – Present</p>

		<p class="mt-4">
			I transitioned from a background in the Humanities to architecting high-performance systems
			for global research teams. My work focuses on the intersection of complex data visualization,
			AI-driven workflows, and the engineering required to make them both interactive and reliable.
		</p>

		<ul class="mt-10 list-none space-y-10">
			<!-- Aganitha's Igniva Product -->
			<li class="space-y-2">
				<h5>Igniva<sup>TM</sup> - Platform Core</h5>
				<p>
					Architected a unified UI for 13 specialized bioinformatics agents, enabling researchers to
					orchestrate cross-domain scientific workflows within a single Next.js ecosystem. Developed
					a tool-rendering engine to map heterogeneous agent outputs—including protein structures
					and genomic plots—into standardized interactive frameworks. Engineered a high-performance
					SSE streaming pipeline with token reconciliation for flicker-free AI reasoning and
					multi-day session persistence.
				</p>

				<div class="mt-3 flex flex-wrap gap-x-2 gap-y-1 lg:gap-y-2">
					{#each ['Next.js', 'MDX', 'Zustand', 'TailwindCSS', 'Plotly.js'] as chip (chip)}
						<code
							class="rounded-full border px-2 py-1 text-xs font-medium text-slate-300/70 lg:px-3 lg:py-1.5"
							>{chip}</code
						>
					{/each}
				</div>
			</li>

			<!-- TTAM Research Reports -->
			<li class="space-y-2">
				<h5>Research Data Product Reports</h5>
				<p>
					Built real-time analytics interfaces for "Burden Reports," transforming multi-million row
					genomic datasets into accessible research tools via GraphQL and server-side pagination.
					Modernized open-source exploration logic into a DuckDB-backed architecture to increase
					responsiveness for high-volume sequence exploration. Optimized rendering pipelines for
					complex scientific visualizations involving over 50k data points, achieving sub-second UI
					responsivenes
				</p>

				<div class="mt-3 flex flex-wrap gap-x-2 gap-y-1 lg:gap-y-2">
					{#each ['ReactJS', 'SvelteKit', 'TailwindCSS', 'Hasura', 'GraphQL', 'Apollo client', 'D3.js', 'Plotly.js'] as chip (chip)}
						<code
							class="rounded-full border px-2 py-1 text-xs font-medium text-slate-300/70 lg:px-3 lg:py-1.5"
							>{chip}</code
						>
					{/each}
				</div>
			</li>

			<!-- Aganitha's Corp. website -->
			<li class="space-y-2">
				<h5>Aganitha Corporate Website</h5>
				<p>
					Migrated the corporate digital presence to a containerized WordPress ecosystem, cutting
					content update turnaround time by 50%. Engineered a Docker-based deployment environment
					tuned with server-level LSCache settings to secure an "A+" performance grade in GTmetrix.
					Enhanced technical SEO and organic search visibility by 30% through integrated
					site-tracking and performance tuning
				</p>

				<div class="mt-3 flex flex-wrap gap-x-2 gap-y-1 lg:gap-y-2">
					{#each ['11ty', 'TailwindCSS', 'WordPress', 'Docker', 'OpenLightSpeed'] as chip (chip)}
						<code
							class="rounded-full border px-2 py-1 text-xs font-medium text-slate-300/70 lg:px-3 lg:py-1.5"
							>{chip}</code
						>
					{/each}
				</div>
			</li>
		</ul>
	</div>
</section>
