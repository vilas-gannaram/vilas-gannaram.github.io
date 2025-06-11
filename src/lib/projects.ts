export const projects = [
	{
		title: 'Corporate Website',
		description:
			"A complete redesign and platform migration for Aganitha's public-facing site. Started with a static build and later transitioned to a CMS-powered deployment.",
		keyPoints: [
			'Initially built with 11ty, Nunjucks, and TailwindCSS v2',
			'Migrated to WordPress using Elementor for content updates',
			'Dockerized deployment setup for staging and production'
		],
		tools: ['11ty', 'Nunjucks', 'TailwindCSS', 'WordPress', 'Docker']
	},
	{
		title: 'Burden Reports (<i>23andMe</i>)',
		description:
			'A dashboard tool for exploring gene, phenotype, and variant burden data. I worked on UI implementation and data visualization.',
		keyPoints: [
			'Created plots using Plotly and D3.js',
			'Built dynamic tables for variant-level insights',
			'Worked from Figma wireframes to final UI build'
		],
		tools: ['ReactJS', 'Plotly.js', 'D3.js', 'Figma']
	},
	{
		title: 'Genome Browser (<i>23andMe</i>)',
		description:
			'An internal genome exploration tool developed using SvelteKit. I was responsible for the frontend structure, routing, and page logic.',
		keyPoints: [
			'Designed UI for browsing genome slices',
			'Collaborated with backend and domain experts for data rendering'
		],
		tools: ['SvelteKit', 'REST APIs', 'TailwindCSS']
	},
	{
		title: 'Target Dossier (Static Version)',
		description:
			'A static React app to demo research data on targets such as genes or diseases. Includes Cytoscape-based visual network and JSON view.',
		keyPoints: [
			'Switched to static JSON blobs for UI rendering',
			'Built interactive Cytoscape network: add/remove nodes, connect edges',
			'Implemented detail viewer for selected node metadata'
		],
		tools: ['ReactJS', 'Cytoscape.js', 'Plotly.js', 'JSONViewer']
	},
	{
		title: 'Igniva (WIP)',
		description:
			'An internal LLM-powered platform leveraging Google ADK to explore biomedical metadata. I focus on rendering MDX content with custom components.',
		keyPoints: [
			'Developed MDX rendering system for LLM streaming output',
			'Built components like AGTable, MolstarViewer, and PlotlyChart'
		],
		tools: ['Next.js', 'Google ADK', 'MDX', 'TailwindCSS', 'Plotly', 'Mol*']
	},
	{
		title: 'CynoDB (<i>for NCBS</i>)',
		description:
			'A research-focused protein database for cyanobacteria. I contributed to building pages that display protein, domain, and family-level information.',
		keyPoints: [
			'Developed paginated tables and filterable lists',
			'Helped implement detail views for protein structure and lineage'
		],
		tools: ['ReactJS', 'Material UI', 'GraphQL API']
	},
	{
		title: 'Odor Informatics',
		description:
			'A compact React app for exploring odor-related chemical patents. Built a dual-pane interface to display patent PDFs and enable chemical data editing.',
		keyPoints: [
			'Integrated PDF viewer for reading patent documents',
			'Built side panel for editing compound metadata alongside PDF'
		],
		tools: ['ReactJS', 'PDF.js', 'TailwindCSS']
	},
	{
		title: 'Entity Search (Internal)',
		description:
			'A reusable React component for autocomplete/search of biological entities like genes or phenotypes. Published to Aganitha’s internal UI library.',
		keyPoints: [
			'Focused on UI interaction and search dropdown behavior',
			'Integrated with internal APIs developed by team members'
		],
		tools: ['ReactJS', 'TailwindCSS']
	}
];
