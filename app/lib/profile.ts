export const projects: IProject[] = [
	{
		name: 'basemark',
		description:
			'AI-first markdown built on remark directives, rendered as framework-agnostic web components',
		href: 'https://github.com/vilas-gannaram/basemark',
	},
	{
		name: 'Lynkr',
		description:
			'A URL shortener in Go, server-rendered with Go templates and sqlc',
		href: 'https://github.com/vilas-gannaram/Lynkr',
	},
	{
		name: 'GeneLens',
		description: 'Chrome extension to look up gene symbols on any page',
		href: 'https://github.com/vilas-gannaram/GeneLens',
	},
];

export const experience: IExperience[] = [
	{
		company: 'Aganitha AI',
		href: 'http://www.aganitha.ai',
		role: 'Fullstack Developer',
		period: 'March 2023 – Present',
	},
];

export interface IProject {
	name: string;
	description: string;
	href: string;
}

export interface IExperience {
	company: string;
	href: string;
	role: string;
	period: string;
}
