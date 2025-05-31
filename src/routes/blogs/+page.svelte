<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<h1>Blogs listing page</h1>

<ul>
	{#each data.posts.slice(0, 5) as post}
		<li>
			<a href={`/blogs/${post.slug}`}>
				{post.metadata?.title}
			</a>
			{#if post.metadata.date}
				<small> — {post.metadata.date}</small>
			{/if}
		</li>
	{/each}
</ul>
