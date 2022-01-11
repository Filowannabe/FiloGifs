import { useEffect, useState, useRef } from 'react'

export const useNearScreen = () => {
    const elementRef = useRef()
    const [show, setShow] = useState(false)

    useEffect(() => {
        const onChange = (entries, observer) => {
            const element = entries[0]
            console.log(element.isIntersecting)
            if (element.isIntersecting) {
                setShow(true)
                observer.disconnect()
            }
        }
        const observer = new IntersectionObserver(onChange, {
            rootMargin: '100px'
        })

        observer.observe(elementRef.current)

        return () => observer.disconnect()
    })

    return { show, elementRef }
}