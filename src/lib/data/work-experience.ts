import AganithaLogo from '$lib/imgs/aganitha.svg';

const WorkExperience = [
	{
		company: 'Aganitha AI',
		logoUrl: AganithaLogo,
		href: 'https://aganitha.ai',
		role: 'Web Developer Intern',
		start: 'Mar. 2023',
		end: 'Sept. 2023',
		description:
			'Migrated corporate infrastructure from JAMStack to WordPress, reducing content update turnaround time by 50%. Engineered containerized Docker deployments and improved performance benchmarks to A+ (GTmetrix).'
	},
	{
		company: 'Aganitha AI',
		logoUrl: AganithaLogo,
		href: 'https://aganitha.ai',
		role: 'Jr. Web Developer I',
		start: 'Sept. 2023',
		end: 'Aug. 2024',
		description:
			'Built high-performance genomic data exploration tools enabling real-time visualization of multi-million row datasets. Developed Burden Reports using React + Hasura (GraphQL) with server-side pagination and structured querying for scalable analytics. Improved rare-variant discovery workflows by optimizing data accessibility for thousands of researchers.'
	},
	{
		company: 'Aganitha AI',
		logoUrl: AganithaLogo,
		href: 'https://aganitha.ai',
		role: 'Jr. Web Developer II',
		start: 'Aug. 2024',
		end: 'Sept. 2025',
		description:
			'Optimized rendering pipelines for complex visualizations (50k+ data points), achieving sub-second UI responsiveness and increasing researcher productivity by 35%. Adapted and modularized the FinnGen PheWeb UI to support client-specific data models, redesigning queries and visualization logic while reducing dashboard latency by 20%. Architected a DuckDB-backed Genome Browser by modernizing open-source gnomAD logic, significantly improving high-volume sequence exploration performance.'
	},
	{
		company: 'Aganitha AI',
		logoUrl: AganithaLogo,
		href: 'https://aganitha.ai',
		role: 'Web Developer I',
		start: 'Sept. 2025',
		end: 'Present',
		description:
			'Right now, I’m working on a system that brings together multiple bioinformatics agents into a single interface. A big part of my work has been making LLM outputs actually usable in the product—things like genomic plots and structured data. I built a markdown-based rendering system to make those outputs predictable and easier to work with, which helped a lot with reliability. I’ve also worked on streaming responses in real time and making sure sessions persist properly. Along the way, I’ve been focusing more on how these pieces fit together as a system, not just as isolated features.'
	}
];

export default WorkExperience;
