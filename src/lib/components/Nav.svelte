<script>
	import { fade, fly } from 'svelte/transition';

	// Props
	let { isMenuOpen, is_name_in_view } = $props();

	let name = $derived(is_name_in_view ? 'JS' : 'Justin Stitt');

	// Navigation links
	const links = [
		{ href: '#home', label: 'Home' },
		{ href: '#projects', label: 'Projects' },
		{ href: '#blog', label: 'Blog' }
	];
</script>

<!-- Desktop navigation -->
<nav
	class="fixed left-0 top-0 z-40 hidden w-full bg-zinc-50/80 backdrop-blur-sm lg:flex dark:bg-zinc-900/80"
>
	<div class="container mx-auto px-4">
		<ul class="flex h-16 items-center justify-center gap-8">
			<div class="mr-auto flex min-w-96">
				{#key name}
					<a class="font-mono text-3xl font-bold" href="#home" in:fade>
						{name}
					</a>
				{/key}
			</div>
			{#each links as link}
				<li>
					<a
						href={link.href}
						class="text-lg font-medium transition-colors hover:text-zinc-600 dark:hover:text-zinc-400"
					>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>

<!-- Mobile navigation -->
{#if isMenuOpen}
	<nav
		class="fixed inset-0 z-40 bg-zinc-50 lg:hidden dark:bg-zinc-900"
		transition:fade={{ duration: 200 }}
	>
		<ul class="flex h-full flex-col items-center justify-center gap-8">
			{#each links as link}
				<li transition:fly={{ y: 20, duration: 200 }}>
					<a
						href={link.href}
						class="text-xl font-medium transition-colors hover:text-zinc-600 dark:hover:text-zinc-400"
					>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
{/if}
