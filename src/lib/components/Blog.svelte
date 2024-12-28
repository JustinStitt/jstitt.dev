<script>
	import { ArrowRight } from 'lucide-svelte';

	// Blog posts data
	const posts = [
		{
			title: 'Coming soon',
			excerpt: '...',
			date: '2025-??-??',
			readTime: 'x min read'
		}
	];
</script>

<section id="blog" class="py-20">
	<h2 class="mb-12 text-center text-3xl font-bold md:text-4xl">Blog</h2>

	<div class="space-y-8">
		{#each posts as post}
			<article
				class="rounded-lg bg-zinc-100 p-6 transition-all hover:scale-[1.02] hover:transform dark:bg-zinc-800"
			>
				<div class="mb-2 flex items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
					<time>{post.date}</time>
					<span>{post.readTime}</span>
				</div>
				<h3 class="mb-2 text-xl font-semibold">{post.title}</h3>
				<p class="mb-4 text-zinc-600 dark:text-zinc-400">{post.excerpt}</p>
				<a
					href="#"
					class="inline-flex items-center gap-2 text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
				>
					Read More
					<ArrowRight class="h-4 w-4" />
				</a>
			</article>
		{/each}
	</div>
</section>
