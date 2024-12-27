<script>
	import '../app.css';
	let { children } = $props();
</script>

<div class="flex h-14 items-center justify-between px-4 lg:px-6">
	<h1 class="font-mono text-3xl font-bold">JS</h1>
	<h1 class="font-mono text-3xl font-bold">jstitt.dev</h1>
	<div class="flex gap-4">
		<a class="text-blue-500 underline" href="https://github.com/justinstitt/jstitt.dev">repo</a>
		<h1>idk</h1>
	</div>
</div>

{@render children()}
