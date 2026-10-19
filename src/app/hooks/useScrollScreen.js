'use client'
import { useLayoutEffect, useState } from 'react'

export const useScrollScreen = () => {

	const scrollObject = {
		behavior: 'smooth',
		block: 'start'
	}

	const toScroll = (y) => {
		window.scroll({
			top: y,
			left: 0,
			...scrollObject
		})
	}
	const [isScrollScreen, setScreenHeight] = useState(false)

	useLayoutEffect(() => {
		const logScreen = () => {
			const scrollHeight = window.scrollY
			if (scrollHeight >= 950) {
				setScreenHeight(true)
			} else {
				setScreenHeight(false)
			}
		}
		window.addEventListener('scroll', logScreen)

		return () => {
			window.removeEventListener('scroll', logScreen)
		}
	}, [])

	return { isScrollScreen, toScroll, scrollObject }
}
