<script>
	import { ExternalLink } from 'lucide-svelte';

	// Projects data
	const projects = [
		{
			title: 'wip',
			description: 'wip',
			image: 'favicon.png',
			link: 'https://example.com'
		},
		{
			title: 'wip',
			description: 'wip',
			image: 'favicon.png',
			link: 'https://example.com'
		},
		{
			title: 'wip',
			description: 'wip',
			image: 'favicon.png',
			link: 'https://example.com'
		}
	];
</script>

<section id="projects" class="py-20">
	<h2 class="mb-12 text-center text-3xl font-bold md:text-4xl">Projects</h2>

	<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
		{#each projects as project}
			<article class="group relative overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800">
				<img src={project.image} alt={project.title} class="aspect-video w-full object-cover" />
				<div class="p-6">
					<h3 class="mb-2 text-xl font-semibold">{project.title}</h3>
					<p class="text-zinc-600 dark:text-zinc-400">{project.description}</p>
					<a
						href={project.link}
						target="_blank"
						class="mt-4 inline-flex items-center gap-2 text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
					>
						View Project
						<ExternalLink class="h-4 w-4" />
					</a>
				</div>
			</article>
		{/each}
	</div>
</section>
