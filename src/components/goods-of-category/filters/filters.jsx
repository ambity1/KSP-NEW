import { Slider } from '@consta/uikit/Slider'
import { useMemo, useState } from 'react'

import Button from '@ui/button/index.js'

import cl from './filters.module.scss'

const Filters = () => {
	const [value, setValue] = useState([0, 50])
	const filterList = useMemo(
		() => [
			{
				id: 1,
				text: 'Все'
			},
			{
				id: 2,
				text: 'Б/у'
			},
			{
				id: 3,
				text: 'Новое'
			}
		],
		[]
	)
	const [selectedId, setSelectedId] = useState(filterList[0]?.id)

	const selectHandler = (id) => {
		setSelectedId(id)

		if (selectedId === id) {
			return
		}

		if (id === -1) {
		}
	}
	return (
		<div className={cl.filtersWrapper}>
			<div className={cl.contentWrapper}>
				<span className={cl.title}>Фильтр</span>
				<div className={cl.content}>
					<Slider
						min={0}
						max={100}
						step={1}
						label="Цена"
						onChange={({ value: rangeValue }) => setValue(rangeValue)}
						value={value}
						size="m"
					/>
					<div className={cl.counterWrapper}>
						<input className={cl.counter} type="number" placeholder="0" />
						<input className={cl.counter} type="number" placeholder="0" />
					</div>
				</div>
				<div className={cl.content}>
					<Slider
						min={0}
						max={100}
						step={1}
						label="Срок поставки, дней"
						onChange={({ value: rangeValue }) => setValue(rangeValue)}
						value={value}
						size="m"
					/>
					<div className={cl.counterWrapper}>
						<input className={cl.counter} type="number" placeholder="от 0" />
						<input className={cl.counter} type="number" placeholder=" до 12" />
					</div>
				</div>
				<div className={cl.content}>
					<span className={cl.title}>Состояние</span>
					<ul className={cl.conditionList}>
						{filterList.map(({ id, text }) => (
							<div onClick={() => selectHandler(id)} key={id}>
								<div className={`${cl.line} ${selectedId === id ? cl.active : ''}`}>
									<div className={cl.point} />
									<div className={cl.text}>{text}</div>
								</div>
							</div>
						))}
					</ul>
				</div>
			</div>
			<div>
				<div className={cl.buttonLink}>
					<Button>Применить</Button>
				</div>
				<div className={cl.buttonLink}>
					<Button className={cl.btn}>Сбросить</Button>
				</div>
			</div>
		</div>
	)
}

export default Filters