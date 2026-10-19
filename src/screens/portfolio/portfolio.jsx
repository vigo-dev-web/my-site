'use client'
import * as motion from 'motion/react-client'
import styles from './portfolio.module.scss'
import { titleAnimation } from '../../app/data/animation'
import projects from '../../app/data/projects'
import PortfolioCard from '../../app/components/portfolioCard/portfolioCard'

const Portfolio = ({ ref }) => {
	return (
		<motion.section
			ref={ref}
			className={styles.section}
			initial='hidden'
			whileInView='visible'
			viewport={{ amount: 0.2 }}
		>
			<p className={styles.note}>
				Выбери сайт - <br /> который подойдет тебе
			</p>
			<motion.div
				className={styles.container}
				layoutId='accordion'
				layout
			>
				<motion.h2
					className={styles.title}
					variants={titleAnimation}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
				>
					<span>Мое</span> портфолио
				</motion.h2>
				<div className={styles.wrapper}>
					{projects.map((item, index) => (
						<PortfolioCard
							key={item.id}
							index={index}
							{...item}
						/>
					))}
				</div>
			</motion.div>
		</motion.section>
	)
}

export default Portfolio
