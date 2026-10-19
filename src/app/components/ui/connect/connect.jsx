import { useScrollScreen } from '../../../hooks/useScrollScreen'
import MainButton from '../buttons/mainButton/mainButton'
import styles from './connect.module.scss'

const Connect = ({ refForm }) => {
	const { scrollObject } = useScrollScreen()

	return (
		<div className={styles.connect}>
			<MainButton
				onClick={() => refForm.scrollIntoView(scrollObject)}
				size='small'
			>
				Связаться со мной
			</MainButton>
		</div>
	)
}

export default Connect
