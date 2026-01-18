<script lang="ts">
	import { Github, Linkedin, Mail } from '@lucide/svelte';

	// Svelte 5 Props
	let { activeId }: { activeId: string } = $props();

	const navLinks = [
		{ id: 'about', label: 'About' },
		{ id: 'experience', label: 'Experience' },
		{ id: 'projects', label: 'Projects' }
	];
</script>

<div
	class="top-0 my-16 flex w-full flex-col justify-between gap-y-6 lg:sticky lg:my-0 lg:h-screen lg:max-w-lg lg:py-20"
>
	<div class="flex w-full flex-col gap-y-30">
		<div>
			<h1 class="font-bold tracking-tighter">Vilas Gannaram</h1>
			<h5 class="mt-1">Web Developer <span class="text-slate-300/65">| Hyderabad, IND</span></h5>
			<!-- <p class="mt-4 max-w-xs">
				I build accessible, pixel-perfect digital experiences for the web.
			</p> -->
		</div>

		<nav class="hidden lg:block">
			<ul class="w-max space-y-2">
				{#each navLinks as { id, label } (id)}
					<li>
						<a
							href="#{id}"
							class="group flex items-center py-3 transition-all duration-250"
							class:active={activeId === id}
						>
							<span
								class="mr-4 h-px transition-all duration-250 group-hover:w-16 group-hover:bg-slate-200"
								class:w-16={activeId === id}
								class:bg-slate-200={activeId === id}
								class:w-8={activeId !== id}
								class:bg-slate-600={activeId !== id}
							></span>

							<span
								class="text-xs font-bold tracking-widest uppercase transition-all duration-250 group-hover:text-slate-200"
								class:text-slate-200={activeId === id}
								class:text-slate-500={activeId !== id}
							>
								{label}
							</span>
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>

	<div class="flex items-center gap-x-6">
		<a
			href="https://github.com/vilas-gannaram"
			target="_blank"
			class="text-slate-400 transition-colors hover:text-slate-200"
			aria-label="GitHub"
		>
			<Github size={24} />
		</a>

		<a
			href="https://www.linkedin.com/in/vilasgannaram/"
			target="_blank"
			class="text-slate-400 transition-colors hover:text-slate-200"
			aria-label="LinkedIn"
		>
			<Linkedin size={24} />
		</a>

		<a
			href="mailto:vilasgannaram@gmail.com"
			class="text-slate-400 transition-colors hover:text-slate-200"
			aria-label="Email"
		>
			<Mail size={24} />
		</a>
	</div>
</div>
