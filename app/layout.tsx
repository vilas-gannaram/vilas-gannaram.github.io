import { Onest, Geist_Mono, Instrument_Serif } from 'next/font/google';
import type { Metadata, Viewport } from 'next';

import Header from './components/header';
import Footer from './components/footer';
import './globals.css';

const onestSans = Onest({
	variable: '--font-onest-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

const instrumentSerif = Instrument_Serif({
	variable: '--font-instrument-serif',
	subsets: ['latin'],
	weight: '400',
	style: 'italic',
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
			className={`${onestSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
		>
			<body className='antialiased max-w-xl mx-4 mt-8 lg:mx-auto'>
				<main className='flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0'>
					<Header />
					{children}
					<Footer />
				</main>
			</body>
		</html>
	);
}
