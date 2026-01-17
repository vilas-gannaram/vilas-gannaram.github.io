<section id="experience" class="observe my-32 min-h-svh scroll-mt-18">
	<h3 class="my-8 text-sm font-semibold uppercase lg:hidden">Experience</h3>

	<div class="">
		<h4>Web Developer | Aganitha Cognitive Solutions</h4>
		<p class="mt-2 text-sm italic">Hyderabad, India | 2023 – Present</p>

		<p class="mt-3">
			I joined as an intern and grew into a Web Developer I role, contributing to production systems
			as well as internal tools, research prototypes, and demo applications. Below are selected
			projects:
		</p>

		<div class="mt-8 space-y-8">
			<!-- Aganitha's Corp. website -->
			<div class="space-y-3">
				<h5>Corporate Website Maintenance & Migration</h5>
				<p>
					Maintained and extended a <span class="text-slate-300">JAMstack</span>-based public-facing
					website by adding new pages and handling ongoing content updates, then migrated it to a
					<span class="text-slate-300">WordPress</span>-backed CMS while collaborating with the
					business team to improve content workflows.
				</p>

				<div class="mt-4 flex flex-wrap gap-2">
					{#each ['11ty', 'TailwindCSS', 'WordPress', 'Docker', 'OpenLightSpeed'] as chip (chip)}
						<code class="rounded-full border px-2 py-1 text-xs lg:px-3 lg:py-1.5">{chip}</code>
					{/each}
				</div>
			</div>

			<!-- TTAM Research Reports -->
			<div class="space-y-3">
				<h5>TTAM Research Data Reports</h5>
				<p>
					Worked on a suite of data exploration applications, Including <span class="text-slate-300"
						>Burden Reports</span
					>, <span class="text-slate-300">Genome Browser</span> building a data-intensive analytics
					dashboard, extending an existing open-source
					<span class="text-slate-300">(Fingen pheWeb)</span> data exploration platform for custom workflows
				</p>

				<div class="mt-4 flex flex-wrap gap-2">
					{#each ['ReactJS', 'SvelteKit', 'TailwindCSS', 'Hasura', 'GraphQL', 'Apollo client', 'D3.js', 'Plotly.js'] as chip (chip)}
						<code class="rounded-full border px-2 py-1 text-xs lg:px-3 lg:py-1.5">{chip}</code>
					{/each}
				</div>
			</div>

			<!-- Aganitha's Igniva Product -->
			<div class="space-y-3">
				<h5>Igniva - Platform Core</h5>
				<p>
					Built the <span class="text-slate-300"> chat-style UI </span> for an internal LLM-powered
					platform exploring biomedical metadata. Designed and implemented
					<span class="text-slate-300">MDX-based interactive components</span> that agents can render,
					enabling rich data visualizations and custom workflows. Owned the end-to-end frontend experience
					across multiple agents.
				</p>

				<div class="mt-4 flex flex-wrap gap-2">
					{#each ['Next.js', 'MDX', 'Zustand', 'TailwindCSS', 'Plotly.js'] as chip (chip)}
						<code class="rounded-full border px-2 py-1 text-xs lg:px-3 lg:py-1.5">{chip}</code>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
