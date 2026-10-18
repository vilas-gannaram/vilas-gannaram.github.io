import fs from 'fs';
import path from 'path';
import type { ComponentType } from 'react';

const contentDir = path.join(process.cwd(), 'content');
const includeDrafts = process.env.NODE_ENV !== 'production';
const WORDS_PER_MINUTE = 200;

const difficultyOrder: Record<TDifficulty, number> = {
	easy: 0,
	medium: 1,
	hard: 2,
};

const topicTitles: Record<string, string> = {
	'arrays-hashing': 'Arrays & Hashing',
	'two-pointers': 'Two Pointers',
	'sliding-window': 'Sliding Window',
	stack: 'Stack',
	'binary-search': 'Binary Search',
	'linked-list': 'Linked List',
};

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

function getReadingTime(section: TSection, slug: string[]) {
	const raw = fs.readFileSync(
		path.join(contentDir, section, ...slug, 'index.mdx'),
		'utf8'
	);
	const body = raw.replace(/^---[\s\S]*?---/, '');
	const words = body.trim().split(/\s+/).filter(Boolean).length;
	return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

export async function getPost(section: TSection, slug: string[]) {
	try {
		const mod = (await import(
			`../../content/${section}/${slug.join('/')}/index.mdx`
		)) as IPostModule;
		if (mod.metadata.draft && !includeDrafts) return null;

		return {
			...mod,
			section,
			slug,
			readingTime: getReadingTime(section, slug),
		};
	} catch {
		return null;
	}
}

export async function getPosts(section: TSection) {
	const slugs = walk(path.join(contentDir, section));
	const posts = await Promise.all(slugs.map((slug) => getPost(section, slug)));

	return posts
		.filter((post): post is NonNullable<typeof post> => post !== null)
		.sort(
			(a, b) =>
				new Date(b.metadata.publishedAt).getTime() -
				new Date(a.metadata.publishedAt).getTime()
		);
}

export async function getAllPosts() {
	const [blog, dsa] = await Promise.all([getPosts('blog'), getPosts('dsa')]);
	return [...blog, ...dsa];
}

export async function getRecentPosts(limit: number) {
	const posts = await getAllPosts();

	return posts
		.sort(
			(a, b) =>
				new Date(b.metadata.publishedAt).getTime() -
				new Date(a.metadata.publishedAt).getTime()
		)
		.slice(0, limit);
}

export async function getPostSlugs(section: TSection) {
	const posts = await getPosts(section);
	return posts.map((post) => post.slug);
}

export async function getDsaTopics() {
	const posts = await getPosts('dsa');
	const byTopic = new Map<string, typeof posts>();

	for (const post of posts) {
		const topic = post.slug[0];
		byTopic.set(topic, [...(byTopic.get(topic) ?? []), post]);
	}

	return [...byTopic.entries()]
		.map(([topic, topicPosts]) => ({
			topic,
			title: getTopicTitle(topic),
			posts: topicPosts.sort(
				(a, b) =>
					difficultyOrder[a.metadata.difficulty ?? 'easy'] -
					difficultyOrder[b.metadata.difficulty ?? 'easy']
			),
		}))
		.sort((a, b) => a.title.localeCompare(b.title));
}

export function getPostHref(section: TSection, slug: string[]) {
	return `/${section}/${slug.join('/')}`;
}

export function getTopicTitle(topic: string) {
	return (
		topicTitles[topic] ??
		topic.replace(/-/g, ' ').replace(/^\w/, (c) => c.toUpperCase())
	);
}

export function formatDate(date: string) {
	return new Date(`${date}T00:00:00`).toLocaleString('en-us', {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
	});
}

export type TSection = 'blog' | 'dsa';
export type TDifficulty = 'easy' | 'medium' | 'hard';

export interface IPostMetadata {
	title: string;
	publishedAt: string;
	summary: string;
	updatedAt?: string;
	tags?: string[];
	difficulty?: TDifficulty;
	draft?: boolean;
}

interface IPostModule {
	default: ComponentType;
	metadata: IPostMetadata;
}
