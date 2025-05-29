<script>
	const { length } = $props();
	let percent = $state(0);
	const max_percent = 100;

	const getBarCount = () => {
		return Math.floor((percent / max_percent) * length);
	};

	setInterval(() => {
		percent += 5;
		percent = percent % max_percent;
	}, 100);
</script>

<div>
	[{'-'.repeat(getBarCount()) + '◦'.repeat(length - getBarCount())}]
</div>
