import { useEffect, useState, useRef } from 'react'

export const useNearScreen = ({ externalRef, once = true } = {}) => {
    const elementRef = useRef()
    const [show, setShow] = useState(false)

    useEffect(() => {
        const element = externalRef ? externalRef.current : elementRef.current

        const onChange = (entries, observer) => {
            const element = entries[0]

            if (element.isIntersecting) {
                setShow(true)
                once && observer.disconnect()
            } else {
                !once && setShow(false)
            }
        }
        let observer = new IntersectionObserver(onChange, {
            rootMargin: '100px'
        })

        if (element) observer.observe(element)

        return () => observer && observer.disconnect()
    })

    return { show, elementRef }
}