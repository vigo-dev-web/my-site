import nodemailer from 'nodemailer'

export const getEmailConfig = (data) => {
	return {
		transporter: nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS
			}
		}),
		emailOptions: {
			from: process.env.EMAIL_USER,
			to: process.env.EMAIL_REQUEST_USER,
			subject: `Новая заявка от ${data.name}`,
			text: `
					 Имя: ${data.name}
					 Телефон: ${data.phone}
					 Email: ${data.email}
					 Комментарий: ${data.comment}`
		}
	}
}
