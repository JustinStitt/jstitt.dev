<script>
	import { invalidateAll } from '$app/navigation';
	import VideoCard from '$lib/components/VideoCard.svelte';
	import AsciiLoadingBar from '$lib/components/AsciiLoadingBar.svelte';
	const { data } = $props();
	console.log('got data: ', data);

	let input_url = $state('');
	let download_response = $state('');
	let currently_downloading = $state(false);

	const handleStartDownload = () => {
		if (input_url.length <= 0) return;
		currently_downloading = true;
		fetch('/api/download-yt-video', {
			method: 'POST',
			body: JSON.stringify({ video_url: input_url }),
			headers: { 'Content-Type': 'application/json' }
		})
			.then(async (response) => {
				currently_downloading = false;
				console.log(response);
				const json = await response.json();
				return [json, response.status];
			})
			.then(([json, status]) => {
				console.log(json, status);
				download_response = json.data.detail;
				if (status === 200) handleRefresh();
			});
	};

	let disable_refresh = $state(false);
	const handleRefresh = () => {
		disable_refresh = true;
		setTimeout(() => {
			disable_refresh = false;
		}, 2500);
		invalidateAll();
	};
</script>

<h1 class="hero">youtube downloader</h1>
<h2>Download youtube videos to my oracle box</h2>

<div class="my-4 flex w-full flex-col items-center gap-6">
	<div class="flex w-full flex-col items-center justify-center gap-2 md:w-1/2">
		<div class="flex w-full flex-row gap-6">
			<h1>URL:</h1>
			<input
				bind:value={input_url}
				placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
				class="w-full font-bold text-zinc-900"
				type="text"
			/>
		</div>
		<button onclick={handleStartDownload} class="w-full rounded-lg bg-blue-400 p-2"
			>Start Download</button
		>
		{#if currently_downloading}
			<h2 class="italic">Downloading...</h2>
		{/if}
		{#if currently_downloading}
			<AsciiLoadingBar length={10} />
		{/if}
		<h2>{download_response}</h2>
	</div>
</div>

<div class="flex flex-col items-center">
	<div class="my-8 flex w-full flex-col items-center gap-6 md:w-1/2">
		<h3 class="w-full text-lg">Videos</h3>
		<button
			onclick={handleRefresh}
			disabled={disable_refresh}
			class="w-full rounded-lg bg-yellow-800 p-2 disabled:cursor-not-allowed disabled:bg-gray-500"
		>
			Refresh{disable_refresh ? 'ed' : ''}
		</button>
		{data.rand_test}
		{#await data.promise}
			<h1>LOADING VIDEOS</h1>
		{:then data}
			{#each data.videos as video}
				<VideoCard name={video.name} size_bytes={video.size} />
			{/each}
		{:catch error}
			<h1>{error}</h1>
		{/await}
	</div>
</div>

<style>
	.hero {
		margin-top: 50px;
	}

	h2 {
		font-style: italic;
		font-size: 15px;
		filter: opacity(0.8);
	}
</style>
