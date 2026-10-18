import type { Metadata, Viewport } from 'next';
import { ThemeProvider } from 'next-themes';

import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import StructuredData from '@/app/components/structured-data';
import ThemeColorSync from '@/app/components/theme-color-sync';
import { googleSansFlex, geistMono, styleScript } from '@/app/lib/fonts';
import { siteDescription, siteName, siteTitle, siteUrl } from '@/app/lib/site';
import './globals.css';

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: siteTitle,
	description: siteDescription,
	openGraph: {
		title: siteTitle,
		description: siteDescription,
		url: siteUrl,
		siteName,
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: siteTitle,
		description: siteDescription,
	},
};

export const viewport: Viewport = {
	themeColor: '#0a0a0a',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
	return (
		<html
			lang='en'
			className={`${googleSansFlex.variable} ${geistMono.variable} ${styleScript.variable} h-full antialiased`}
			suppressHydrationWarning
		>
			<body
				className='antialiased mt-8 typeset typeset-docs'
				suppressHydrationWarning
			>
				<StructuredData />
				<ThemeProvider attribute='class' defaultTheme='dark'>
					<ThemeColorSync />
					<Header />

					<main className='flex-auto min-w-0 mt-6 flex flex-col px-6 max-w-[37em] mx-auto'>
						{children}
						<Footer />
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
