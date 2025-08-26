import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import { mdsvex, escapeSvelte } from 'mdsvex';
import { createHighlighter } from 'shiki';

import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],

	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await createHighlighter({
				themes: ['vitesse-light', 'vitesse-dark'],
				langs: ['docker', 'dockerfile', 'bash', 'go', 'json'],
				bg: 'transparent'
			});
			await highlighter.loadLanguage('javascript', 'typescript', 'yaml');
			const html = escapeSvelte(
				highlighter.codeToHtml(code, {
					lang,
					themes: {
						light: 'vitesse-light',
						dark: 'vitesse-dark'
					}
				})
			);
			return `{@html \`${html}\` }`;
		}
	},
	remarkPlugins: [remarkGfm],
	rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	kit: {
		adapter: adapter()
	}
};

export default config;
