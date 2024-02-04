import cn from 'classnames'
import { useState } from 'react'

import Button from '@ui/button/index.js'

import DropDown from '@components/goods-of-category/drop-down/index.jsx'
import Filters from '@components/goods-of-category/filters/index.js'
import GoodCard from '@components/other-goods-slider/good-card/good-card.jsx'

import cl from './goods-of-category.module.scss'

const GoodsOfCategory = () => {
	const [isOpen, setIsOpen] = useState(false)

	const partsList = [
		{
			name: 'Двигатель',
			parts: ['вкладыши', 'втулки', 'гайки']
		},
		{
			name: 'Кузов внутри',
			parts: ['ложерон', 'усилитель', 'порог']
		},
		{
			name: 'Cистема выпуска отработанных газов'
		}
	]

	const [currentCategory, setCurrentCategory] = useState(null)

	return (
		<div className={cn([cl.goodsOfCategoryWrapper, 'container'])}>
			<h1 className={cl.title}>Кронштейн фары противотуманной левой на Sonata Тагаз, код двигателя G4GC</h1>
			<div className={cl.wrapper}>
				<div className={cl.drs}>
					<div className={cl.catalogBlock}>
						<div className={cl.catalogBtn} onClick={() => setIsOpen(!isOpen)}>
							<Button className={cl.btn}>КАТАЛОГ ЗАПЧАСТЕЙ</Button>
						</div>
						<div className={`${cl.menu}${isOpen ? 'active' : ''}`}>
							<div className={cl.menuList}>
								<div className={cl.partsGroup}>
									{partsList.map(({ name }) => (
										<li className={cl.partsGroupItem}>{name}</li>
									))}
								</div>
								<div className={cl.partsName}>
									{partsList.map(({ name, parts }) => (
										<div>
											{/* <span>{name}</span> */}
											<li className={cl.partsNameItem}>{parts}</li>
										</div>
									))}
								</div>
							</div>
							{/* <ul className={cl.menuList}> */}
							{/*	{partsList.map(({ name }) => ( */}
							{/*		<li className={cl.menuListItem}>{name}</li> */}
							{/*	))} */}
							{/* </ul> */}
						</div>
					</div>
					<Filters />
				</div>
				<div className={cl.contentWrapper}>
					<DropDown />
					<div className={cl.goodsWrapper}>
						<div>
							<GoodCard />
						</div>
						<div>
							<GoodCard />
						</div>
						<div>
							<GoodCard />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default GoodsOfCategory
