import clsx from 'clsx'
import styles from './darkButton.module.scss'

const DarkButton = ({ children, isLink, size, link }) => {
	return isLink ? (
		<a
			className={clsx(styles.button, { [styles.small]: size === 'small' }) || styles.button}
			href={link}
		>
			<span>{children}</span>
		</a>
	) : (
		<button className={clsx(styles.button, { [styles.small]: size === 'small' }) || styles.button}>
			<span>{children}</span>
		</button>
	)
}

export default DarkButton
