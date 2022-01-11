import React from "react";
import { Spinner } from "../../components/Spinner/Spinner";
import { useGifs } from "../../hooks/useGifs";
import { ListOfGifs } from "../../components/ListOfGif/listOfGifs";

import './styles.css'

export const SearchResults = ({ params }) => {

    const { keyword } = params
    const { gifs, loading, setPage } = useGifs(keyword)

    const handleNextPage = () => {
        setPage(prevPage => prevPage + 1)
    }
    return (<>
        {loading
            ? <Spinner />
            : <ListOfGifs gifs={gifs} />}
        <br />
        <button id='more_gifs' onClick={handleNextPage}>See more</button>
    </>)
}

