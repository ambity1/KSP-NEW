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
	const [vin, setVin] = useState(null)

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
	const [parts, setParts] = useState(null)

	return (
		<div className={cl.wrapper}>
			<div className={cl.selectorBlock}>
				<span className={cl.title}>VIN номер</span>
				<Select
					placeholder="Например: 123123123123"
					items={itemsVin}
					size="m"
					// label="Select"
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
					placeholder="Например: крыло"
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
