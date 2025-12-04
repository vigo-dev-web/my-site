import clsx from 'clsx'
import styles from './mainButton.module.scss'

const MainButton = ({ children, onClick, size }) => {
	return (
		<button
			onClick={onClick}
			className={clsx(styles.button, { [styles.large]: size === 'large' }) || styles.button}
		>
			{children}
		</button>
	)
}

export default MainButton
