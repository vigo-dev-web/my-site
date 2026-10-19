'use client'
import { memo } from 'react'
import { useIMask } from 'react-imask'

const MaskedInputField = memo(({ styles, ...props }) => {
	const { ref } = useIMask({
		mask: '+{7}(000)000-00-00',
		lazy: true
	})

	return (
		<input
			{...props}
			ref={ref}
			className={styles.Input}
		/>
	)
})
export default MaskedInputField
