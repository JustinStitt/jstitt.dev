<script>
	// TODO: replace deprecated company icons with others
	import { Github, Mail, Linkedin } from 'lucide-svelte';
	import { inview } from 'svelte-inview';

	let {
		first_name,
		last_name,
		email,
		headshot_img_src,
		github_url,
		linkedin_url,
		title,
		name_view_change
	} = $props();

	// const inview_options = { rootMargin: '-50px' };
	const inview_options = {};
</script>

<section id="home" class="flex min-h-[calc(100vh-4rem)] items-center justify-center">
	<div class="text-center">
		<img
			src={headshot_img_src}
			alt="Profile"
			class="mx-auto mb-8 h-32 w-32 rounded-full border-4 border-zinc-200 dark:border-zinc-800"
		/>
		<div
			class="viewbox"
			use:inview={inview_options}
			oninview_change={(e) => {
				name_view_change(e.detail.inView);
			}}
		>
			<h1 class="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">{first_name} {last_name}</h1>
		</div>
		<p class="mb-8 text-xl text-zinc-600 md:text-2xl dark:text-zinc-400">{title}</p>

		<!-- Social links -->
		<div class="flex items-center justify-center gap-4">
			<a
				href={github_url}
				target="_blank"
				class="rounded-full p-2 transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-800"
			>
				<Github class="h-6 w-6" />
			</a>
			<a
				href={linkedin_url}
				target="_blank"
				class="rounded-full p-2 transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-800"
			>
				<Linkedin class="h-6 w-6" />
			</a>
			<a
				href={`mailto:${email}`}
				class="rounded-full p-2 transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-800"
			>
				<Mail class="h-6 w-6" />
			</a>
		</div>
	</div>
</section>
