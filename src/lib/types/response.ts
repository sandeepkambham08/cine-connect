export interface Response<T> extends globalThis.Response {
	json(): Promise<T>
}

export type Fetch<T> = (
	input: RequestInfo | URL,
	init?: RequestInit | undefined,
) => Promise<Response<T>>

export type GlobalFetch = typeof fetch
