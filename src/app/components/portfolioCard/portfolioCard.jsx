'use client'
import Image from 'next/image'
import * as motion from 'motion/react-client'
import styles from './portfolioCard.module.scss'
import MainButton from '../ui/buttons/mainButton/mainButton'
import TechnologyBadge from '../ui/technologyBadge/technologyBadge'
import { useMediaQuery } from '../../../app/hooks/useMediaQuery'

const cardVariants = {
	hidden: (index) => ({
		opacity: 0,
		x: index % 2 === 0 ? -400 : 400
	}),
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			type: 'tween',
			ease: 'easeInOut',
			duration: 0.4
		}
	}
}

const PortfolioCard = ({ title, description, image, alt, technology, projectLink, index }) => {
	const isMatches = useMediaQuery("(max-width: 768px)")

	return (
		<motion.div
			className={styles.card}
			variants={isMatches ? {} : cardVariants}
			custom={index}
			initial={isMatches ? { opacity: 1, x: 0 } : 'hidden'}
			whileInView={isMatches ? { opacity: 1, x: 0 } : 'visible'}
			viewport={{ once: true, amount: 0.1 }}
		>
			<div className={styles.wrapper}>
				<div className={styles.imgContainer}>
					<Image
						className={styles.img}
						src={image}
						fill={true}
						alt={alt}
					/>
				</div>
				<div className={styles.contentWrapper}>
					<h3 className={styles.title}>{title}</h3>
					<p className={styles.text}>
						<span className={styles.subTitle}>Описание проекта:</span> {description}
					</p>
					<div className={styles.stackWrapper}>
						<span className={styles.subTitle}>Технологии:</span>
						{technology.map((item, index) => (
							<TechnologyBadge
								name={item}
								key={index}
							/>
						))}
					</div>
					<div className={styles.btnWrapper}>
							<MainButton
								isLink={true}
								link={projectLink}
							>
								Смотреть проект
							</MainButton>
					</div>
				</div>
			</div>
		</motion.div>
	)
}

export default PortfolioCard
