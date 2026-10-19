import Stars from '../ui/stars/stars'
import styles from './testimonialCard.module.scss'

const TestimonialCard = ({name, age, text, profession, rating }) => {
	
	return (
		<div className={styles.card}>
			<div className={styles.wrapper}>
				<Stars rating={rating} />
				<h3 className={styles.title}>{name}</h3>
				<div className={styles.note}>
					<span>{profession},</span> <span>{age}</span>
				</div>
				<p className={styles.text}>{text}</p>
			</div>
		</div>
	)
}

export default TestimonialCard
