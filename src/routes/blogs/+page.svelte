<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<section class="mx-auto mt-6 max-w-[1140px] px-4">
	<h1 class="text-6xl/tight font-bold">Blog Posts</h1>

	<ul class="mt-8 grid list-none grid-cols-1 gap-4 md:mt-16 md:grid-cols-2">
		{#each data.posts as post (post.slug)}
			<li class="rounded border border-zinc-200 bg-white px-8 py-6">
				<a href={`/blogs/${post.slug}`}>
					<h2 class="mt-0 text-xl border-0 pb-0">{post.metadata.title}</h2>
					<p class="mt-1">{post.metadata.description}</p>
					<small>{post.metadata.date}</small>
				</a>
			</li>
		{/each}
	</ul>
</section>
