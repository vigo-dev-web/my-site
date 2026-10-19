import clsx from 'clsx'
import styles from './mainButton.module.scss'

const MainButton = ({ children, onClick, size, isLink, link }) => {
	return (
		<>
			{isLink ? (
				<a
					href={link}
					className={clsx(styles.button, { [styles.large]: size === 'large' }) || styles.button}
				>
					{children}
				</a>
			) : (
				<button
					onClick={onClick}
					className={clsx(styles.button, { [styles.large]: size === 'large' }) || styles.button}
				>
					{children}
				</button>
			)}
		</>
	)
}

export default MainButton
