import { getAllPosts, getPostHref } from './lib/posts';
import { siteUrl } from './lib/site';

export const dynamic = 'force-static';

export default async function sitemap() {
	const posts = await getAllPosts();
	const postEntries = posts.map((post) => ({
		url: `${siteUrl}${getPostHref(post.section, post.slug)}`,
		lastModified: post.metadata.updatedAt ?? post.metadata.publishedAt,
	}));

	const routes = ['', '/blog', '/dsa'].map((route) => ({
		url: `${siteUrl}${route}`,
		lastModified: new Date().toISOString().split('T')[0],
	}));

	return [...routes, ...postEntries];
}
