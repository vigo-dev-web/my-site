import * as motion from 'motion/react-client'
import styles from './cta.module.scss'
import WhiteButton from '../buttons/whiteButton/whiteButton'
import { useScrollScreen } from 'app/utils/utils'

const Cta = ({ refForm, children, title, subtitle }) => {
	const { scrollObject } = useScrollScreen()
	return (
		<motion.section
			className={styles.section}
			initial='hidden'
			whileInView='visible'
			viewport={{ amount: 0.2 }}
		>
			<div className={styles.container}>
				<div className={styles.card}>
					<div className={styles.wrapper}>
						<h3 className={styles.title}>{title}</h3>
						<p className={styles.text}>{subtitle}</p>
						<div className={styles.btnContainer}>
							<WhiteButton onClick={() => refForm.scrollIntoView(scrollObject)}>{children}</WhiteButton>
						</div>
					</div>
				</div>
			</div>
		</motion.section>
	)
}

export default Cta
