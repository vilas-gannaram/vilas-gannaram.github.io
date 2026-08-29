import fs from 'fs';
import path from 'path';

export type PostMetadata = {
	title: string;
	publishedAt: string;
	summary: string;
};

const postsDir = path.join(process.cwd(), 'app', 'blog', 'posts');

function walk(dir: string, segments: string[] = []): string[][] {
	const entries = fs.readdirSync(dir, { withFileTypes: true });
	const slugs: string[][] = [];

	if (entries.some((entry) => entry.isFile() && entry.name === 'index.mdx')) {
		slugs.push(segments);
	}

	for (const entry of entries) {
		if (entry.isDirectory()) {
			slugs.push(...walk(path.join(dir, entry.name), [...segments, entry.name]));
		}
	}

	return slugs;
}

export function getPostSlugs() {
	return walk(postsDir);
}

export async function getBlogPosts() {
	const slugs = getPostSlugs();

	const posts = await Promise.all(
		slugs.map(async (slug) => {
			const { metadata } = (await import(
				`../blog/posts/${slug.join('/')}/index.mdx`
			)) as { metadata: PostMetadata };
			return { slug, metadata };
		})
	);

	return posts.sort(
		(a, b) =>
			new Date(b.metadata.publishedAt).getTime() -
			new Date(a.metadata.publishedAt).getTime()
	);
}

export function formatDate(date: string) {
	return new Date(`${date}T00:00:00`).toLocaleString('en-us', {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
	});
}
