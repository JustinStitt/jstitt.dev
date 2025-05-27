<script>
	const { name, size_bytes } = $props();

	let download_is_clickable = $state(true);

	const handleDownload = async () => {
		download_is_clickable = false;
		const response = await fetch(
			`/api/download-specific-video?video_name=${encodeURIComponent(name)}`
		);

		const blob = await response.blob();

		const url = window.URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = name;

		document.body.appendChild(a);
		a.click();
	};
</script>

<div class="flex w-full flex-row justify-between rounded-lg bg-gray-200 p-4 dark:bg-slate-600">
	<div class="flex w-full flex-row items-center justify-between">
		<div class="flex flex-col">
			<h1 class="font-bold">{name}</h1>
			<h2 class="italic">{size_bytes} bytes</h2>
		</div>
		<button
			class="rounded-lg bg-violet-500 p-3 text-zinc-50
    hover:bg-green-300 active:scale-110
    active:bg-green-300
    disabled:cursor-not-allowed
    disabled:bg-gray-300
    disabled:hover:bg-gray-300
    disabled:active:scale-100"
			disabled={!download_is_clickable}
			onclick={handleDownload}>Download</button
		>
	</div>
</div>
