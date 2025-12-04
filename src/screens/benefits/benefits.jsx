'use client'
import * as motion from 'motion/react-client'
import styles from './benefits.module.scss'
import { titleAnimation } from '../../app/data/animation'
import { useState } from 'react'
import { useMotionValueEvent, useScroll } from 'motion/react'

const Benefits = ({ref}) => {
	const [translateValue, setTranslateValue] = useState()
	const { scrollY, scrollYProgress } = useScroll()	

	useMotionValueEvent(scrollY, 'change', (latest) => {
		if( 800 < latest < 2650  ) {
		setTranslateValue((scrollYProgress.current*500 - 100)* (1.4))
		}
	})

	return (
		<motion.section
			ref={ref}
			className={styles.section}
			initial='hidden'
			whileInView='visible'
			viewport={{ amount: 0.2 }}
		>
			<p className={styles.note}>
				Рвасскажу тебе - <br /> почему нам стоит поработать
			</p>
			<div className={styles.container}>
				<motion.h2
					className={styles.title}
					custom={1}
					variants={titleAnimation}
				>
					<span>Преимущества работы со</span> мной
				</motion.h2>
				<div className={styles.wrapper}>
					<motion.div
						className={styles.left}
						style={{ position: 'relative', translateY: `${translateValue}px` }}
					>
						<div className={styles.body}>
							<ol className={styles.list}>
								<li className={styles.item}>
									<h5 className={styles.itemTitle}>Четкое соблюдение сроков</h5>
									<p className={styles.itemText}>
										<span className={styles.itemSubtitle}></span>
										<span className={styles.itemNote}></span>
										Прежде всего, каждый проект мы разбиваем на четкие этапы: разработка технического задания, создание
										дизайна, верстка, программирование и тестирование. Для каждого этапа устанавливаются конкретные
										сроки, которые фиксируются в договоре и техническом задании. Мы работаем по Agile-методологии, что
										позволяет вам видеть прогресс на каждом шаге и оперативно вносить корректировки без риска срыва
										общих сроков.
									</p>
								</li>
								<li className={styles.item}>
									<h5 className={styles.itemTitle}>На связи 24/7</h5>
									<p className={styles.itemText}>
										Прежде всего, каждый проект мы разбиваем на четкие этапы: разработка технического задания, создание
										дизайна, верстка, программирование и тестирование. Для каждого этапа устанавливаются конкретные
										сроки, которые фиксируются в договоре и техническом задании.
									</p>
								</li>
								<li className={styles.item}>
									<h5 className={styles.itemTitle}>Индивидуальный подход к клиенту</h5>
									<p className={styles.itemText}>
										Мы создаем сайты, полностью соответствующие вашим уникальным бизнес-задачам, тщательно анализируя
										целевую аудиторию и конкурентную среду. Каждый проект начинается с глубокого погружения в специфику
										вашей ниши, чтобы разработать по-настоящему персонализированное решение. Вместо шаблонных решений мы
										предлагаем индивидуальный дизайн, особую функциональность и маркетинговую стратегию, созданные
										исключительно под ваши потребности.
									</p>
								</li>
							</ol>
						</div>
					</motion.div>
					<div className={styles.right}>
						<div className={styles.body}>
							<ol className={styles.list}>
								<li className={styles.item}>
									<h5 className={styles.itemTitle}>Поддержка готовых продуктов</h5>
									<p className={styles.itemText}>
										Каждый проект начинается с глубокого погружения в специфику вашей ниши, чтобы разработать
										по-настоящему персонализированное решение. Вместо шаблонных решений мы предлагаем индивидуальный
										дизайн, особую функциональность и маркетинговую стратегию, созданные исключительно под ваши
										потребности.
									</p>
								</li>
								<li className={styles.item}>
									<h5 className={styles.itemTitle}>Скидки и акции для постоянных клиентов</h5>
									<p className={styles.itemText}>
										Разработка начинается с глубокого анализа вашего бизнеса, целевой аудитории и конкурентов, чтобы
										создать эффективную стратегию. Затем мы разрабатываем уникальный дизайн, который точно отражает ваш
										бренд и цепляет клиентов, согласовывая каждый этап с вами.
									</p>
								</li>
								<li className={styles.item}>
									<h5 className={styles.itemTitle}>Позитивный настрой во время работы</h5>
									<p className={styles.itemText}>
										После утверждения дизайна наши программисты создают адаптивный и функциональный сайт с учетом всех
										технических требований и SEO-оптимизации. Мы проводим тщательное тестирование на всех устройствах и
										браузерах, чтобы обеспечить безупречную работу перед запуском. В финале вы получаете готовый сайт
										«под ключ» с инструкцией по управлению и рекомендациями по продвижению.
									</p>
								</li>
							</ol>
						</div>
					</div>
				</div>
			</div>
		</motion.section>
	)
}

export default Benefits
