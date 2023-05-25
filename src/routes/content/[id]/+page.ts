import { error } from '@sveltejs/kit'
import { getMovie } from '$lib/api/omdb'
import type { LayoutLoad } from '../../$types'

export const load = (async ({ params, fetch }) => {
	const { id } = params
	if (!id) throw error(500)
	const content = getMovie(id, fetch).then(res => res.json())
	return { content }
}) as LayoutLoad
