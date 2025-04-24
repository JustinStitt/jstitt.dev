<script>
	let message;
	const placeholders = [
		"belay is on; climb on! have fun, don't fall, climb on!",
		'hi baby, i miss you a lot',
		"i hope you're having a good day at work :)",
    "let's go to canes tonight :P",
    "I'm so full and I don't like day-old McDonalds",
    "Sometimes I just gotta go beast mode on some cereal",
    "We are two saucy broads!!!",
    "*gurgles mouth wash* ... OOH, SPICY!",
    "hello lover boy",
    "TV WIT MY BOYFREN DANCE",
    "me + you = love",
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
		console.log('sending message valid? : ', valid);
	};
</script>

<h1 class="hero">Ness' Eyes Only</h1>
<h2>Send a message to be displayed within Justin's terminal</h2>
<div class="vbox">
	<input
		bind:value={message}
		type="text"
		placeholder={placeholders[Math.floor(Math.random() * placeholders.length)]}
	/>
	<button onclick={handleSendButton}>Send</button>
</div>

<style>
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
		color: lightgray;
		font-style: italic;
		font-size: 15px;
	}
</style>
