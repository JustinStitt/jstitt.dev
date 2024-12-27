<script>
	import '../app.css';
	let { children } = $props();
</script>

<div class="absolute left-1/2 h-full min-w-2 bg-gray-200"></div>

<div class="flex h-14 items-center justify-between bg-sky-100 px-4 lg:px-6">
	<h1 class="w-full bg-orange-100 font-mono text-3xl font-bold">JS</h1>
	<h1 class="w-full bg-red-200 text-center font-mono text-3xl font-bold">jstitt.dev</h1>
	<div class="flex w-full justify-end gap-4 bg-green-100">
		<a class="text-blue-500 underline" href="https://github.com/justinstitt/jstitt.dev">repo</a>
		<h1>idk</h1>
		<h1>idk</h1>
		<h1>idk</h1>
		<h1>idk</h1>
		<h1>idk</h1>
	</div>
</div>

{@render children()}
