'use client';

import { useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeColorSync() {
	const { resolvedTheme } = useTheme();

	useEffect(() => {
		if (!resolvedTheme) return;

		const meta = document.querySelector('meta[name="theme-color"]');
		if (!meta) return;

		const background = getComputedStyle(document.documentElement)
			.getPropertyValue('--background')
			.trim();
		if (background) meta.setAttribute('content', background);
	}, [resolvedTheme]);

	return null;
}
