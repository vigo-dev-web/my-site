export const titleAnimation = {
	hidden: {
		y: 200,
		opacity: 0,
		transition: { y: { stiffness: 1000 } },
	},
	visible: (custom) => ({
		y: 0,
		opacity: 1,
		transition: { y: { stiffness: 1000, velocity: -100 } }
	})
}
