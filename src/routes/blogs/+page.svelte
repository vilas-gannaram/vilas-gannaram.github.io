<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<h1>Blog Posts</h1>

<ul>
	{#each data.posts as post (post.title)}
		<li>
			<a href={`/blogs/${post.slug}`}>
				<h2>{post.title}</h2>
				<p>{post.excerpt}</p>
				<small>{post.date}</small>
			</a>
		</li>
	{/each}
</ul>
