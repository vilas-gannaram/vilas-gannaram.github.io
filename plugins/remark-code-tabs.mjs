// Groups consecutive fenced code blocks whose meta starts with `[Label]`
// (LeetCode-style) into a single <CodeTabs labels='["Label", ...]'> element.
//
//   ```js [JavaScript]
//   ```python [Python]
//   ```go [Go]
//
// Blocks without a `[Label]` are left untouched.

const LABEL_PATTERN = /^\s*\[([^\]]+)\]\s*(.*)$/;

function parseLabel(node) {
	if (node.type !== 'code' || !node.meta) return null;

	const match = LABEL_PATTERN.exec(node.meta);
	if (!match) return null;

	return { label: match[1].trim(), meta: match[2] };
}

function createCodeTabs(group) {
	const labels = group.map(({ label }) => label);

	return {
		type: 'mdxJsxFlowElement',
		name: 'CodeTabs',
		attributes: [
			{
				type: 'mdxJsxAttribute',
				name: 'labels',
				value: JSON.stringify(labels),
			},
		],
		children: group.map(({ node, meta }) => ({
			...node,
			meta: meta || null,
		})),
	};
}

function groupTabs(parent) {
	if (!parent.children) return;

	const children = [];
	let group = [];

	const flush = () => {
		if (group.length > 0) children.push(createCodeTabs(group));
		group = [];
	};

	for (const node of parent.children) {
		const parsed = parseLabel(node);

		if (parsed) {
			group.push({ node, ...parsed });
			continue;
		}

		flush();
		groupTabs(node);
		children.push(node);
	}

	flush();
	parent.children = children;
}

export default function remarkCodeTabs() {
	return (tree) => groupTabs(tree);
}
