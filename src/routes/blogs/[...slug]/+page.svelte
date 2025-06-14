<script lang="ts">
	export let data;
	const { post } = data;
</script>

<svelte:component this={post.component} />
