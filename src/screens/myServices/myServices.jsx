import * as motion from 'motion/react-client'
import { useState } from 'react'
import { services } from '../../app/data/services'
import AccordionItem from '../../app/components/ui/accordionItem/accordionItem'
import styles from './myServices.module.scss'
import { titleAnimation } from '../../app/data/animation'

const MyServices = ({ref}) => {
	const [openId, setId] = useState(null)

	const handleClick = (index) => {
		index === openId ? setId(null) : setId(index)
	}

	return (
		<motion.section
			ref={ref}
			className={styles.section}
			initial='hidden'
			whileInView='visible'
			viewport={{ amount: 0.2 }}
		>
			<motion.div
				className={styles.container}
				layoutId='accordion'
				layout
			>
				<motion.h2
					className={styles.title}
					custom={1}
					variants={titleAnimation}
				>
					Мои <span>кейсы</span>
				</motion.h2>
				<div className={styles.wrapper}>
					{services.map((item, index) => (
						<AccordionItem
							key={item.id}
							{...item}
							index={index}
							isOpen={index === openId}
							onClick={() => handleClick(index)}
						/>
					))}
				</div>
			</motion.div>
		</motion.section>
	)
}

export default MyServices
