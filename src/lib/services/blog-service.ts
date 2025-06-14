import type { SvelteComponent } from 'svelte';
import type { IBlogPost, BlogFrontmatter } from '$lib/types';

const postFiles = import.meta.glob('/src/posts/**/*.md');

const slugMap: Record<
	string,
	() => Promise<{ metadata: BlogFrontmatter; default: typeof SvelteComponent }>
> = {};

for (const path in postFiles) {
	const slug = path.replace('/src/posts/', '').replace('.md', '');

	slugMap[slug] = postFiles[path] as () => Promise<{
		metadata: BlogFrontmatter;
		default: typeof SvelteComponent;
	}>;
}

// Transform function to normalize blog post objects
function transformPost(
	slug: string,
	post: { metadata: BlogFrontmatter; default: typeof SvelteComponent }
): IBlogPost {
	return {
		slug,
		component: post.default,
		metadata: post.metadata
	};
}

/**
 * Get all blog posts metadata (for blog listing)
 */
export async function getAllPosts(): Promise<IBlogPost[]> {
	const posts = await Promise.all(
		Object.entries(slugMap).map(async ([slug, resolver]) => {
			const post = await resolver();
			return transformPost(slug, post);
		})
	);

	// Optional: Filter out drafts
	const publishedPosts = posts.filter((post) => !post.metadata.draft);

	// Sort by date descending
	return publishedPosts.sort((a, b) =>
		a.metadata.date! < b.metadata.date! ? 1 : -1
	);
}

/**
 * Get a single blog post by slug
 */
export async function getPostBySlug(slug: string): Promise<IBlogPost | null> {
	const resolver = slugMap[slug];

	if (!resolver) {
		return null;
	}

	const post = await resolver();
	return transformPost(slug, post);
}