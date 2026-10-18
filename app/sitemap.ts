import { siteUrl } from '@/app/lib/site';

export const dynamic = 'force-static';

// Blog and DSA pages are noindex (see app/blog/layout.tsx and
// app/dsa/layout.tsx), so only the home page is listed.
export default function sitemap() {
	return [
		{
			url: siteUrl,
			lastModified: new Date().toISOString().split('T')[0],
		},
	];
}
