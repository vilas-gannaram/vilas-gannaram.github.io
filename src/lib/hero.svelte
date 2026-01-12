<script>
	import { Github, Linkedin, Mail } from '@lucide/svelte';
</script>

<section
	class="top-0 flex w-full flex-col justify-between gap-y-4 lg:sticky lg:h-screen lg:max-w-xl lg:py-18"
>
	<div>
		<h1 class="tracking-tighter text-slate-300">Vilas Gannaram</h1>
		<h5 class="mt-1 tracking-tight text-slate-300">Web Developer</h5>
	</div>

	<nav class="hidden lg:inline-block">
		<ul class="space-y-4 text-sm uppercase">
			<li>
				<a href="#about">About</a>
			</li>
			<li>
				<a href="#experience">Experience</a>
			</li>
			<li>
				<a href="#projects">Projects</a>
			</li>
		</ul>
	</nav>

	<div class="flex items-center gap-x-4">
		<a href="https://github.com/vilas-gannaram" target="_blank" rel="noopener noreferrer">
			<Github />
		</a>

		<a href="https://www.linkedin.com/in/vilasgannaram/" target="_blank" rel="noopener noreferrer">
			<Linkedin />
		</a>

		<a href="mailto:vilasgannaram@gmail.com" target="_blank" rel="noopener noreferrer">
			<Mail />
		</a>
	</div>
</section>
