import cn from 'classnames'
import { memo, useMemo, useState } from 'react'

import Parameters from './parameters'
import cl from './tabs.module.scss'

const Tabs = () => {
	const tabs = useMemo(
		() => [
			{
				id: 'parameters',
				label: 'Характеристики',
				component: <Parameters />
			},
			{
				id: 'reviews',
				label: 'Отзывы о поставщике',
				component: <>Отзывы</>
			}
		],
		[]
	)

	const [selectedTabId, setSelectedTabId] = useState(tabs[0].id)

	const selectedComponent = useMemo(
		() => tabs.find(({ id }) => id === selectedTabId).component,
		[tabs, selectedTabId]
	)

	const selectHandler = (id) => {
		setSelectedTabId(id)
	}

	return (
		<>
			<ul className={cl.tabs}>
				{tabs.map(({ id, label }) => (
					<li key={id}>
						<button
							onClick={() => selectHandler(id)}
							className={cn([cl.tab, { [cl.active]: id === selectedTabId }])}
						>
							{label}
						</button>
					</li>
				))}
			</ul>
			{selectedComponent}
		</>
	)
}

export default memo(Tabs)
