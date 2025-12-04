import * as motion from 'motion/react-client'
import { FaHandHoldingHeart } from 'react-icons/fa'
import { FaSackDollar } from 'react-icons/fa6'
import { IoCalendarSharp } from 'react-icons/io5'
import { MdWorkHistory } from 'react-icons/md'
import { useMediaQuery } from 'react-responsive'
import styles from './achievements.module.scss'
import Counter from '../../app/components/ui/counter/counter'
import { titleAnimation } from '../../app/data/animation'

const Achievements = () => {
	const isSTablet = useMediaQuery({
		query: '(max-width: 767.98px)'
	})

	return (
		<motion.section
			className={styles.section}
			initial='hidden'
			whileInView='visible'
			viewport={{ amount: 0.2 }}
		>
			<div className={styles.container}>
				<motion.h2
					className={styles.title}
					custom={1}
					variants={titleAnimation}
				>
					Мои <span>достижения</span>
				</motion.h2>
				<motion.div className={styles.wrapper}>
					<div className={styles.itemWrapper}>
						<IoCalendarSharp
							size={isSTablet ? 59 : 73}
							color='#fff'
						/>
						<div>
							<Counter keyFrames={30} />
							<p>лет сам пришел в IT</p>
						</div>
					</div>
					<div className={styles.itemWrapper}>
						<FaHandHoldingHeart
							size={isSTablet ? 63 : 77}
							color='#fff'
						/>
						<div>
							<Counter keyFrames={20} />
							<p>благодарных клиентов</p>
						</div>
					</div>
					<div className={styles.itemWrapper}>
						<FaSackDollar
							size={isSTablet ? 59 : 73}
							color='#fff'
						/>
						<div>
							<Counter keyFrames={40} />
							<p>реализованных проектов</p>
						</div>
					</div>
					<div className={styles.itemWrapper}>
						<MdWorkHistory
							size={isSTablet ? 63 : 77}
							color='#fff'
						/>

						<div>
							<Counter keyFrames={3} />
							<p>коммерческого опыта</p>
						</div>
					</div>
				</motion.div>
			</div>
		</motion.section>
	)
}

export default Achievements
