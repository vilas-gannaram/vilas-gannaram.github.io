import type { MDXComponents } from 'mdx/types';

const components: MDXComponents = {
	wrapper: ({ children }) => <section>{children}</section>,
};

export function useMDXComponents(): MDXComponents {
	return components;
}
