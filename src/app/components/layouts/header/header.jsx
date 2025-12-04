'use client'
import { useLayoutEffect, useState } from 'react'
import Connect from '../../ui/connect/connect'
import Logo from '../../ui/logo/logo'
import Nav from '../../ui/nav/nav'
import styles from './header.module.scss'
import MobileNavLinks from '../../ui/mobileNav/mobileNavLinks'

const Header = ({ activeIndex, handleClick }) => {
	const [isMobile, setIsMobile] = useState(false)
	const [isActiveMenu, setIsActiveMenu] = useState(false)

	const logWidth = () => {
		if (window.innerWidth <= 992) {
			setIsMobile(true)
		} else {
			setIsMobile(false)
		}
	}
	const handleOpenMenu = () => {
		document.body.classList.add('close')
		setIsOpenMenu((prev) => !prev)
	}

	useLayoutEffect(() => {
		window.addEventListener('resize', logWidth)
		return () => {
			window.removeEventListener('resize', logWidth)
		}
	}, [])

	return isMobile ? (
		<>
			{isActiveMenu ? (
				<MobileNavLinks onClick={handleOpenMenu} />
			) : (
				<header className={styles.header_mobile}>
					<div className={styles.container}>
						<div className={styles.wrapper}>
							<Logo />
							<div
								onClick={() => {
									setIsActiveMenu((prev) => !prev)
								}}
								className={styles.stripes}
							>
								<span className={isActiveMenu ? `${styles.stripe_active_one}` : styles.stripe_one}></span>
								<span className={isActiveMenu ? `${styles.stripe_active_two}` : styles.stripe_two}></span>
								<span className={isActiveMenu ? `${styles.stripe_active_three}` : styles.stripe_three}></span>
							</div>
						</div>
					</div>
				</header>
			)}
		</>
	) : (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<>
						<Logo />
						<Nav
							activeIndex={activeIndex}
							handleScroll={handleClick}
						/>
						<Connect />
					</>
				</div>
			</div>
		</header>
	)
}

export default Header
