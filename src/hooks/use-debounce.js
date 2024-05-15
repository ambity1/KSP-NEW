import { useEffect, useRef, useState } from 'react'

const useDebounce = (value, delay) => {
	const [debouncedValue, setDebouncedValue] = useState(value)
	const handlerRef = useRef(null)

	useEffect(() => {
		if (handlerRef.current) {
			clearTimeout(handlerRef.current)
		}

		handlerRef.current = setTimeout(() => {
			setDebouncedValue(value)
		}, delay)

		return () => {
			clearTimeout(handlerRef.current)
		}
	}, [value, delay])

	return debouncedValue
}

export default useDebounce
