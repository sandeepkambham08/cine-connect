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

export interface content {
	Title: string
	Year: string
	Rated: string
	Released: string
	Runtime: string
	Genre: string
	Director: string
	Writer: string
	Actors: string
	Plot: string
	Language: string
	Country: string
	Awards: string
	Poster: string
	Ratings: Rating[]
	Metascore: string
	imdbRating: string
	imdbVotes: string
	imdbID: string
	Type: string
	DVD: string
	BoxOffice: string
	Production: string
	Website: string
	Response: string
}

export interface Rating {
	Source: string
	Value: string
}
