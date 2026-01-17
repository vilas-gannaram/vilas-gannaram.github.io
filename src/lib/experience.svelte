<section id="experience" class="observe my-32 min-h-svh scroll-mt-18">
	<h3 class="my-8 text-sm font-semibold uppercase lg:hidden">Experience</h3>

	<div>
		<h4>Web Developer | Aganitha Cognitive Solutions</h4>
		<p class="mt-1 text-sm italic">Hyderabad, India | 2023 – Present</p>

		<p class="mt-4">
			I joined as an intern and grew into a Web Developer I role, contributing to production systems
			as well as internal tools, research prototypes, and demo applications. Below are selected
			projects:
		</p>

		<ul class="mt-10 ml-5 list-decimal space-y-10">
			<!-- Aganitha's Corp. website -->
			<li class="space-y-2">
				<h5>Corporate Website Maintenance & Migration</h5>
				<p>
					Maintained and extended a <span class="font-medium text-slate-300">JAMstack</span>-based
					public-facing website by adding new pages and handling ongoing content updates, then
					migrated it to a
					<span class="font-medium text-slate-300">WordPress</span>-backed CMS while collaborating
					with the business team to improve content workflows.
				</p>

				<div class="mt-3 flex flex-wrap gap-2">
					{#each ['11ty', 'TailwindCSS', 'WordPress', 'Docker', 'OpenLightSpeed'] as chip (chip)}
						<code class="rounded-full border px-2 py-1 text-xs font-medium lg:px-3 lg:py-1.5"
							>{chip}</code
						>
					{/each}
				</div>
			</li>

			<!-- TTAM Research Reports -->
			<li class="space-y-2">
				<h5>TTAM Research Data Reports</h5>
				<p>
					Worked on a suite of data exploration applications, Including <span
						class="font-medium text-slate-300">Burden Reports</span
					>, <span class="font-medium text-slate-300">Genome Browser</span> building a
					data-intensive analytics dashboard, extending an existing open-source
					<span class="font-medium text-slate-300">(Fingen pheWeb)</span> data exploration platform for
					custom workflows
				</p>

				<div class="mt-3 flex flex-wrap gap-2">
					{#each ['ReactJS', 'SvelteKit', 'TailwindCSS', 'Hasura', 'GraphQL', 'Apollo client', 'D3.js', 'Plotly.js'] as chip (chip)}
						<code class="rounded-full border px-2 py-1 text-xs font-medium lg:px-3 lg:py-1.5"
							>{chip}</code
						>
					{/each}
				</div>
			</li>

			<!-- Aganitha's Igniva Product -->
			<li class="space-y-2">
				<h5>Igniva - Platform Core</h5>
				<p>
					Built the <span class="font-medium text-slate-300"> chat-style UI </span> for an internal
					LLM-powered platform exploring biomedical metadata. Designed and implemented
					<span class="font-medium text-slate-300">MDX-based interactive components</span> that agents
					can render, enabling rich data visualizations and custom workflows. Owned the end-to-end frontend
					experience across multiple agents.
				</p>

				<div class="mt-3 flex flex-wrap gap-2">
					{#each ['Next.js', 'MDX', 'Zustand', 'TailwindCSS', 'Plotly.js'] as chip (chip)}
						<code class="rounded-full border px-2 py-1 text-xs font-medium lg:px-3 lg:py-1.5"
							>{chip}</code
						>
					{/each}
				</div>
			</li>
		</ul>
	</div>
</section>
