'use client'
import { motion, useAnimate } from 'motion/react'
import styles from './arrow.module.scss'
import { useEffect } from 'react'

const ArrowDown = () => {
	const [scope, animate] = useAnimate()

	useEffect(() => {
		const handleAnimate = async () => {
			await animate(
				scope.current,
				{ y: 50, rotateZ: 90, opacity: 1 },
				{ type: 'spring', stiffness: 600, damping: 24, mass: 4.8, rotateZ: 120, opacity: 1 }
			)
			await animate(
				scope.current,
				{ y: 30 },
				{
					repeat: Infinity,
					delay: 0.1,
					repeatType: 'mirror',
					duration: 0.4,
					type: 'spring',
					stiffness: 50,
					damping: 15,
					mass: 2
				}
			)
		}
		handleAnimate()
	}, [])
	return (
		<motion.div
			ref={scope}
			className={styles.arrow}
		>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				viewBox='0 0 24 24'
			>
				<path
					fill='currentColor'
					d='M5.59 7.41L7 6l6 6l-6 6l-1.41-1.41L10.17 12zm6 0L13 6l6 6l-6 6l-1.41-1.41L16.17 12z'
				/>
			</svg>
		</motion.div>
	)
}

export default ArrowDown