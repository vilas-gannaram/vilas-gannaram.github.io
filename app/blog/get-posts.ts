import fs from 'fs';
import path from 'path';

export type PostMetadata = {
	title: string;
	publishedAt: string;
	summary: string;
};

export async function getBlogPosts() {
	const blogDir = path.join(process.cwd(), 'app', 'blog');
	const slugs = fs
		.readdirSync(blogDir, { withFileTypes: true })
		.filter((entry) => entry.isDirectory())
		.map((entry) => entry.name)
		.filter((slug) => fs.existsSync(path.join(blogDir, slug, 'page.mdx')));

	const posts = await Promise.all(
		slugs.map(async (slug) => {
			const { metadata } = (await import(`./${slug}/page.mdx`)) as {
				metadata: PostMetadata;
			};
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
