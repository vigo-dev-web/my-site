'use client'
import * as motion from 'motion/react-client'
import { useEffect, useState, useRef } from 'react'
import { useScroll, useTransform } from 'motion/react'
import styles from './benefits.module.scss'
import { titleAnimation } from '../../app/data/animation'

const Benefits = ({ ref }) => {
	const targetRef = useRef(null)

	const setRefs = (element) => {
		targetRef.current = element
		if (!ref) return
		if (typeof ref === 'function') {
			ref(element)
		} else {
			ref.current = element
		}
	}
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ['start end', 'end center']
	})
	const [isMobile, setIsMobile] = useState(false)

	const startP = isMobile ? 0 : -50
	const finishP = isMobile ? 0 : 170
	const translateY = useTransform(scrollYProgress, [0, 0.8], [startP, finishP])

	useEffect(() => {
		const checkScreenSize = () => {
			window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false)
		}
		checkScreenSize()
		window.addEventListener('resize', checkScreenSize)
		return () => {
			window.removeEventListener('resize', checkScreenSize)
		}
	}, [])

	return (
		<motion.section
			ref={setRefs}
			className={styles.section}
			initial='hidden'
			whileInView='visible'
			viewport={{ amount: 0.2 }}
		>
			<p className={styles.note}>
				Расскажу тебе - <br /> почему нам стоит поработать
			</p>
			<div className={styles.container}>
				<motion.h2
					className={styles.title}
					variants={titleAnimation}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
				>
					<span>Преимущества работы со</span> мной
				</motion.h2>
				<div className={styles.wrapper}>
					<motion.div
						className={styles.left}
						style={{ translateY }}
					>
						<div className={styles.body}>
							<ul className={styles.list}>
								<li className={styles.item}>
									<h3 className={styles.itemTitle}>
										<span className={styles.itemMark}>1</span>Четкое соблюдение сроков
									</h3>
									<p className={styles.itemText}>
										<span className={styles.itemNote}></span>
										Прежде всего, каждый проект мы разбиваем на четкие этапы: разработка технического задания, создание
										дизайна, верстка, программирование и тестирование. Для каждого этапа устанавливаются конкретные
										сроки, которые фиксируются в договоре и техническом задании. Мы работаем по Agile-методологии, что
										позволяет вам видеть прогресс на каждом шаге и оперативно вносить корректировки без риска срыва
										общих сроков.
									</p>
								</li>
								<li className={styles.item}>
									<h3 className={styles.itemTitle}>
										<span className={styles.itemMark}>2</span>На связи 24/7
									</h3>
									<p className={styles.itemText}>
										Прежде всего, каждый проект мы разбиваем на четкие этапы: разработка технического задания, создание
										дизайна, верстка, программирование и тестирование. Для каждого этапа устанавливаются конкретные
										сроки, которые фиксируются в договоре и техническом задании.
									</p>
								</li>
								<li className={styles.item}>
									<h3 className={styles.itemTitle}>
										<span className={styles.itemMark}>3</span>Индивидуальный подход к клиенту
									</h3>
									<p className={styles.itemText}>
										Мы создаем сайты, полностью соответствующие вашим уникальным бизнес-задачам, тщательно анализируя
										целевую аудиторию и конкурентную среду. Каждый проект начинается с глубокого погружения в специфику
										вашей ниши, чтобы разработать по-настоящему персонализированное решение. Вместо шаблонных решений мы
										предлагаем индивидуальный дизайн, особую функциональность и маркетинговую стратегию, созданные
										исключительно под ваши потребности.
									</p>
								</li>
							</ul>
						</div>
					</motion.div>
					<div className={styles.right}>
						<div className={styles.body}>
							<ul className={styles.list}>
								<li className={styles.item}>
									<h3 className={styles.itemTitle}>
										<span className={styles.itemMark}>4</span>Поддержка готовых продуктов
									</h3>
									<p className={styles.itemText}>
										Каждый проект начинается с глубокого погружения в специфику вашей ниши, чтобы разработать
										по-настоящему персонализированное решение. Вместо шаблонных решений мы предлагаем индивидуальный
										дизайн, особую функциональность и маркетинговую стратегию, созданные исключительно под ваши
										потребности.
									</p>
								</li>
								<li className={styles.item}>
									<h3 className={styles.itemTitle}>
										<span className={styles.itemMark}>5</span>Выгодные условия для постоянных клиентов
									</h3>
									<p className={styles.itemText}>
										Разработка начинается с глубокого анализа вашего бизнеса, целевой аудитории и конкурентов, чтобы
										создать эффективную стратегию. Затем мы разрабатываем уникальный дизайн, который точно отражает ваш
										бренд и цепляет клиентов, согласовывая каждый этап с вами.
									</p>
								</li>
								<li className={styles.item}>
									<h3 className={styles.itemTitle}>
										<span className={styles.itemMark}>6</span>Позитивный настрой во время работы
									</h3>
									<p className={styles.itemText}>
										После утверждения дизайна наши программисты создают адаптивный и функциональный сайт с учетом всех
										технических требований и SEO-оптимизации. Мы проводим тщательное тестирование на всех устройствах и
										браузерах, чтобы обеспечить безупречную работу перед запуском. В финале вы получаете готовый сайт
										«под ключ» с инструкцией по управлению и рекомендациями по продвижению.
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</motion.section>
	)
}

export default Benefits
