'use client';

import dynamic from 'next/dynamic';
import type { ISmoothCursorProps } from './cursor';

// Loads the cursor (and `motion`) after the page is interactive, and never on
// the server. `ssr: false` is only allowed in Client Components, which is why
// this wrapper exists instead of importing it in `layout.tsx`.
const Cursor = dynamic(() => import('./cursor'), { ssr: false });

export default function SmoothCursor(props: ISmoothCursorProps) {
	return <Cursor {...props} />;
}
