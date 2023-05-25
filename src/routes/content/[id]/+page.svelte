<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData
	console.log(data)
</script>

<div class="rounded py-8 shadow-lg">
	<a href={`/search`}> Back</a>
	<img
		src={data.content.Poster === 'N/A'
			? `https://fakeimg.pl/600x400/363636/909090?text=${data.content.Type}`
			: data.content.Poster}
		alt={data.content.Title}
		class=" h-96 object-cover object-top"
	/>
	<div class="px-6 py-4">
		<h1 class="mb-2 text-xl font-bold">{data.content.Title}</h1>
		<p class="text-base text-gray-700">Year: {data.content.Year}</p>
		<p class="text-base text-gray-700">Runtime: {data.content.Runtime}</p>
		<p class="text-base text-gray-700">Genre: {data.content.Genre}</p>
		<p class="text-base text-gray-700">Director: {data.content.Director}</p>
		<p class="text-base text-gray-700">Writer: {data.content.Writer}</p>
		<p class="text-base text-gray-700">Actors: {data.content.Actors}</p>
		<p class="text-base text-gray-700">Plot: {data.content.Plot}</p>
		<p class="text-base text-gray-700">Language: {data.content.Language}</p>
		<p class="text-base text-gray-700">Country: {data.content.Country}</p>
		<p class="text-base text-gray-700">IMDb Rating: {data.content.imdbRating}/10</p>
		<p class="text-base text-gray-700">IMDb Votes: {data.content.imdbVotes}</p>
		<p class="text-base text-gray-700">Box Office: {data.content.BoxOffice}</p>
		<p class="text-base text-gray-700">Awards: {data.content.Awards}</p>
	</div>
</div>
