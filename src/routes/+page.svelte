<script>
	import { getContext } from 'svelte';
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
<Projects />
<Blog />
<Footer />
