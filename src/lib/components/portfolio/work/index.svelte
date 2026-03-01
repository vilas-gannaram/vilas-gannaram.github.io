<script lang="ts">
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { writable } from 'svelte/store';

	type TWorkTimelineItem = {
		company: string;
		role: string;
		startDate: string;
		endDate: string;
		content: {
			description?: string;
			responsibilities: string[];
			images?: string[];
		};
	};

	let containerRef: HTMLDivElement;
	let height = 0;
	let scrollProgress = writable(0);
	let heightTransform = tweened(0, { duration: 400, easing: cubicOut });
	let opacityTransform = tweened(0, { duration: 400, easing: cubicOut });

	onMount(() => {
		if (containerRef) {
			const rect = containerRef.getBoundingClientRect();
			height = rect.height;
		}

		let onScroll = () => {
			const rect = containerRef.getBoundingClientRect();
			const windowHeight = window.innerHeight;
			let progress = Math.min(
				1,
				Math.max(0, (windowHeight - rect.top) / (windowHeight + rect.height))
			);
			progress = progress < 0.6 ? progress - 0.09 : progress - 0.004;
			scrollProgress.set(progress);
		};

		window.addEventListener('scroll', onScroll);

		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	});

	$: scrollProgress.subscribe((progress) => {
		heightTransform.set(progress * height);
		opacityTransform.set(progress < 0.1 ? progress * 10 : 1);
	});

	let timelineData: TWorkTimelineItem[] = [
		{
			company: 'Aganitha AI',
			role: 'Software Engineer Intern',
			startDate: 'March 2023',
			endDate: 'Sept. 2023',
			content: {
				responsibilities: [
					'Migrated corporate infrastructure from JAMStack to WordPress, reducing content update turnaround time by 50%.',
					'Engineered containerized Docker deployments and improved performance benchmarks to A+ (GTmetrix).'
				]
			}
		},

		{
			company: 'Aganitha AI',
			role: 'Associate Software Engineer I',
			startDate: 'Sept. 2023',
			endDate: 'Aug. 2024',
			content: {
				responsibilities: [
					'Built high-performance genomic data exploration tools enabling real-time visualization of multi-million row datasets.',
					'Developed Burden Reports using React + Hasura (GraphQL) with server-side pagination and structured querying for scalable analytics.',
					'Improved rare-variant discovery workflows by optimizing data accessibility for thousands of researchers.'
				]
			}
		},

		{
			company: 'Aganitha AI',
			role: 'Associate Software Engineer II',
			startDate: 'Aug. 2024',
			endDate: 'Sept. 2025',
			content: {
				responsibilities: [
					'Optimized rendering pipelines for complex visualizations (50k+ data points), achieving sub-second UI responsiveness and increasing researcher productivity by 35%.',
					'Adapted and modularized the FinnGen PheWeb UI to support client-specific data models, redesigning queries and visualization logic while reducing dashboard latency by 20%',
					'Architected a DuckDB-backed Genome Browser by modernizing open-source gnomAD logic, significantly improving high-volume sequence exploration performance.'
				]
			}
		},

		{
			company: 'Aganitha AI',
			role: 'Software Engineer',
			startDate: 'Sept. 2025',
			endDate: 'Present',
			content: {
				responsibilities: [
					'Designed and built a federated Next.js platform integrating 13 bioinformatics agents into a unified workflow interface.',
					'Engineered an SSE streaming pipeline with token reconciliation for real-time LLM workflows and seamless multi-day session persistence.',
					'Developed a modular SDK + component architecture (OpenAPI, Shadcn/UI, MDX), reducing frontend feature delivery time by 25%.'
				]
			}
		}
	];
</script>

<div class="w-full" bind:this={containerRef}>
	<div class="relative mx-auto max-w-7xl overflow-hidden pb-20">
		{#each timelineData as item, index (index)}
			<div class="flex justify-start pt-10 md:gap-10 md:pt-40">
				<div
					class="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm"
				>
					<div
						class="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-white md:left-3 dark:bg-black"
					>
						<div
							class="h-4 w-4 rounded-full border border-neutral-300 bg-neutral-200 p-2 dark:border-neutral-700 dark:bg-neutral-800"
						></div>
					</div>
					<h3
						class="hidden text-xl font-bold text-neutral-500 md:block md:pl-20 md:text-2xl dark:text-neutral-500"
					>
						{item.role}
					</h3>
				</div>

				<div class="relative w-full pr-4 pl-20 md:pl-4">
					<h3
						class="mb-4 block text-left text-xl font-bold text-neutral-500 md:hidden dark:text-neutral-400"
					>
						{item.role}
					</h3>

					<div class="text-muted-foreground mt-2 w-full text-sm md:mt-1.5">
						<ul class="space-y-2">
							{#each item.content.responsibilities as responsibility, idx (idx)}
								<li>{responsibility}</li>
							{/each}
						</ul>
					</div>
				</div>
			</div>
		{/each}

		<div
			style="height: {height}px;"
			class="timeline-line absolute top-0 left-8 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] md:left-8 dark:via-neutral-700"
		>
			<div
				style="height: {$heightTransform}px; opacity: {$opacityTransform};"
				class="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-purple-500 from-[0%] via-blue-500 via-[10%] to-transparent"
			></div>
		</div>
	</div>
</div>

<style>
	.timeline-line {
		mask-image: linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%);
	}
</style>
