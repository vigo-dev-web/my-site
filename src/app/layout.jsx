import localFont from 'next/font/local'
import './globals.scss'

const ManropeSans = localFont({
	src: './fonts/Manrope-VariableFont_wght.ttf',
	variable: '--font-manrope-sans',
	weight: '300 400 500 600 800'
})
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900'
})

export const metadata = {
	title: 'IT-решения | Разработка сайтов',
	description: 'Персональный сайт Разработчика'
}

export default function RootLayout({ children }) {
	return (
		<html lang='ru'>
			<body className={`${ManropeSans.variable} ${geistMono.variable}`}>{children}</body>
		</html>
	)
}
