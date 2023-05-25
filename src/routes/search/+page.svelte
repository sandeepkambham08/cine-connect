<script lang="ts">
	import { searchMovies } from '$lib/api/omdb'
	import ContentSummary from '$lib/components/cards/ContentSummary.svelte'
	import type { contentSummary } from '$lib/types/movies'

	let content: contentSummary[] = []
	let searchText = ''

	async function search(searchInput: string) {
		const res = await searchMovies(searchInput, fetch).then(res => res.json())
		content = res.Search
	}
	// search('batman');
</script>

<div class="bg-base py-8 text-on-base">
	<div class="mx-8 flex flex-col justify-center gap-4 sm:flex-row">
		<input bind:value={searchText} class="rounded-full border border-contrast p-4 sm:w-1/2" />
		<button
			on:click={() => search(searchText)}
			class="rounded-full bg-contrast p-4 text-on-contrast">SEARCH</button
		>
	</div>

	<div class="container mx-auto mt-8 grid items-center gap-4 bg-base sm:grid-cols-2 xl:grid-cols-3">
		{#each content as item}
			<ContentSummary {item} />
		{/each}
	</div>
</div>
