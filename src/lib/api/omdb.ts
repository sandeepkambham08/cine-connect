import { PUBLIC_OMDB_KEY } from '$env/static/public'
import { request } from '$lib/helpers/api'
import type { content } from '$lib/types/content'
import type { Fetch } from '$lib/types/response'

export function searchMovies(query: string, fetch: Fetch<any>) {
	const url = `?&apikey=${PUBLIC_OMDB_KEY}&s=${query}&page=1&plot=short`
	return request(url, fetch)
}

export function getMovie(id: string, fetch: Fetch<content>) {
	const url = `?&apikey=${PUBLIC_OMDB_KEY}&i=${id}&plot=full`
	return request(url, fetch)
}
