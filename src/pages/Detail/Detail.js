import React from 'react'
import { Redirect } from 'wouter';
import Gif from '../../components/Gif/Gif';
import { Spinner } from '../../components/Spinner/Spinner';
import useSingleGif from '../../hooks/useSingleGif';
import { Helmet } from 'react-helmet';

export const Detail = ({ params }) => {
    const { gif, isLoading, isError } = useSingleGif({ id: params.id })

    const title = gif ? gif.title : ''
    if (isLoading) return (<>
        <Helmet>
            <title>{title}</title>
        </Helmet>

        <Spinner />
    </>)
    if (isError) return <Redirect to='/404' />

    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <Gif {...gif} />
        </>
    )
}