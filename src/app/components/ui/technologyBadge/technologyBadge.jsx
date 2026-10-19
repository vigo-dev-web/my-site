import styles from './technologyBadge.module.scss'

const TechnologyBadge = ({ name }) => {
	const getColor = (name) => {
		let color = '#0085fa'
		let textColor = '#fff'
		switch (name) {
			case 'React':
				color = '#087ca3'
				break
			case 'Next.JS':
				color = '#171717'
				break
			case 'TypeScript':
				color = '#3178c6'
            break
			case 'JavaScript':
				color = '#f7de1e'
				textColor = '#000'
            break
			case 'SCSS':
				color = '#cf649a'
            break
			case 'CSS':
				color = '#66309a'
            break
			case 'HTML':
				color = '#f16524'
            break
			case 'Vite':
				color = '#7a88fe'
				textColor = '#ffda32'
            break
			case 'Gulp':
				color = '#cf4647'
            break
			case 'Turbopack':
				color = '#ff1e56'
				textColor = '#000'
            break
			case 'Webpack':
				color = '#84c7e9'
				textColor = '#1d72b4'
            break
			case 'Vue':
				color = '#42b883'
				textColor = '#35495e'
            break
			case 'Tailwind':
				color = '#00bbff'
				textColor ='#fff'
            break
			case 'Strapi':
				color = '#4942ff'
				textColor ='#fff'
            break
		}
		return { color, textColor }
	}

	const { color, textColor } = getColor(name)

	return (
		<span
			style={{ backgroundColor: color, color: textColor }}
			className={styles.item}
		>
			{name}
		</span>
	)
}

export default TechnologyBadge
