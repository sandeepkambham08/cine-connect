<script lang="ts">
	import type { contentSummary } from '$lib/types/content'

	export let item: contentSummary
	$: poster =
		item.Poster === 'N/A'
			? `https://fakeimg.pl/600x400/363636/909090?text=${item.Type}`
			: item.Poster
</script>

<div
	class="flex h-full max-w-sm flex-col overflow-hidden rounded-2xl bg-surface text-on-surface shadow-lg"
>
	<img class="h-48 w-full object-cover object-top sm:h-72" src={poster} alt={item.Title} />
	<div class="flex flex-col justify-between gap-4 px-6 py-4">
		<p class="mb-2 text-xl font-bold">{item.Title}</p>
		<p class="capitalize">{item.Type} : {item.Year}</p>
	</div>
</div>
