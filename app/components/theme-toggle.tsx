'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
	const { resolvedTheme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return <div className='size-7 rounded-none border border-border' aria-hidden />;
	}

	const isDark = resolvedTheme === 'dark';

	return (
		<button
			type='button'
			onClick={() => setTheme(isDark ? 'light' : 'dark')}
			aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
			className='flex size-7 items-center justify-center rounded-none border border-border'
		>
			{isDark ? <MoonIcon /> : <SunIcon />}
		</button>
	);
}

function SunIcon() {
	return (
		<svg
			width='16'
			height='16'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<circle cx='12' cy='12' r='4' />
			<path d='M12 2v2' />
			<path d='M12 20v2' />
			<path d='M4.93 4.93l1.41 1.41' />
			<path d='M17.66 17.66l1.41 1.41' />
			<path d='M2 12h2' />
			<path d='M20 12h2' />
			<path d='M6.34 17.66l-1.41 1.41' />
			<path d='M19.07 4.93l-1.41 1.41' />
		</svg>
	);
}

function MoonIcon() {
	return (
		<svg
			width='16'
			height='16'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z' />
		</svg>
	);
}
