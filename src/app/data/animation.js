export const titleAnimation = {
	visible: {
		y: 0,
		opacity: 1,
		transition: { y: { stiffness: 1000, velocity: -100 } }
	},
	hidden: {
		y: 200,
		opacity: 0,
		transition: { y: { stiffness: 1000 } }
	}
}

export const myServicesAnimation = {
	containerVariants: {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.45
			}
		}
	},
	itemVariants: {
		hidden: {
			opacity: 0,
			y: 40,
			scale: 0.98
		},
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				type: 'spring',
				stiffness: 100,
				damping: 15
			}
		}
	}
}
