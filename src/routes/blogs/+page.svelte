<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<h1>Blog Posts</h1>

<ul>
	{#each data.posts as post (post.slug)}
		<li>
			<a href={`/blogs/${post.slug}`}>
				<h2>{post.metadata.title}</h2>
				<p>{post.metadata.description}</p>
				<small>{post.metadata.date}</small>
			</a>
		</li>
	{/each}
</ul>
