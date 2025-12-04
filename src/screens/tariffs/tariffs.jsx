import * as motion from 'motion/react-client'
import { tariffs } from '../../app/data/tariff'
import TariffCard from '../../app/components/tariffCard/tarifCard'
import styles from './tariffs.module.scss'
import { titleAnimation } from '../../app/data/animation'

const Tariffs = ({ref}) => {
	return (
		<motion.section
			ref={ref}
			initial='hidden'
			whileInView='visible'
			viewport={{ amount: 0.2 }}
			className={styles.section}
		>
			<div className={styles.container}>
				<motion.h2
					custom={1}
					variants={titleAnimation}
					viewport={{ once: true }}
					className={styles.title}
				>
					Выгодные предложения для <span>Тебя</span>
				</motion.h2>
				<div className={styles.cardContainer}>
					<TariffCard
						dark={true}
						radius={'left'}
						title={tariffs[0].title}
						cost={tariffs[0].cost}
						discountCost={tariffs[0].discountCost}
					/>
					<TariffCard
						dark={true}
						title={tariffs[1].title}
						cost={tariffs[1].cost}
						discountCost={tariffs[1].discountCost}
					/>
					<TariffCard
						title={tariffs[2].title}
						cost={tariffs[2].cost}
						discountCost={tariffs[2].discountCost}
					/>
					<TariffCard
						dark={true}
						radius={'right'}
						title={tariffs[3].title}
						cost={tariffs[3].cost}
						discountCost={tariffs[3].discountCost}
					/>
				</div>
			</div>
		</motion.section>
	)
}

export default Tariffs
