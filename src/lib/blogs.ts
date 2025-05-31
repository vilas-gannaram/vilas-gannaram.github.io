export async function getAllPosts() {
	const modules = import.meta.glob<PostModule>('/src/lib/content/*/*.svx');

	const postPromises = Object.entries(modules)
		.filter(([path]) => /content\/([^/]+)\/([^/]+)\.svx$/.test(path))
		.map(async ([path, resolver]) => {
			const [, category, slug] = path.match(/content\/([^/]+)\/([^/]+)\.svx$/)!;
			const mod = await resolver();

			return {
				slug,
				category,
				metadata: mod.metadata,
				component: mod.default
			};
		});

	const posts = await Promise.all(postPromises);
	return posts.filter(Boolean);
}

interface PostModule {
	metadata: Record<string, any>;
	default: import('svelte').SvelteComponent;
}
