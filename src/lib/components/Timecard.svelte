<script>
	const { date_a, date_b, message } = $props();

	let time_delta = $derived((date_a.getTime() - date_b.getTime()) / 1000);

	const time_obj = $derived({
		days: Math.floor(time_delta / 86400),
		hours: Math.floor((time_delta % 86400) / 3600),
		minutes: Math.floor(((time_delta % 86400) % 3600) / 60),
		seconds: Math.floor(((time_delta % 86400) % 3600) % 60)
	});
</script>

<div class="box">
	<h1>{message}</h1>
	<h2>
		<em>{time_obj.days} </em> days {time_obj.hours} hours {time_obj.minutes} minutes {time_obj.seconds}
		seconds
	</h2>
</div>

<style>
	h1 {
		font-weight: 600;
	}

	.box {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		border: 3px solid rebeccapurple;
		border-radius: 10px;
		padding: 20px;
		gap: 40px;
	}
</style>
