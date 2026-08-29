import { siteName, siteUrl, socialLinks } from '../lib/site';

export default function StructuredData() {
	const data = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Person',
				name: siteName,
				url: siteUrl,
				jobTitle: 'Software Engineer',
				sameAs: [socialLinks.github, socialLinks.linkedin],
			},
			{
				'@type': 'WebSite',
				name: siteName,
				url: siteUrl,
			},
		],
	};

	return (
		<script
			type='application/ld+json'
			dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
		/>
	);
}
