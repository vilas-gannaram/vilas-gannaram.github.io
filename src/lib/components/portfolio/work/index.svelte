<script lang="ts">
	import Card from './card.svelte';
	import WorkExperience from '$lib/data/work-experience';
</script>

<ul class="mt-8 space-y-4">
	{#each [...WorkExperience].reverse() as item, index (index)}
		<li>
			<Card
				href={item.href}
				company={item.company}
				title={item.role}
				start={item.start}
				end={item.end}
				description={item.description}
			/>
		</li>
	{/each}
</ul>
