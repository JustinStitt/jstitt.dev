<script>
	import AsciiLoadingBar from './AsciiLoadingBar.svelte';
	import { humanFileSize } from '../utils';
	const { name, size_bytes } = $props();

	// let download_is_clickable = $state(true);
	let current_bytes_downloaded = $state(0);
	let total_bytes_size = $state(1);
	let currently_downloading = $state(false);
	let downloaded_already = $state(false);

	const handleDownload = async () => {
		if (downloaded_already) return;
		currently_downloading = true;
		const YTDL_API_URL = '/yt-dl-api/download_specific';
		const response = await fetch(YTDL_API_URL + `?video_name=${encodeURIComponent(name)}`);
		const content_length = response.headers.get('Content-Length');
		total_bytes_size = content_length;
		const reader = response.body.getReader();
		let received_bytes = 0;
		const chunks = [];

		while (true) {
			const { done, value } = await reader.read();
			if (done) {
				break;
			}

			chunks.push(value);

			received_bytes += value.length;
			current_bytes_downloaded = received_bytes;
		}

		const blob = new Blob(chunks, { type: response.headers.get('Content-Type') || 'video/mp4' });
		const url = window.URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = name;
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
		currently_downloading = false;
		current_bytes_downloaded = 0;
		downloaded_already = true;
		setTimeout(() => {
			downloaded_already = false;
		}, 15000);
	};
</script>

<div class="flex w-full flex-row justify-between rounded-lg bg-gray-200 p-4 dark:bg-slate-600">
	<div class="flex w-full flex-row items-center justify-between">
		<div class="flex flex-col">
			<h1 class="break-all font-bold">{name}</h1>
			<h2 class="italic">{size_bytes} bytes</h2>
		</div>
		<button
			class="relative text-nowrap rounded-lg bg-violet-500
    p-3 text-zinc-50
    hover:bg-green-300
    active:scale-110
      active:bg-green-300
      disabled:cursor-not-allowed disabled:bg-gray-500 disabled:hover:bg-gray-300 disabled:active:scale-100"
			disabled={currently_downloading | downloaded_already}
			onclick={handleDownload}
		>
			{#if !downloaded_already}
				<span>
					{!currently_downloading
						? 'Download'
						: humanFileSize(current_bytes_downloaded).toString() +
							' / ' +
							humanFileSize(total_bytes_size).toString()}</span
				>
			{:else}
				Downloaded...
			{/if}
			{#if currently_downloading}
				<div
					class="absolute left-0 top-0 h-full w-6 rounded-lg bg-green-500 opacity-15 transition-all duration-500 ease-out"
					style={`width: ${Math.floor((current_bytes_downloaded / total_bytes_size) * 100)}%;`}
				></div>
			{/if}
		</button>
	</div>
</div>
