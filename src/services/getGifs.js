import { API_KEY, API_URL } from './settings'

export const getGifs = async ({ keyword, limit = 25, page = 0 } = {}) => {

    const apiUrl = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=g&lang=en`
    const request = await fetch(apiUrl)
    const { data } = await request.json()

    const gifs = data.map(it => {
        const { id, title, images } = it
        const { url } = images.downsized_medium

        return { title, id, url }
    })
    return gifs
}