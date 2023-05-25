<script lang="ts">
	import { searchMovies } from '$lib/api/omdb'
	import ContentSummary from '$lib/components/cards/ContentSummary.svelte'
	import type { contentSummary } from '$lib/types/content'

	let content: contentSummary[] = []
	let searchText = ''
	let debounceTimer: NodeJS.Timeout

	function delayedSearch(searchText: string) {
		clearTimeout(debounceTimer)
		debounceTimer = setTimeout(() => {
			search(searchText)
		}, 500)
	}

	async function search(searchInput: string) {
		const res = await searchMovies(searchInput, fetch).then(res => res.json())
		if (res.Response === 'False') {
			content = []
			return
		}
		content = res.Search
	}
</script>

<div class="bg-base py-8 text-on-base">
	<div class="mx-8 flex flex-col justify-center gap-4 sm:flex-row">
		<input
			bind:value={searchText}
			on:input={() => delayedSearch(searchText)}
			class="rounded-full border border-contrast p-4 sm:w-1/2"
		/>
		<button
			on:click={() => search(searchText)}
			class="rounded-full bg-contrast p-4 text-on-contrast">SEARCH</button
		>
	</div>

	<div class="container mx-auto mt-8 grid items-center gap-4 bg-base sm:grid-cols-2 xl:grid-cols-3">
		{#if searchText === '' && content.length === 0}
			<p class="text-center text-2xl">Search for a movie</p>
		{:else if searchText !== '' && content.length === 0}
			<p class="text-center text-2xl">No results found</p>
		{:else}
			{#each content as item}
				<a href={`/content/${item.imdbID}`}>
					<ContentSummary {item} />
				</a>
			{/each}
		{/if}
	</div>
</div>
