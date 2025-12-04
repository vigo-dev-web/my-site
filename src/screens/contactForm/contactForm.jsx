'use client'
import { useState } from 'react'
import { useMotionValueEvent, useScroll } from 'motion/react'
import { Form } from 'radix-ui'
import styles from './contactForm.module.scss'
import * as motion from 'motion/react-client'
import { titleAnimation } from 'app/data/animation'
import MainButton from 'app/components/ui/buttons/mainButton/mainButton'

const ContactForm = ({ref}) => {
	const [translateValue, setTranslateValue] = useState()
	const { scrollY, scrollYProgress } = useScroll()

	useMotionValueEvent(scrollY, 'change', (latest) => {
		if (800 < latest < 2650) {
			setTranslateValue((scrollYProgress.current * 500 - 100) * 1.4)
		}
	})

	const handleClick = (e) => {
		e.preventDefault()
	}

	return (
		<motion.section
			ref={ref}
			className={styles.section}
			initial='hidden'
			whileInView='visible'
			viewport={{ amount: 0.2 }}
		>
			<div className={styles.container}>
				<motion.h2
					className={styles.title}
					custom={1}
					variants={titleAnimation}
				>
					<span>Свяжитесь </span> со мной
				</motion.h2>
				<Form.Root className={styles.Root}>
					<Form.Field
						className={styles.Field}
						name='name'
					>
						<div className={styles.FieldWrapper}>
							<Form.Label className={styles.Label}>Ваше имя:</Form.Label>
							<Form.Message
								className={styles.Message}
								match='valueMissing'
							>
								Введите ваше имя
							</Form.Message>
						</div>
						<Form.Control asChild>
							<input
								className={styles.Input}
								type='text'
								required
								autoComplete='off'
								placeholder='Имя'
							/>
						</Form.Control>
					</Form.Field>
					<Form.Field
						className={styles.Field}
						name='phone'
					>
						<div className={styles.FieldWrapper}>
							<Form.Label className={styles.Label}>Ваш телефон:</Form.Label>
							<Form.Message
								className={styles.Message}
								match='valueMissing'
							>
								Введите ваш телефон
							</Form.Message>
						</div>
						<Form.Control asChild>
							<input
								className={styles.Input}
								type='tel'
								required
								autoComplete='off'
								pattern='[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}'
								placeholder='+7(999) 999-99-99'
							/>
						</Form.Control>
					</Form.Field>
					<Form.Field
						className={styles.Field}
						name='email'
					>
						<div className={styles.FieldWrapper}>
							<Form.Label className={styles.Label}>Ваш email:</Form.Label>
							<Form.Message
								className={styles.Message}
								match='valueMissing'
							>
								Введите ваш email
							</Form.Message>
							<Form.Message
								className={styles.Message}
								match='typeMismatch'
							>
								Введите корректный email
							</Form.Message>
						</div>
						<Form.Control asChild>
							<input
								className={styles.Input}
								placeholder='example@example.com'
								type='email'
								required
								autoComplete='off'
							/>
						</Form.Control>
					</Form.Field>
					<Form.Field
						className={styles.Field}
						name='question'
					>
						<div className={styles.FieldWrapper}>
							<Form.Label className={styles.Label}>Ваш комментарий к заявке:</Form.Label>
						</div>
						<Form.Control asChild>
							<textarea className={styles.Textarea} />
						</Form.Control>
					</Form.Field>
					<div className={styles.buttonWrapper}>
						<Form.Submit asChild>
							<MainButton
								onClick={(e) => handleClick(e)}
								size='large'
							>
								Оставить заявку
							</MainButton>
						</Form.Submit>
					</div>
				</Form.Root>
			</div>
		</motion.section>
	)
}

export default ContactForm
