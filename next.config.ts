import createMDX from '@next/mdx';
import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
	output: 'export',
	pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
};

const withMDX = createMDX({
	options: {
		remarkPlugins: [
			'remark-gfm',
			path.join(process.cwd(), 'plugins', 'remark-code-tabs.mjs'),
			'remark-frontmatter',
			['remark-mdx-frontmatter', { name: 'metadata' }],
		],
		rehypePlugins: [
			[
				'rehype-pretty-code',
				{
					theme: {
						light: 'vitesse-light',
						dark: 'vitesse-dark',
					},
				},
			],
		],
	},
});

export default withMDX(nextConfig);
