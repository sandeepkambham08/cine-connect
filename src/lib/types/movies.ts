export type contentSummary = {
	Title: string
	Year: string
	imdbID: string
	Type: contentType
	Poster: string
}

export enum contentType {
	Movie = 'movie',
	Series = 'series',
	Episode = 'episode',
}
