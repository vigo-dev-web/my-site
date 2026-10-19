import * as motion from 'motion/react-client'
import { menu } from '../../../data/menu'
import styles from './nav.module.scss'
import MenuUnderline from '../menuUnderline/menuUnderLine'

const Nav = ({ activeIndex, handleScroll }) => {	
	return (
		<nav className={styles.nav}>
			<ul className={styles.list}>
				{menu.map((item, idx) => {
					return (
						<motion.li
							key={item.id}
							onClick={(e) => handleScroll(e, idx)}
							style={{ padding: '0', display: 'flex', justifyContent: 'center', position: 'relative' }}
							initial={{ color: '#fff' }}
							animate={{ color: activeIndex === idx ? '#0085fa' : '#fff' }}
						>
							<a href={'#'}>
								{activeIndex === idx && <MenuUnderline />}
								{item.name}
							</a>
						</motion.li>
					)
				})}
			</ul>
		</nav>
	)
}

export default Nav
