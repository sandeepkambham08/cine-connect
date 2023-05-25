import { PUBLIC_BASE_OMDB_URL } from '$env/static/public'

if (typeof PUBLIC_BASE_OMDB_URL !== 'string' || !PUBLIC_BASE_OMDB_URL)
	throw new Error('Missing $PUBLIC_BASE_OMDB_URL.')
export const publicBaseOmdbUrl = Object.freeze(PUBLIC_BASE_OMDB_URL)
