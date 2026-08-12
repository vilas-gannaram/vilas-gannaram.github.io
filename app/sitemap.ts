import { getBlogPosts } from './blog/get-posts';

export const baseUrl = 'https://vilas-gannaram.github.io';

export const dynamic = 'force-static';

export default async function sitemap() {
	const posts = await getBlogPosts();
	const postEntries = posts.map((post) => ({
		url: `${baseUrl}/blog/${post.slug}`,
		lastModified: post.metadata.publishedAt,
	}));

	const routes = ['', '/blog'].map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date().toISOString().split('T')[0],
	}));

	return [...routes, ...postEntries];
}
