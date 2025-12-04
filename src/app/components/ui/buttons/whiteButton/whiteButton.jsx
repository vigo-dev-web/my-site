import styles from './whiteButton.module.scss'

const WhiteButton = ({onClick, children, isLink }) => {
	return isLink ? (
		<a
			className={styles.button}
			href=''
		>
			{children}
		</a>
	) : (
		<button onClick={onClick} className={styles.button}>{children}</button>
	)
}

export default WhiteButton
