<script lang="ts">
	import { Button as ButtonPrimitive } from 'bits-ui';
	import { type Props, buttonVariants } from './index.js';
	import { cn } from '$lib/utils.js';

	let {
		class: className = undefined,
		variant = 'default',
		size = 'default',
		builders = [],
		onclick,
		children,
		...restProps
	}: Props & { onclick?: (e: MouseEvent) => void; children?: any } = $props();
</script>

<ButtonPrimitive.Root
	{builders}
	class={cn(buttonVariants({ variant, size, className }))}
	type="button"
	{...restProps}
	{onclick}
>
	{@render children?.()}
</ButtonPrimitive.Root>
