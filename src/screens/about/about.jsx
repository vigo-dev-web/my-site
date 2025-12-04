'use client'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import styles from './about.module.scss'
import img from '../../../public/img/main.jpg'
import MainButton from 'app/components/ui/buttons/mainButton/mainButton'
import { useScrollScreen } from 'app/utils/utils'

const About = ({ ref, refForm }) => {
	const { scrollObject } = useScrollScreen()

	return (
		<section
			ref={ref}
			className={styles.section}
		>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<div className={styles.text}>
						<p className={styles.preTitle}>Всем привет,</p>
						<h1 className={styles.title}>
							Меня зовут <span>Василий</span>
						</h1>
						<TypeAnimation
							preRenderFirstString={true}
							sequence={['Я - разработчик', 1000, 'Я - помогаю бизнесу', 1500, 'Я - создам Вам сайт', 1500]}
							wrapper='span'
							cursor={false}
							className={styles.type}
							speed={50}
							repeat={Infinity}
						/>
						<div className={styles.textWrapper}>
							<p>
								Я разработчик с более чем 3-летним опытом. Специализируюсь на React, TypeScript. <br /> Моя цель -
								помочь тебе реализовать проадющий сайт.
							</p>
							<p>
								Да, да я сам пришел в эту сферу после 30 лет. <br />
								Моя техническая экспертиза и навыки коммуникации помогут оказаться здесь или прыгнуть еще выше. Листай
								ниже и я тебе обьясню почему нам стоит поработать . . .
							</p>
							<div className={styles.btnContainer}>
								<MainButton
									onClick={() => refForm.scrollIntoView(scrollObject)}
									size={'large'}
								>
									Связаться со мной
								</MainButton>
							</div>
						</div>
					</div>
					<div className={styles.img_container}>
						<Image
							src={img}
							alt='разработчик'
							width={530}
							className={styles.img}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
