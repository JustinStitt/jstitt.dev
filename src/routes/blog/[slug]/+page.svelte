<script>
	import { getContext } from 'svelte';
	let { data } = $props();

	getContext('layout').setNameView(false);
</script>

<main class="py-16">
	<h1 class="text-2xl">
		Blog #{data.slug}
	</h1>
	<div class="markdown-body blog-content">
		{@html data.html}
	</div>
</main>

<style>
</style>
