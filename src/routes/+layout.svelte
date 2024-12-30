<script>
	import '../app.css';
	import { Sun, Moon, Menu, X } from 'lucide-svelte';
	import Nav from '$lib/components/Nav.svelte';
	import { setContext, getContext } from 'svelte';

	let { children } = $props();

	let theme = $state('dark');
	// Mobile menu state
	let isMenuOpen = $state(false);

	let is_name_in_view = $state(true);

	// Toggle theme
	const toggleTheme = () => {
		theme = theme === 'dark' ? 'light' : 'dark';
	};

	const setNameView = (in_view) => {
		is_name_in_view = in_view;
	};

	setContext('layout', { setNameView });
</script>

<!-- Main wrapper -->
<div class={theme === 'dark' ? 'dark' : ''}>
	<div
		class="min-h-screen w-full bg-zinc-50 text-zinc-900 transition-colors duration-300 dark:bg-zinc-900 dark:text-zinc-50"
	>
		<!-- Theme toggle -->
		<button
			onclick={toggleTheme}
			class="fixed right-4 top-4 z-50 rounded-full bg-zinc-200 p-2 transition-colors hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700"
			aria-label="Toggle theme"
		>
			{#if theme === 'dark'}
				<Sun class="h-5 w-5" />
			{:else}
				<Moon class="h-5 w-5" />
			{/if}
		</button>

		<!-- Mobile menu toggle -->
		<button
			onclick={() => (isMenuOpen = !isMenuOpen)}
			class="fixed left-4 top-4 z-50 rounded-full bg-zinc-200 p-2 transition-colors hover:bg-zinc-300 lg:hidden dark:bg-zinc-800 dark:hover:bg-zinc-700"
			aria-label="Toggle menu"
		>
			{#if isMenuOpen}
				<X class="h-5 w-5" />
			{:else}
				<Menu class="h-5 w-5" />
			{/if}
		</button>

		<Nav {isMenuOpen} {is_name_in_view} />
		<main class="container mx-auto px-4 py-8">
			{@render children()}
		</main>
	</div>
</div>
