import { PUBLIC_BASE_OMDB_URL } from '$env/static/public'
import type { Fetch } from '$lib/types/response'

export async function request<T>(path: string, fetch: Fetch<T>) {
	const url = omdbUrl(path)
	const headers = omdbHeaders()

	return fetch(url, { headers })
}

export function omdbUrl(path: string): URL {
	if (typeof PUBLIC_BASE_OMDB_URL !== 'string')
		throw new Error(`Invalid $PUBLIC_BASE_OMDB_URL: ${String(PUBLIC_BASE_OMDB_URL)}`)

	return new URL(`${PUBLIC_BASE_OMDB_URL}/${path}`)
}

export function omdbHeaders(init?: Headers) {
	const headers = init ?? new Headers()
	if (!headers.has('Accept')) headers.set('Accept', 'application/json')
	return headers
}
