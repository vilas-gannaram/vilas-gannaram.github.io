'use client';

import { useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeColorSync() {
	const { resolvedTheme } = useTheme();

	useEffect(() => {
		if (!resolvedTheme) return;

		// Runs as a child effect of ThemeProvider, which fires before
		// ThemeProvider's own effect applies the .dark class — defer to
		// the next frame so the class change has already landed.
		const id = requestAnimationFrame(() => {
			const meta = document.querySelector('meta[name="theme-color"]');
			if (!meta) return;

			const background = getComputedStyle(document.documentElement)
				.getPropertyValue('--background')
				.trim();
			if (background) meta.setAttribute('content', background);
		});

		return () => cancelAnimationFrame(id);
	}, [resolvedTheme]);

	return null;
}
