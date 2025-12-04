import { Accordion } from 'radix-ui'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import styles from './accordionItem.module.scss'
const AccordionItem = ({ title, text, index }) => {
	return (
		<>
			<Accordion.Root
				className={styles.Root}
				type='single'
				collapsible
			>
				<Accordion.Item
					className={styles.Item}
					value={`item-${index + 1}`}
				>
					<Accordion.Header className={styles.Header}>
						<Accordion.Trigger className={styles.Trigger}>
							{title}
							<div className={styles.ChevronWrapper}>
								<ChevronDownIcon
									className={styles.Chevron}
									aria-hidden
								/>
							</div>
						</Accordion.Trigger>
					</Accordion.Header>
					<Accordion.Content className={styles.Content}>
						<div className={styles.ContentText}>{text}</div>
					</Accordion.Content>
				</Accordion.Item>
			</Accordion.Root>
		</>
	)
}

export default AccordionItem
