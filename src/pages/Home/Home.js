import React, { useState } from "react";
import { useLocation } from "wouter";

import { ListOfGifs } from "../../components/ListOfGif/listOfGifs";
import { Spinner } from "../../components/Spinner/Spinner";
import { LazyTrending } from "../../components/treandingSearches";
import { useGifs } from "../../hooks/useGifs";
import './Home.css'

export const Home = () => {
    const [keyword, setKeyword] = useState('')
    const [path, setPath] = useLocation()
    const { loading, gifs } = useGifs()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(path)
        setPath(`/search/${keyword}`)
    }

    console.log(gifs)

    const handleChange = (e) => { setKeyword(e.target.value) }

    if (loading) return <Spinner />

    return (
        <>

            <header className="o-header">
                <form id='input_container' onSubmit={handleSubmit}>
                    <input id='home_input' type='text' placeholder="GIF..." onChange={handleChange} autoComplete="off"></input>
                </form>
            </header>
            <h1>Gifs</h1>
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
