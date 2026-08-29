import { Google_Sans_Flex, Geist_Mono, Style_Script } from 'next/font/google';
import type { Metadata, Viewport } from 'next';
import { ThemeProvider } from 'next-themes';

import Header from './components/header';
import Footer from './components/footer';
import './globals.css';

const googleSansFlex = Google_Sans_Flex({
	variable: '--font-google-sans-flex',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

const styleScript = Style_Script({
	variable: '--font-style-script',
	subsets: ['latin'],
	weight: '400',
});

const siteUrl = 'https://vilas-gannaram.github.io';
const title =
	'VILAS GANNARAM | Software Engineer | FullStack Developer | Applied AI';
const description =
	'Portfolio of Vilas Gannaram — Software Engineer building fullstack and applied AI products.';

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title,
	description,
	openGraph: {
		title,
		description,
		url: siteUrl,
		siteName: 'Vilas Gannaram',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title,
		description,
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#ffffff' },
		{ media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
	],
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
	return (
		<html
			lang='en'
			className={`${googleSansFlex.variable} ${geistMono.variable} ${styleScript.variable} h-full antialiased`}
			suppressHydrationWarning
		>
			<body
				className='antialiased px-4 mt-8 mx-auto typeset typeset-docs max-w-[37em]'
				suppressHydrationWarning
			>
				<ThemeProvider attribute='class' defaultTheme='dark'>
					<main className='flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0'>
						<Header />
						{children}
						<Footer />
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
