<script>
	import { goto } from '$app/navigation';

	let currently_entered_password;
	const handleLoginButton = async () => {
		const response = await fetch('/api/ness-password-validate', {
			method: 'POST',
			body: JSON.stringify({ currently_entered_password }),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const { valid, redirectUrl } = await response.json();
		if (valid) goto(redirectUrl);
	};
</script>

<h1>Ness Login</h1>

<div class="vbox">
	<input type="text" placeholder="password" bind:value={currently_entered_password} />
	<button onclick={handleLoginButton}>Login</button>
</div>

<style>
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
</style>
