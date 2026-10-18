import type { MDXComponents } from 'mdx/types';
import CodeTabs from '@/app/components/code-tabs';

const components: MDXComponents = {
	wrapper: ({ children }) => <section>{children}</section>,
	CodeTabs,
};

export function useMDXComponents(): MDXComponents {
	return components;
}
