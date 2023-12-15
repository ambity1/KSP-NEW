import { Select } from '@consta/uikit/Select'
import { useState } from 'react'

import cl from './by-vin.module.scss'
import './by-vin.scss'

const ByVin = () => {
	const itemsVin = [
		{
			label: '123',
			id: 1
		},
		{
			label: '456',
			id: 2
		},
		{
			label: '789',
			id: 3
		}
	]
	const [vin, setVin] = useState(itemsVin)

	const itemsParts = [
		{
			label: 'Крыло',
			id: 1
		},
		{
			label: 'Капот',
			id: 2
		},
		{
			label: 'Фара',
			id: 3
		}
	]
	const [parts, setParts] = useState(itemsParts)

	return (
		<div className={cl.wrapper}>
			<div className={cl.selectorBlock}>
				<span className={cl.title}>VIN номер</span>
				<Select
					placeholder="Выберите значение"
					items={itemsVin}
					size="m"
					// caption="Пример"
					// labelPosition="top"
					form="default"
					view="default"
					value={vin}
					onChange={({ value }) => setVin(value)}
				/>
			</div>

			<div className={cl.selectorBlock}>
				<span className={cl.title}>Название запчасти</span>
				<Select
					placeholder="Выберите значение"
					items={itemsParts}
					size="m"
					// label="Select"
					// caption="Пример"
					labelPosition="top"
					form="default"
					view="default"
					value={parts}
					onChange={({ value }) => setParts(value)}
				/>
			</div>
		</div>
	)
}

export default ByVin
