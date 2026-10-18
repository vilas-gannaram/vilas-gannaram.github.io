import { siteUrl } from '@/app/lib/site';

export const dynamic = 'force-static';

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
