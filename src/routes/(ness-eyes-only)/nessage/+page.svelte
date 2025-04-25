<script>
	import Timecard from '$lib/components/Timecard.svelte';
	let message = $state('');
	const { data } = $props();
	const last_line = data.last_line;
	let shown_most_recent = $state(last_line);
	let show_success = $state(false);
	const placeholders = [
		"belay is on; climb on! have fun, don't fall, climb on!",
		'hi baby, i miss you a lot',
		"i hope you're having a good day at work :)",
		"let's go to canes tonight :P",
		"I'm so full and I don't like day-old McDonalds",
		'Sometimes I just gotta go beast mode on some cereal',
		'We are two saucy broads!!!',
		'*gurgles mouth wash* ... OOH, SPICY!',
		'hello lover boy',
		'TV WIT MY BOYFREN DANCE',
		'me + you = love',
		"you're my home"
	];

	const handleSendButton = async () => {
		const response = await fetch('/api/nessage-send', {
			method: 'POST',
			body: JSON.stringify({ message }),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const { valid } = await response.json();

		if (valid === true) {
			shown_most_recent = message;
			message = '';
			show_success = true;
			setTimeout(() => {
				show_success = false;
			}, 3000);
		}
	};

	let date_now = $state(new Date());
	const keys_lost_date = new Date('2025-04-22 03:43:06');
	const couple_date = new Date('2023-02-09 01:23:56');

	setInterval(() => {
		date_now = new Date();
	}, 1000);
</script>

<h1 class="hero">Ness' Eyes Only</h1>
<h2>Send a message to be displayed within Justin's terminal</h2>
<div class="vbox">
	<input
		bind:value={message}
		type="text"
		placeholder={placeholders[Math.floor(Math.random() * placeholders.length)]}
	/>
	<button onclick={handleSendButton} class:greyed-out={show_success} class="text-zinc-50">
		{#if show_success}
			Sent Successfully
		{:else}
			Send
		{/if}
	</button>
	{#if shown_most_recent.length > 0}
		<h1>Current message:</h1>
		<h2>{shown_most_recent}</h2>
	{/if}

	<div class="grid">
		<Timecard
			message={'Time passed since Ness lost her keys'}
			date_a={date_now}
			date_b={keys_lost_date}
		/>
		<Timecard
			message={"The amount of time we've been a couple"}
			date_a={date_now}
			date_b={couple_date}
		/>
	</div>
</div>

<style>
	.grid {
		display: grid;
		width: 100%;
		gap: 5px;
		grid-template-columns: repeat(auto-fit, 100%);
		justify-content: center;
	}

	@media screen and (min-width: 580px) {
		.grid {
			grid-template-columns: repeat(auto-fit, 30%);
		}
	}

	.greyed-out {
		background-color: grey;
	}

	.hero {
		margin-top: 50px;
	}

	input {
		color: black;
		width: 100%;
	}

	.vbox {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 20px;
	}

	button {
		background-color: rebeccapurple;
		border-radius: 5px;
		padding: 5px;
		width: 50%;
	}

	button:hover {
		filter: grayscale(20%);
	}

	button:active {
		transform: translate(1px, 1px);
	}

	h2 {
		font-style: italic;
		font-size: 15px;
		filter: opacity(0.8);
	}

	em {
		font-weight: 800;
	}
</style>
