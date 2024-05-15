import { Slider } from '@consta/uikit/Slider'
import { useEffect, useState } from 'react'

import Button from '@ui/button/index.js'

import cl from './filters.module.scss'

const Filters = ({ minPrice, maxPrice, setMinPrice, setMaxPrice, onApply, onReset }) => {
	const [localMinPrice, setLocalMinPrice] = useState(minPrice)
	const [localMaxPrice, setLocalMaxPrice] = useState(maxPrice)

	// const [minDayCount, setMinDayCount] = useState('')
	// const [maxDayCount, setMaxDayCount] = useState('')

	// const minDayCountHandler = (event) => {
	// 	setMinDayCount(event.target.value)
	// }
	// const maxDayCountHandler = (event) => {
	// 	setMaxDayCount(event.target.value)
	// }
	//
	// const dayCountHandler = ({ value: [minValue, maxValue] }) => {
	// 	setMinDayCount(minValue > maxValue ? maxValue : minValue)
	// 	setMaxDayCount(minValue > maxValue ? minValue : maxValue)
	// }

	useEffect(() => {
		setLocalMinPrice(minPrice)
		setLocalMaxPrice(maxPrice)
	}, [minPrice, maxPrice])

	const handleSliderChange = (newPrice) => {
		setLocalMinPrice(newPrice[0])
		setLocalMaxPrice(newPrice[1])
	}

	const handleMinPriceChange = (event) => {
		const newMinPrice = parseInt(event.target.value)
		if (!isNaN(newMinPrice)) {
			setLocalMinPrice(newMinPrice)
		}
	}

	const handleMaxPriceChange = (event) => {
		const newMaxPrice = parseInt(event.target.value)
		if (!isNaN(newMaxPrice)) {
			setLocalMaxPrice(newMaxPrice)
		}
	}

	const handleApply = () => {
		setMinPrice(localMinPrice)
		setMaxPrice(localMaxPrice)
		onApply()
	}

	const handleReset = () => {
		setLocalMinPrice(0)
		setLocalMaxPrice(200000)
		setMinPrice(0)
		setMaxPrice(200000)
		onReset()
	}

	return (
		<div className={cl.filtersWrapper}>
			<div className={cl.contentWrapper}>
				<span className={cl.title}>Фильтр</span>
				<div className={cl.content}>
					<Slider
						label="Цена"
						min={0}
						max={300000}
						step={1}
						range
						value={[localMinPrice, localMaxPrice]}
						onChange={handleSliderChange}
						// value={[minPrice, maxPrice]}
						// onChange={(value) => handleSliderChange(value)}
					/>
					<div className={cl.counterWrapper}>
						<input
							className={cl.counter}
							type="number"
							placeholder="0"
							value={localMinPrice}
							onChange={handleMinPriceChange}
							// value={minPrice}
							// onChange={handleMinPriceChange}
						/>
						<input
							className={cl.counter}
							type="number"
							placeholder="100"
							value={localMaxPrice}
							onChange={handleMaxPriceChange}
							// value={maxPrice}
							// onChange={handleMaxPriceChange}
						/>
					</div>
				</div>
				{/* <div className={cl.content}> */}
				{/* 	<Slider */}
				{/* 		min={0} */}
				{/* 		max={31} */}
				{/* 		step={1} */}
				{/* 		label="Срок поставки, дней" */}
				{/* 		onChange={dayCountHandler} */}
				{/* 		value={[minDayCount, maxDayCount]} */}
				{/* 		size="m" */}
				{/* 	/> */}
				{/* 	<div className={cl.counterWrapper}> */}
				{/* 		<input */}
				{/* 			className={cl.counter} */}
				{/* 			type="number" */}
				{/* 			placeholder="от 0" */}
				{/* 			value={minDayCount} */}
				{/* 			onChange={minDayCountHandler} */}
				{/* 		/> */}
				{/* 		<input */}
				{/* 			className={cl.counter} */}
				{/* 			type="number" */}
				{/* 			placeholder=" до 12" */}
				{/* 			value={maxDayCount} */}
				{/* 			onChange={maxDayCountHandler} */}
				{/* 		/> */}
				{/* 	</div> */}
				{/* </div> */}
				{/* <div className={cl.content}> */}
				{/* 	<span className={cl.title}>Состояние</span> */}
				{/* 	<ul className={cl.conditionList}> */}
				{/* 		{filterList.map(({ id, text }) => ( */}
				{/* 			<div onClick={() => selectHandler(id)} key={id}> */}
				{/* 				<div className={`${cl.line} ${selectedId === id ? cl.active : ''}`}> */}
				{/* 					<div className={cl.point} /> */}
				{/* 					<div className={cl.text}>{text}</div> */}
				{/* 				</div> */}
				{/* 			</div> */}
				{/* 		))} */}
				{/* 	</ul> */}
				{/* </div> */}
			</div>
			<div>
				<div className={cl.buttonLink}>
					<Button onClick={handleApply}>Применить</Button>
				</div>
				<div className={cl.buttonLink}>
					<Button className={cl.btn} onClick={handleReset}>
						Сбросить
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Filters
