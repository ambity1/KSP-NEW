import { Slider } from '@consta/uikit/Slider'
import { useEffect, useState } from 'react'

import Button from '@ui/button/index.js'

import cl from './filters.module.scss'

const Filters = ({ minPrice, maxPrice, onReset, loadMoreData}) => {
	const [localPrice, setLocalPrice] = useState([0, 100000])

	useEffect(() => {
		setLocalPrice([minPrice, maxPrice])
	}, [minPrice, maxPrice])

	const handleReset = () => {
		setLocalPrice([minPrice, maxPrice])
		onReset()
	}

	return (
		<div className={cl.filtersWrapper}>
			<div className={cl.contentWrapper}>
				<span className={cl.title}>Фильтр</span>
				<div className={cl.content}>
					<Slider
						label="Цена"
						min={minPrice}
						max={maxPrice}
						step={1}
						range
						value={localPrice}
						onChange={setLocalPrice}
					/>
					<div className={cl.counterWrapper}>
						<input
							className={cl.counter}
							type="number"
							placeholder="0"
							value={localPrice[0]}
							onChange={(value) => setLocalPrice([value, localPrice[1]])}
						/>
						<input
							className={cl.counter}
							type="number"
							placeholder="100"
							value={localPrice[1]}
							onChange={(value) => setLocalPrice([localPrice[0], value])}
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
					<Button onClick={() => loadMoreData(localPrice[0], localPrice[1], 1, false)}>Применить</Button>
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
