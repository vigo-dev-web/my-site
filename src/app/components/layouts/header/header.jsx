'use client'
import { useState } from 'react'
import Logo from '../../ui/logo/logo'
import Nav from '../../ui/nav/nav'
import styles from './header.module.scss'
import MobileNavLinks from '../../ui/mobileNav/mobileNavLinks'

const Header = ({ activeIndex, handleScroll }) => {
	const [isActiveMenu, setIsActiveMenu] = useState(false)

	const handleOpenMenu = () => {
		setIsActiveMenu((prev) => !prev)
	}

	return (
		<>
			{isActiveMenu && <MobileNavLinks handleClose={handleOpenMenu} handleScroll={handleScroll} />}
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
							<span className={styles.stripe_one}></span>
							<span className={styles.stripe_two}></span>
							<span className={styles.stripe_three}></span>
						</div>
					</div>
				</div>
			</header>
			<header className={styles.header}>
				<div className={styles.container}>
					<div className={styles.wrapper}>
						<Logo />
						<Nav
							activeIndex={activeIndex}
							handleScroll={handleScroll}
						/>
						<a className={styles.phone}>+7(999)999-99-99</a>
					</div>
				</div>
			</header>
		</>
	)
}

export default Header