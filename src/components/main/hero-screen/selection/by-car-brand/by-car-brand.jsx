import { Select } from '@consta/uikit/Select'
import { useState } from 'react'

import cl from './by-car-brand.module.scss'

const ByCarBrand = () => {
	const itemsBrand = [
		{
			label: 'KIA',
			id: 1
		},
		{
			label: 'Hyundai',
			id: 2
		},
		{
			label: 'Chevrolet',
			id: 3
		}
	]
	const [brand, setBrand] = useState(itemsBrand)

	const itemsModel = [
		{
			label: 'KIA',
			id: 1
		},
		{
			label: 'Hyundai',
			id: 2
		},
		{
			label: 'Chevrolet',
			id: 3
		}
	]
	const [model, setModel] = useState(itemsModel)

	const itemsYear = [
		{
			label: '2010',
			id: 1
		},
		{
			label: '2011',
			id: 2
		},
		{
			label: '2012',
			id: 3
		}
	]
	const [year, setYear] = useState(itemsYear)

	return (
		<div className={cl.wrapper}>
			<div className={cl.selectorBlock}>
				<span className={cl.title}>Марка авто</span>
				<Select
					placeholder="Выберите значение"
					items={itemsBrand}
					size="m"
					// label="Select"
					// caption="Пример"
					// labelPosition="top"
					form="default"
					view="default"
					value={brand}
					onChange={({ value }) => setBrand(value)}
				/>
			</div>
			<div className={cl.selectorBlock}>
				<span className={cl.title}>Модель</span>
				<Select
					placeholder="Выберите значение"
					items={itemsModel}
					size="m"
					// label="Select"
					// caption="Пример"
					// labelPosition="top"
					form="default"
					view="default"
					value={model}
					onChange={({ value }) => setModel(value)}
				/>
			</div>
			<div className={cl.selectorBlock}>
				<span className={cl.title}>Год</span>
				<Select
					placeholder="Выберите значение"
					items={itemsYear}
					size="m"
					// label="Select"
					// caption="Пример"
					// labelPosition="top"
					form="default"
					view="default"
					value={year}
					onChange={({ value }) => setYear(value)}
				/>
			</div>
		</div>
	)
}

export default ByCarBrand
