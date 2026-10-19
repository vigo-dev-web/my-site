'use client'
import { Form } from 'radix-ui'
import * as motion from 'motion/react-client'
import styles from './contactForm.module.scss'
import { titleAnimation } from '../../app/data/animation'
import MainButton from '../../app/components/ui/buttons/mainButton/mainButton'
import MaskedInputField from '../../app/components/ui/MaskedInputField/MaskedInputField'
import { getRequestInterface } from '../../../src/app/api/requestInterface'

const ContactForm = ({ ref }) => {
	const handleSubmit = async (formData) => {
		const data = {
			name: formData.get('name'),
			phone: formData.get('phone'),
			email: formData.get('email'),
			comment: formData.get('comment')
		}

		const requestInterface = getRequestInterface(data)

		try {
			const res = await fetch('/api/contact', requestInterface)
			const result = await res.json()

			if (res.ok) {
				console.log('Успех:', result.message)
			} else {
				console.error('Ошибка:', result.message)
			}
		} catch (error) {
			console.error('Ошибка сети:', error)
		}
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
					variants={titleAnimation}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
				>
					<span>Свяжитесь </span> со мной
				</motion.h2>
				<Form.Root
					className={styles.Root}
					action={handleSubmit}
				>
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
							<Form.Message
								className={styles.Message}
								match='patternMismatch'
							>
								Введите корректный телефон
							</Form.Message>
						</div>
						<Form.Control asChild>
							<MaskedInputField
								styles={styles}
								type='tel'
								required
								placeholder='+7(999)999-99-99'
								autoComplete='off'
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
						name='comment'
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
							<MainButton size='large'>Оставить заявку</MainButton>
						</Form.Submit>
					</div>
				</Form.Root>
			</div>
		</motion.section>
	)
}

export default ContactForm
