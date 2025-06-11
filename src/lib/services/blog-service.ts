import type { SvelteComponent } from 'svelte';

export interface IBlogPost {
	slug: string;
	title: string;
	date: string;
	excerpt: string;
	tags?: string[];
	component: typeof SvelteComponent;
}

const postFiles = import.meta.glob('/src/posts/**/*.md');

// Build slug map ONCE at startup
const slugMap: Record<string, () => Promise<unknown>> = {};

for (const path in postFiles) {
	const slug = path.replace('/src/posts/', '').replace('.md', '');

	slugMap[slug] = postFiles[path];
}

/**
 * Get all blog posts metadata (for listing page)
 */
export async function getAllPosts(): Promise<IBlogPost[]> {
	const posts = await Promise.all(
		Object.entries(slugMap).map(async ([slug, resolver]) => {
			const post: any = await resolver();

			return {
				slug,
				title: post.metadata.title,
				date: post.metadata.date,
				excerpt: post.metadata.excerpt,
				tags: post.metadata.tags || [],
				component: post.default
			};
		})
	);

	return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

/**
 * Get single post by slug
 */
export async function getPostBySlug(slug: string): Promise<IBlogPost | null> {
	const resolver = slugMap[slug];

	if (!resolver) {
		return null;
	}

	const post: any = await resolver();

	return {
		slug,
		title: post.metadata.title,
		date: post.metadata.date,
		excerpt: post.metadata.excerpt,
		tags: post.metadata.tags || [],
		component: post.default
	};
}
