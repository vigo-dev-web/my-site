export async function GET(request: Request) {
	const users = [
		{ id: 1, name: 'Alice' },
		{ id: 2, name: 'Bob' }
	]
	return new Response(JSON.stringify(users), {
		status: 200,
		headers: { 'Content-Type': 'application/json' }
	})
}

export async function POST(request: Request) {
	const formData = await request.formData()
	const name = formData.get('name')
	const phone = formData.get('phone')
	const email = formData.get('email')
	const text = formData.get('text')

	try {
		// await validateInputs({ email, contents })
		// const info = await sendMail({ email, contents })

		return Response.json({ message: 'created' })
	} catch (reason) {
		const message = reason instanceof Error ? reason.message : 'Unexpected exception'

		return new Response(message, { status: 500 })
	}
}
