import { useState, useEffect } from 'react'
import getTrendingTerms from '../../services/getTrendingTermsService';
import Category from '../Category';

export default function TreandingSearches() {
    const [trends, setTrends] = useState([])

    useEffect(() => {
        getTrendingTerms().then(setTrends)
    }, [])
    return <Category name='tendencias' options={trends} />
} 