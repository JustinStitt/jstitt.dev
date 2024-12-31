<script>
	import { getContext } from 'svelte';
	import Saos from 'saos';
	import Hero from '$lib/components/Hero.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Blog from '$lib/components/Blog.svelte';
	import Footer from '$lib/components/Footer.svelte';

	const setNameView = getContext('layout').setNameView;
</script>

<Hero
	first_name="Justin"
	last_name="Stitt"
	email="jstitt007@gmail.com"
	headshot_img_src="snorkel-1-crop.png"
	github_url="https://github.com/justinstitt"
	linkedin_url="https://www.linkedin.com/in/justinstitt/"
	title="Software Engineer"
	name_view_change={(in_view) => {
		setNameView(in_view);
	}}
/>
<Saos
	animation={'slide-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'}
	animation_out={'slide-out 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) 1 both'}
	top={250}
	bottom={50}
>
	<Projects />
</Saos>
<Blog />
<Footer />

<style>
	@keyframes -global-slide-in {
		0% {
			transform: translateY(200px);
		}
		100% {
			transform: translateY(0);
		}
	}
	@keyframes -global-slide-out {
		0% {
			transform: translateY(0);
		}
		100% {
			transform: translateY(200px);
		}
	}
</style>
