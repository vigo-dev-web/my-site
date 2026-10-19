import Link from 'next/link'
import styles from './mobileNavLink.module.scss'

const mobileNav = [
	{ id: '00', title: 'Обо мне', path: '#' },
	{ id: '01', title: 'Преимущества', path: '#' },
	{ id: '02', title: 'Мои кейсы', path: '#' },
	{ id: '03', title: 'Мое Портфолио', path: '#' },
	{ id: '04', title: 'Отзывы', path: '#' },
	{ id: '05', title: 'Тарифы', path: '#' }
]

const MobileNavLinks = ({ handleClose, handleScroll }) => {
	return (
		<nav className={`${styles.wrapper} ${styles._open}`}>
			<button
				className={styles.close}
				onClick={handleClose}
			>
				<span className={styles.stripe_one}></span>
				<span className={styles.stripe_two}></span>
			</button>
			{mobileNav.map((item, index) => (
				<Link
					href={''}
					key={item.id}
					className={styles.link}
					onClick={(e) => {
						handleScroll(e, index)
						handleClose()
					}}
				>
					{item.title}
				</Link>
			))}
		</nav>
	)
}

export default MobileNavLinks
