import fs from 'fs';
import path from 'path';
import type { ComponentType } from 'react';

export type PostMetadata = {
	title: string;
	publishedAt: string;
	summary: string;
	updatedAt?: string;
	tags?: string[];
	draft?: boolean;
};

const postsDir = path.join(process.cwd(), 'app', 'blog', 'posts');
const includeDrafts = process.env.NODE_ENV !== 'production';
const WORDS_PER_MINUTE = 200;

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

function getAllSlugs() {
	return walk(postsDir);
}

function getReadingTime(slug: string[]) {
	const raw = fs.readFileSync(
		path.join(postsDir, ...slug, 'index.mdx'),
		'utf8'
	);
	const body = raw.replace(/^---[\s\S]*?---/, '');
	const words = body.trim().split(/\s+/).filter(Boolean).length;
	return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

export async function getPost(slug: string[]) {
	try {
		const mod = (await import(`../blog/posts/${slug.join('/')}/index.mdx`)) as {
			default: ComponentType;
			metadata: PostMetadata;
		};
		if (mod.metadata.draft && !includeDrafts) return null;

		return {
			...mod,
			slug,
			readingTime: getReadingTime(slug),
		};
	} catch {
		return null;
	}
}

export async function getBlogPosts() {
	const slugs = getAllSlugs();

	const posts = await Promise.all(slugs.map((slug) => getPost(slug)));

	return posts
		.filter((post): post is NonNullable<typeof post> => post !== null)
		.sort(
			(a, b) =>
				new Date(b.metadata.publishedAt).getTime() -
				new Date(a.metadata.publishedAt).getTime()
		);
}

export async function getPostSlugs() {
	const posts = await getBlogPosts();
	return posts.map((post) => post.slug);
}

export function formatDate(date: string) {
	return new Date(`${date}T00:00:00`).toLocaleString('en-us', {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
	});
}
