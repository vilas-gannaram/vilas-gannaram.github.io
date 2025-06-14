// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};

declare module '*.md' {
	import type { SvelteComponent } from 'svelte';

	export const metadata: BlogFrontmatter;

	export default class Comp extends SvelteComponent {}
}
