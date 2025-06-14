import type { SvelteComponent } from "svelte";


export interface IBlogPost {
	slug: string;
	component: typeof SvelteComponent;
	metadata: BlogFrontmatter;
}

export interface BaseFrontmatter {
	title: string;
	description?: string;
	date?: string;
	tags?: string[];
	draft?: boolean;
}

export interface BlogFrontmatter extends BaseFrontmatter {
	slug: string;
	coverImage?: string;
	category?: string;
	author?: string;
	readingTime?: number;
	language?: string;
	seoTitle?: string;
	seoDescription?: string;
	// and more as you grow
}