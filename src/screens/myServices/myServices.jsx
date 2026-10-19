import * as motion from 'motion/react-client'
import { motion as framerMotion } from 'framer-motion'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import { Accordion } from 'radix-ui'
import { services } from '../../app/data/services'
import styles from './myServices.module.scss'
import { myServicesAnimation, titleAnimation } from '../../app/data/animation'

const MotionAccordionItem = framerMotion(Accordion.Item)

const MyServices = ({ ref }) => {
	return (
		<motion.section
			ref={ref}
			className={styles.section}
			initial='hidden'
			whileInView='visible'
			viewport={{ amount: 0.2, once: true }}
		>
			<motion.div className={styles.container}>
				<motion.h2
					className={styles.title}
					variants={titleAnimation}
				>
					Мои <span>кейсы</span>
				</motion.h2>
				<div className={styles.wrapper}>
					<motion.div
						variants={myServicesAnimation.containerVariants}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.2 }}
					>
						<Accordion.Root
							className={styles.Root}
							type='single'
							collapsible
						>
							{services.map(({ title, text }, index) => (
								<MotionAccordionItem
									key={index}
									className={styles.Item}
									value={`item-${index + 1}`}
									variants={myServicesAnimation.itemVariants}
								>
									<Accordion.Header className={styles.Header}>
										<Accordion.Trigger className={styles.Trigger}>
											<div className={styles.TitleWrapper}>{title}</div>
											<div className={styles.ChevronWrapper}>
												<ChevronDownIcon
													className={styles.Chevron}
													aria-hidden
												/>
											</div>
										</Accordion.Trigger>
									</Accordion.Header>
									<Accordion.Content className={styles.Content}>
										<div className={styles.ContentText}>{text}</div>
									</Accordion.Content>
								</MotionAccordionItem>
							))}
						</Accordion.Root>
					</motion.div>
				</div>
			</motion.div>
		</motion.section>
	)
}

export default MyServices
