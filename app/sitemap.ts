import { getBlogPosts } from './lib/posts';
import { siteUrl } from './lib/site';

export const dynamic = 'force-static';

export default async function sitemap() {
	const posts = await getBlogPosts();
	const postEntries = posts.map((post) => ({
		url: `${siteUrl}/blog/${post.slug.join('/')}`,
		lastModified: post.metadata.updatedAt ?? post.metadata.publishedAt,
	}));

	const routes = ['', '/blog'].map((route) => ({
		url: `${siteUrl}${route}`,
		lastModified: new Date().toISOString().split('T')[0],
	}));

	return [...routes, ...postEntries];
}
