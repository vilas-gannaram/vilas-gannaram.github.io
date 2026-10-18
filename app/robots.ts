import { siteUrl } from '@/app/lib/site';

export const dynamic = 'force-static';

// Don't Disallow /blog or /dsa here: crawlers must be able to fetch those
// pages to see their noindex tag.
export default function robots() {
	return {
		rules: [
			{
				userAgent: '*',
			},
		],
		sitemap: `${siteUrl}/sitemap.xml`,
	};
}
