<script lang="ts">
  import { searchMovies } from '$lib/api/omdb';
  import type { contentSummary } from '$lib/types/movies';

  let content: contentSummary[] = [];
  let searchText = '';

  async function search(searchInput: string) {
    const res = await searchMovies(searchInput, fetch).then((res) =>
      res.json()
    );
    content = res.Search;
  }
</script>

<input bind:value={searchText} />
<button on:click={() => search(searchText)}>SEARCH</button>

<div class="grid xs:grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-4">
  {#each content as item}
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full" src={item.Poster} alt={item.Title} />
      <div class="px-6 py-4">
        <p class="font-bold text-xl mb-2">{item.Title}</p>
      </div>
    </div>
  {/each}
</div>
