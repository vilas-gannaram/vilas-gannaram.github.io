<script lang="ts">
	export let data;
	const { post } = data;
</script>

<article>
	<h1>{post.metadata.title}</h1>
	<small>{post.metadata.date}</small>
	<p>{post.metadata.description}</p>

	<!-- Render actual MDsvex compiled content -->
	<svelte:component this={post.component} />
</article>
