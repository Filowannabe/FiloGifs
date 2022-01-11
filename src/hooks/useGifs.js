import { useEffect, useState, useContext } from "react";
import { getGifs } from '../services/getGifs'
import { Context } from '../context/gifContext'

const INITIAL_PAGE = 0

export const useGifs = (keyword) => {
    const [loading, setLoading] = useState(false)
    const { gifs, setGifs } = useContext(Context)
    const [loadingNextPage, setLoadingNextPage] = useState(false)
    const [page, setPage] = useState(INITIAL_PAGE)

    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

    useEffect(function () {
        setLoading(true)


        getGifs({ keyword: keywordToUse })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
                localStorage.setItem('lastKeyword', keywordToUse)
            })
    }, [keyword, setGifs, keywordToUse])

    useEffect(() => {
        if (page === INITIAL_PAGE) return
        setLoadingNextPage(true)
        getGifs({ keyword: keywordToUse, page })
            .then(nextGifs => {
                setGifs(prevGifs => prevGifs.concat(nextGifs))
                setLoadingNextPage(false)
            })
    }, [page, keywordToUse, setGifs])

    return { loading, loadingNextPage, gifs, setPage }
}