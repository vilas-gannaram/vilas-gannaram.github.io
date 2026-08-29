import { Google_Sans_Flex, Geist_Mono, Style_Script } from 'next/font/google';

export const googleSansFlex = Google_Sans_Flex({
	variable: '--font-google-sans-flex',
	subsets: ['latin'],
});

export const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const styleScript = Style_Script({
	variable: '--font-style-script',
	subsets: ['latin'],
	weight: '400',
});
