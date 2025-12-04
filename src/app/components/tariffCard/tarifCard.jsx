import DarkButton from '../ui/buttons/darkButton/darkButton'
import WhiteButton from '../ui/buttons/whiteButton/whiteButton'
import styles from './tarifCard.module.scss'

const TariffCard = ({ title, cost, discountCost, dark, radius }) => {
	const getStyles = () => {
		if (dark) {
			if (radius === 'right') return `${styles.cardDark} ${styles.rightRadius}`
			else if (radius === 'left') return `${styles.cardDark} ${styles.leftRadius}`
			else return styles.cardDark
		} else {
			return styles.card
		}
	}
	return (
		<div className={getStyles()}>
			<div className={dark ? styles.wrapper : `${styles.wrapper} ${styles.border}`}>
				<div className={styles.header}>
					<h4 className={styles.title}>{title}</h4>
					<p className={styles.cost}> 
						{discountCost} <span>&#8381;</span>
					</p>
					<span className={styles.discountCost}>{cost}</span> <span>&#8381;</span>
					{dark ? '' : <p className={styles.note}>популярный</p>}
				</div>
				<ul className={styles.list}>
					<li className={styles.item}>
						<span className={dark ? styles.circleLight : styles.circle}>&#10004; </span>Экспертиза проекта
					</li>
					<li className={styles.item}>
						<span className={dark ? styles.circleLight : styles.circle}>&#10004; </span>Выбор инструмента
					</li>
					<li className={styles.item}>
						<span className={dark ? styles.circleLight : styles.circle}>&#10004; </span>Интерактивные элементы
					</li>
					<li className={styles.item}>
						<span className={dark ? styles.circleLight : styles.circle}>&#10004; </span>Сдача проекта
					</li>
				</ul>

				{dark ? (
					<div className={styles.btnDarkContainer}>
						<DarkButton isLink={true}>Заказывай</DarkButton>
					</div>
				) : (
					<div className={styles.btnContainer}>
						<WhiteButton isLink={true}>Заказывай</WhiteButton>
					</div>
				)}
			</div>
		</div>
	)
}

export default TariffCard
