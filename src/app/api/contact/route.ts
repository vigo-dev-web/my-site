import { NextResponse } from 'next/server'
import { getEmailConfig } from '../../constants/mailOptions'

export async function POST(req) {
	try {
		const body = await req.json()
		if (!body.email || !body.name || !body.phone) {
			return NextResponse.json({ success: false, message: 'Заполните обязательные поля' }, { status: 400 })
		}

		const { transporter, emailOptions } = getEmailConfig(body)

		await transporter.sendMail(emailOptions)

		return NextResponse.json({ success: true, message: 'Сообщение отправлено!' }, { status: 200 })
	} catch (error) {
		console.error('Ошибка на сервере:', error)
		return NextResponse.json(
			{
				success: false,
				message: 'Ошибка при отправке почты',
			},
			{ status: 500 }
		)
	}
}
