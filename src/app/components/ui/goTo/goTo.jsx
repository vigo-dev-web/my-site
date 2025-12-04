'use client'
import { useScrollScreen } from '../../../utils/utils'
import styles from './goTo.module.scss'

const GoTo = ({ setIdx }) => {
	const { isScrollScreen, toScroll } = useScrollScreen()

	const handleClick = () => {
		setIdx(0)
		toScroll(0)
	}

	return (
		isScrollScreen && (
			<button
				className={styles.body}
				onClick={handleClick}
			>
				<span className={styles.content}></span>
			</button>
		)
	)
}

export default GoTo
