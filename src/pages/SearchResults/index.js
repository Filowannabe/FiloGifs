import React, { useRef, useEffect, useCallback } from "react";
import { Spinner } from "../../components/Spinner/Spinner";
import { useGifs } from "../../hooks/useGifs";
import { ListOfGifs } from "../../components/ListOfGif/listOfGifs";
import { useNearScreen } from "../../hooks/useNearScreen";
import debounce from "just-debounce-it";

import './styles.css'
import Helmet from "react-helmet";

export const SearchResults = ({ params }) => {

    const { keyword } = params
    const { gifs, loading, setPage } = useGifs(keyword)

    const externalRef = useRef()

    const { show } = useNearScreen({
        externalRef: loading ? null : externalRef,
        once: false
    })

    const title = gifs ? `${gifs.length} Resultados de ${keyword}` : ''


    const debounceHandleNextPage = useCallback(debounce(
        () => setPage(prevPage => prevPage + 1), 200
    ), [])

    useEffect(() => {
        if (show) debounceHandleNextPage()
    }, [debounceHandleNextPage, show])

    return <>
        {loading
            ? (<Spinner />)
            : <>
                <Helmet>
                    <title>{title}</title>
                    <meta
                        name="description"
                        content={title}
                    />
                </Helmet>
                <ListOfGifs gifs={gifs} />
                <div ref={externalRef} id='visor'></div>
            </>
        }
    </>
}

