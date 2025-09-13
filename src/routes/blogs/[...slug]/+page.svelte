<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const { post } = data;
</script>

<div id="blog-wrapper" class="mb-16">
	<section>
		<div class="mx-auto max-w-[1140px] px-4 pt-12 md:pt-16 lg:px-6">
			<h1>{post.metadata.title}</h1>

			<p>{post.metadata.description}</p>

			<p class="font-mono">{post.metadata.date}</p>
		</div>
	</section>

	<section class="mx-auto max-w-[1140px] px-4 lg:px-6">
		<post.component />
	</section>
</div>
