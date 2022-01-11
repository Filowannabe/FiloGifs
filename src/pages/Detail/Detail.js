import React from 'react'
import { Gif } from '../../components/Gif/Gif';
import { useGlobalGifs } from '../../hooks/useGlobalGifs';

export const Detail = ({ params }) => {
    const gifs = useGlobalGifs()
    const { id } = params
    const gif = gifs.find(it => it.id === id)

    return <Gif {...gif} />
}