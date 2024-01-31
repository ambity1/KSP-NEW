import { Slider } from '@consta/uikit/Slider'
import { Theme } from '@consta/uikit/Theme'
import { useMemo, useState } from 'react'

import Button from '@ui/button/index.js'

import { presetKSP } from '../../../uikit/presets/presetKSP.js'
import cl from './filters.module.scss'

const Filters = () => {
	const [minCost, setMinCost] = useState('')
	const [maxCost, setMaxCost] = useState('')

	const [minDayCount, setMinDayCount] = useState('')
	const [maxDayCount, setMaxDayCount] = useState('')

	const [dayCounter, setDayCounter] = useState([])
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

	const minCostChangeHandler = (event) => {
		setMinCost(event.target.value)
	}

	const maxCostChangeHandler = (event) => {
		setMaxCost(event.target.value)
	}

	const costChangeHandler = ({ value: [minValue, maxValue] }) => {
		setMinCost(minValue > maxValue ? maxValue : minValue)
		setMaxCost(minValue > maxValue ? minValue : maxValue)
	}

	const minDayCountHandler = (event) => {
		setMinDayCount(event.target.value)
	}
	const maxDayCountHandler = (event) => {
		setMaxDayCount(event.target.value)
	}

	const dayCountHandler = ({ value: [minValue, maxValue] }) => {
		setMinDayCount(minValue > maxValue ? maxValue : minValue)
		setMaxDayCount(minValue > maxValue ? minValue : maxValue)
	}

	return (
		<Theme preset={presetKSP}>
			<div className={cl.filtersWrapper}>
				<div className={cl.contentWrapper}>
					<span className={cl.title}>Фильтр</span>
					<div className={cl.content}>
						<Slider
							min={0}
							max={100}
							step={1}
							label="Цена"
							onChange={costChangeHandler}
							value={[minCost, maxCost]}
							size="m"
						/>
						<div className={cl.counterWrapper}>
							<input
								className={cl.counter}
								type="number"
								placeholder="0"
								value={minCost}
								onChange={minCostChangeHandler}
							/>
							<input
								className={cl.counter}
								type="number"
								placeholder="100"
								value={maxCost}
								onChange={maxCostChangeHandler}
							/>
						</div>
					</div>
					<div className={cl.content}>
						<Slider
							min={0}
							max={31}
							step={1}
							label="Срок поставки, дней"
							onChange={dayCountHandler}
							value={[minDayCount, maxDayCount]}
							size="m"
						/>
						<div className={cl.counterWrapper}>
							<input
								className={cl.counter}
								type="number"
								placeholder="от 0"
								value={minDayCount}
								onChange={minDayCountHandler}
							/>
							<input
								className={cl.counter}
								type="number"
								placeholder=" до 12"
								value={maxDayCount}
								onChange={maxDayCountHandler}
							/>
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
		</Theme>
	)
}

export default Filters