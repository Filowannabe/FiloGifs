import React, { Suspense } from 'react'
import { useNearScreen } from '../../hooks/useNearScreen';
import { Spinner } from '../Spinner/Spinner';

const TreandingSearches = React.lazy(() => import('./TrendingSearches'))


export const LazyTrending = () => {
    const { show, elementRef } = useNearScreen()

    return <div ref={elementRef}>
        <Suspense fallback={<Spinner />}>
            {show ? <TreandingSearches /> : <Spinner />}
        </Suspense>
    </div>
}