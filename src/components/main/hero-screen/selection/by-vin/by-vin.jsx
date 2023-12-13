import { Select } from '@consta/uikit/Select'
import { useState } from 'react'

import cl from './by-vin.module.scss'

const ByVin = () => {
	const [value, setValue] = useState()

	return (
		<>
			<div className={cl.wrapper}>
				<span className={cl.title}>VIN номер</span>
				<Select
					placeholder="Выберите значение"
					items={[]}
					size="m"
					label="Select"
					caption="Пример"
					labelPosition="top"
					form="default"
					view="default"
					value={value}
					onChange={({ value }) => setValue(value)}
				/>
			</div>

			<div className={cl.wrapper}>
				<span className={cl.title}>Название запчасти</span>
				<Select
					placeholder="Выберите значение"
					items={[]}
					size="m"
					label="Select"
					caption="Пример"
					labelPosition="top"
					form="default"
					view="default"
					value={value}
					onChange={({ value }) => setValue(value)}
				/>
			</div>
		</>
	)
}

export default ByVin
