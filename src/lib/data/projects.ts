import { Github, Globe } from '@lucide/svelte';

const PROJECTS = [
	{
		title: 'URL Shortener',
		href: 'https://url-shortener-vert-xi.vercel.app/',
		dates: 'Jan 2024 - Feb 2024',
		active: true,
		description:
			'A URL shortener is a web application that allows users to shorten long URLs into shorter, more manageable links. It is a useful tool for sharing links on social media, in emails, or in any situation where long URLs are cumbersome.',
		technologies: [
			'Go',
			'Chi',
			'sqlc',
			'PostgreSQL',
			'React.js',
			'TailwindCSS',
			'Daisy UI',
			'Supabase',
			'Render',
		],
		links: [
			{
				type: 'Website',
				href: 'https://url-shortener-vert-xi.vercel.app/',
				icon: Globe
			},
			{
				type: 'Source',
				href: 'https://github.com/vilas-gannaram/url-shortener',
				icon: Github
			}
		],
		image:
			'https://raw.githubusercontent.com/vilas-gannaram/url-shortener/refs/heads/main/images/home-page.png',
		video: ''
	}
];

export default PROJECTS;
