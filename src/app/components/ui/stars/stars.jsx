import { TiStarFullOutline, TiStarOutline } from 'react-icons/ti'
import styles from './stars.module.scss'

const Stars = ({ rating }) => {
	const emptyStars = [...Array(5 - rating)].map((_, idx) => (
		<TiStarOutline
			key={`empty + ${idx}`}
			size={28}
			className={styles.star}
		/>
	))
	const fullStars = [...Array(rating)].map((_, idx) => (
		<TiStarFullOutline
			key={`full + ${idx}`}
			size={28}
			className={styles.star}
		/>
	))

	const stars = [...fullStars, ...emptyStars]

	return <span className={styles.stars}>{stars}</span>
}

export default Stars
