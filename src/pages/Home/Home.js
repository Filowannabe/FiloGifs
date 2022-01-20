import React, { useCallback } from "react";
import Helmet from "react-helmet";
import { useLocation } from "wouter";

import { ListOfGifs } from "../../components/ListOfGif/listOfGifs";
import SearchForm from "../../components/SearchForm";
import { Spinner } from "../../components/Spinner/Spinner";
import { LazyTrending } from "../../components/treandingSearches";
import { useGifs } from "../../hooks/useGifs";

import './Home.css'

export const Home = () => {

    const [path, setPath] = useLocation()
    const { loading, gifs } = useGifs()

    const handleSubmit = useCallback(({ keyword }) => {
        setPath(`/search/${keyword}`)
    }, [setPath])

    if (loading) return <Spinner />

    return (
        <>
        <Helmet>
            <title>Home</title>
        </Helmet>
            <header className="o-header">
                <SearchForm onSubmit={handleSubmit} />
            </header>
            <div className="App-wrapper">
                <div className="App-main">
                    <div className="App-results">
                        <h3 className="App-title">Última búsqueda</h3>
                        <ListOfGifs gifs={gifs} />
                    </div>
                    <div className="App-category">
                        <LazyTrending />
                    </div>
                </div>
            </div>
        </>
    )
}
