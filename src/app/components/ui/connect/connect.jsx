import { useScrollScreen } from 'app/utils/utils'
import MainButton from '../buttons/mainButton/mainButton'
import styles from './connect.module.scss'

const Connect = () => {
	const { toScroll } = useScrollScreen()

	return (
		<div className={styles.connect}>
			<MainButton onClick={() => toScroll(6650)} size='small'>Связаться со мной</MainButton>
		</div>
	)
}

export default Connect
