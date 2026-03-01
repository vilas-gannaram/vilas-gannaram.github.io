<script>
	import Navbar from '$lib/components/portfolio/navbar.svelte';
	import '../app.css';
	import { ModeWatcher, setMode } from 'mode-watcher';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	setMode('dark');
</script>

<ModeWatcher />
<Tooltip.Provider delayDuration={300}>
	<div
		class="bg-background relative mx-auto min-h-screen max-w-3xl px-6 py-12 font-sans antialiased sm:py-24"
	>
		<slot></slot>
		<Navbar />
	</div>
</Tooltip.Provider>
