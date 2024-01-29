import { Slider } from '@consta/uikit/Slider'
import { useState } from 'react'

import Button from '@ui/button/index.js'

import cl from './filters.module.scss'

const Filters = () => {
	const [value, setValue] = useState([0, 50])
	return (
		<div className={cl.filtersWrapper}>
			<div>
				<span className={cl.title}>Фильтр</span>
				<div>
					<Slider
						min={0}
						max={100}
						step={1}
						label="Цена"
						onChange={({ value: rangeValue }) => setValue(rangeValue)}
						value={value}
						size="m"
					/>
					<div>
						<input type="number" placeholder="0" />
						<input type="number" placeholder="0" />
					</div>
				</div>
				<div>
					<Slider
						min={0}
						max={100}
						step={1}
						label="Срок поставки, дней"
						onChange={({ value: rangeValue }) => setValue(rangeValue)}
						value={value}
						size="l"
					/>
					<div>
						<input type="number" placeholder="от 0" />
						<input type="number" placeholder=" до 12" />
					</div>
				</div>
				<div>
					<span className={cl.title}>Состояние</span>
					<ul>
						<li>Все</li>
						<li>Б/у</li>
						<li>Новое</li>
					</ul>
				</div>
			</div>
			<Button>Применить</Button>
			<Button colorStyle="secondary">Сбросить</Button>
		</div>
	)
}

export default Filters
