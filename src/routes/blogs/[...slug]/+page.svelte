<script lang="ts">
	export let data;
	const { post } = data;
</script>

<article class="prose md:prose-lg mx-auto">
	<h1>{post.title}</h1>
	<small>{post.date}</small>
	<p>{post.excerpt}</p>

	<!-- Render actual MDsvex compiled content -->
	<svelte:component this={post.component} />
</article>
