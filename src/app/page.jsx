'use client'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'motion/react'
import Header from './components/layouts/header/header'
import Footer from './components/layouts/footer/footer'
import Copyright from './components/ui/copyright/copyright'
import Testimonials from '../screens/testimonials/testimonials'
import Contacts from './components/ui/contacts/contacts'
import GoTo from './components/ui/goTo/goTo'
import ArrowDown from './components/ui/arrowDown/arrowDown'
import Tariffs from '../screens/tariffs/tariffs'
import MyServices from '../screens/myServices/myServices'
import Achievements from '../screens/achievements/achievements'
import Benefits from '../screens/benefits/benefits'
import About from '../screens/about/about'
import ContactForm from 'screens/contactForm/contactForm'
import Portfolio from 'screens/portfolio/portfolio'
import Cta from './components/ui/cta/cta'
import styles from './page.module.scss'
import { cta } from './data/cta'
import { useScrollScreen } from './utils/utils'

export default function Home() {
	const [activeIndex, setActiveIndex] = useState(0)
	const { scrollObject } = useScrollScreen()

	const aboutRef = useRef(null)
	const benefitsRef = useRef(null)
	const serviceRef = useRef(null)
	const portfolioRef = useRef(null)
	const testimonialsRef = useRef(null)
	const tarifRef = useRef(null)
	const formRef = useRef(null)

	const isViewAbout = useInView(aboutRef)
	const isViewBenefits = useInView(benefitsRef, { margin: '-380px' })
	const isViewService = useInView(serviceRef, { amount: 0.3 })
	const isViewPortfolio = useInView(portfolioRef, { amount: 0.3 })
	const isViewTestimonials = useInView(testimonialsRef, { amount: 0.3 })
	const isViewTarif = useInView(tarifRef, { amount: 0.3 })

	const sections = [
		{ ref: aboutRef, condition: isViewAbout },
		{ ref: benefitsRef, condition: isViewBenefits },
		{ ref: serviceRef, condition: isViewService },
		{ ref: portfolioRef, condition: isViewPortfolio },
		{ ref: testimonialsRef, condition: isViewTestimonials },
		{ ref: tarifRef, condition: isViewTarif }
	]

	useEffect(() => {
		const activeSection = sections.find((section) => section.condition)
		const activeIndex = sections.findIndex((section) => section.condition)
		if (activeSection) setActiveIndex(activeIndex)
	}, [isViewAbout, isViewBenefits, isViewService, isViewPortfolio, isViewTestimonials, isViewTarif])

	const handleClick = (event, idx) => {
		event.preventDefault()
		sections[idx].ref.current.scrollIntoView(scrollObject)
	}

	return (
		<div className={styles.page}>
			<Header
				activeIndex={activeIndex}
				handleClick={handleClick}
			/>
			<GoTo setIdx={setActiveIndex} />
			<ArrowDown />
			<main className={styles.main}>
				<About ref={aboutRef} refForm={formRef.current} />
				<Achievements />
				<Benefits ref={benefitsRef} />
				<Cta
					refForm={formRef.current}
					title={cta[0].title}
					subtitle={cta[0].subtitle}
				>
					{cta[0].button}
				</Cta>
				<MyServices ref={serviceRef} />
				<Portfolio ref={portfolioRef} />
				<Testimonials ref={testimonialsRef} />
				<Cta
					refForm={formRef.current}
					title={cta[1].title}
					subtitle={cta[1].subtitle}
				>
					{cta[1].button}
				</Cta>
				<Tariffs ref={tarifRef} />
				<ContactForm ref={formRef} />
			</main>
			<Footer>
				<Contacts />
				<Copyright />
			</Footer>
		</div>
	)
}
