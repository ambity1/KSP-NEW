import { IconSearchStroked } from '@consta/icons/IconSearchStroked'
import { Pagination } from '@consta/uikit/Pagination'
import { Select } from '@consta/uikit/Select'
import { TextField } from '@consta/uikit/TextField'
import { Theme } from '@consta/uikit/Theme'
import useMatchMedia from '@hooks/use-match-media.js'
import cn from 'classnames'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '@ui/button/index.js'

import Filters from '@components/goods-of-category/filters/index.js'
import GoodCard from '@components/other-goods-slider/good-card/good-card.jsx'

import { useGetCarPartsQuery, useGetPriceFilterQuery } from '../../store/modules/car-parts-api.js'
import { presetKSP } from '../../uikit/presets/presetKSP.js'
import cl from './goods-of-category.module.scss'

const GoodsOfCategory = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [search, setSearch] = useState(null)
	const [page, setPage] = useState(1)
	const [totalItems, setTotalItems] = useState(178)
	const [carPartsPagination, setCarPartsPagination] = useState([])
	const { isMobile, isTablet, isTabletSmall, isDesktop } = useMatchMedia()
	const items = [
		{
			id: 1,
			label: 'По умолчанию',
			type: 'normal'
		},
		{
			id: 2,
			label: 'Цена по возрастанию',
			type: 'normal'
		},
		{
			id: 3,
			label: 'Цена по убыванию',
			type: 'reverse'
		}
	]
	const [selectedType, setSelectedType] = useState(items[0])
	const [minPrice, setMinPrice] = useState(0)
	const [maxPrice, setMaxPrice] = useState(200000)

	const handleApplyFilters = () => {
		setPage(1)
	}

	const handleResetFilters = () => {
		setPage(1)
		// setMinPrice(0)
		// setMaxPrice(1000000)
	}

	const { data: carParts = [], isLoading: isLoadingCarParts } = useGetCarPartsQuery({
		typeSort: selectedType.type,
		sort: 'price',
		limit: '12'
	})
	const { data: priceFilter = [], meta: pages = {} } = useGetPriceFilterQuery({
		typeSort: selectedType.type,
		sort: 'price',
		limit: '12',
		from: minPrice.toString(),
		to: maxPrice.toString(),
		pageNumber: page
	})

	useEffect(() => {
		if (pages.last_page) {
			setTotalItems(pages.last_page)
		}
	}, [pages])

	const loadMoreData = async () => {
		const nextPage = page + 1
		const { data: newCarParts = [] } = await useGetCarPartsQuery({
			typeSort: selectedType.type,
			sort: 'price',
			limit: '12',
			pageNumber: nextPage
		})
		// Объединяем новые карточки с уже загруженными
		setCarPartsPagination([...carPartsPagination, ...newCarParts])
		setPage(nextPage)
	}
	// console.log(selectedType.type)
	// console.log(minPrice.toString(), maxPrice.toString())
	const handleChange = (search) => setSearch(search)

	// const partsList = [
	// 	{
	// 		name: 'Двигатель',
	// 		parts: ['вкладыши', 'втулки', 'гайки']
	// 	},
	// 	{
	// 		name: 'Кузов внутри',
	// 		parts: ['ложерон', 'усилитель', 'порог']
	// 	},
	// 	{
	// 		name: 'Cистема выпуска отработанных газов'
	// 	}
	// ]

	// const cards = [
	// 	{
	// 		id: 0,
	// 		image: '../../../../assets/images/good1.jpg',
	// 		description:
	// 			'Кронштейн фары противотуманной левой для Hyundai Sonata VI 2010-2014 БУ состояние удовлетворительное',
	// 		price: '590 руб.'
	// 	},
	// 	{
	// 		id: 1,
	// 		image: '../../../../assets/images/good1.jpg',
	// 		description: 'Крепление фары левой Hyundai Sonata VI (YF) 2009 - 2014 2013',
	// 		price: '1083 руб.'
	// 	},
	// 	{
	// 		id: 2,
	// 		image: '../../../../assets/images/good1.jpg',
	// 		description: 'Кронштейн фары противотуманной левой для Hyundai Sonata VI 2010-2014 новая',
	// 		price: '1487 руб.'
	// 	},
	// 	{
	// 		id: 3,
	// 		image: '../../../../assets/images/good1.jpg',
	// 		description: 'Cordiant Winter Drive PW-1',
	// 		price: '560 руб.'
	// 	},
	// 	{
	// 		id: 4,
	// 		image: '../../../../assets/images/good1.jpg',
	// 		description:
	// 			'Кронштейн фары противотуманной левой для Hyundai Sonata VI 2010-2014 БУ состояние удовлетворительное',
	// 		price: '590 руб.'
	// 	},
	// 	{
	// 		id: 5,
	// 		image: '../../../../assets/images/good1.jpg',
	// 		description: 'Крепление фары левой Hyundai Sonata VI (YF) 2009 - 2014 2013',
	// 		price: '1083 руб.'
	// 	},
	// 	{
	// 		id: 6,
	// 		image: '../../../../assets/images/good1.jpg',
	// 		description: 'Кронштейн фары противотуманной левой для Hyundai Sonata VI 2010-2014 новая',
	// 		price: '1487 руб.'
	// 	},
	// 	{
	// 		id: 7,
	// 		image: '../../../../assets/images/good1.jpg',
	// 		description: 'Cordiant Winter Drive PW-1',
	// 		price: '560 руб.'
	// 	}
	// ]

	// const [currentCategory, setCurrentCategory] = useState(null)

	if (isOpen) {
		document.body.style.overflow = 'hidden'
	} else {
		document.body.style.overflow = ''
	}

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 992) {
				setIsOpen(false)
			}
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return (
		<>
			<div className={cn([`${cl.sidebar} ${isOpen ? '' : cl.active}`])}>
				<div className={`${isOpen ? cl.bckg : ''}`} onClick={() => setIsOpen(false)} />
				<div className={cl.group}>
					<div className={cl.sidebarContent}>
						<img
							src="../../../../../../assets/icons/closeblack.svg"
							alt=""
							className={cl.btnClose}
							onClick={() => setIsOpen(false)}
						/>
						<Filters
							minPrice={minPrice}
							maxPrice={maxPrice}
							setMinPrice={setMinPrice}
							setMaxPrice={setMaxPrice}
							onApply={handleApplyFilters}
							onReset={handleResetFilters}
						/>
					</div>
				</div>
			</div>

			<div className={cn([cl.goodsOfCategoryWrapper, 'container'])}>
				<h1 className={cl.title}>{search !== null ? `Результаты поиска "${search}"` : `Каталог`}</h1>
				<div className={cl.wrapper}>
					{(isDesktop || isTablet) && (
						<div className={cl.input}>
							{/* <InputSearchCatalog /> */}
							<TextField
								size="l"
								onChange={handleChange}
								value={search}
								type="text"
								placeholder="Поиск по наименованию, номеру запчасти или артиклю"
							/>
							<Button sizeStyle="sizeM" className={cl.button} type="button">
								Найти
							</Button>
						</div>
					)}
					{(isTabletSmall || isMobile) && (
						<div className={cl.input}>
							{/* <InputSearchCatalog /> */}
							<TextField
								leftSide={IconSearchStroked}
								size="m"
								onChange={handleChange}
								value={search}
								type="text"
								placeholder="Поиск по наименованию, номеру запчасти или артиклю"
							/>
						</div>
					)}
					<div className={cl.dropdown}>
						<Button sizeStyle="sizeS" colorStyle="outlined" className={cl.button} onClick={() => setIsOpen(true)}>
							<img src="../../../../assets/images/settings.svg" alt="" />
							Фильтр
						</Button>

						<div className={cl.select}>
							<Select
								placeholder="Выберите значение"
								view="clear"
								items={items}
								value={selectedType}
								onChange={setSelectedType}
							/>
						</div>
						{/* <DropDown /> */}
					</div>
					<div className={cl.contentWrapper}>
						<div className={cl.filter}>
							<Filters
								minPrice={minPrice}
								maxPrice={maxPrice}
								setMinPrice={setMinPrice}
								setMaxPrice={setMaxPrice}
								onApply={handleApplyFilters}
								onReset={handleResetFilters}
							/>
						</div>
						<div className={cl.cardsGroup}>
							<div className={cl.goodsWrapper}>
								{isLoadingCarParts ? (
									<p>Загрузка...</p>
								) : (
									priceFilter.data.map((part) => (
										<div key={part.id}>
											<Link to={`/good/${part.id}`}>
												<GoodCard description={part.name} price={part.price} />
											</Link>
										</div>
									))
								)}
								{/* {carParts.map((part) => ( */}
								{/* 	<div key={part.id}> */}
								{/* 		<Link to={`/good/${part.id}`}> */}
								{/* 			<GoodCard description={part.name} price={part.price} /> */}
								{/* 		</Link> */}
								{/* 	</div> */}
								{/* ))} */}
							</div>
							<div className={cl.pagination}>
								<Button colorStyle="outlined" className={cl.button} onClick={loadMoreData}>
									Загрузить еще
								</Button>
								<Theme preset={presetKSP}>
									{(isDesktop || isTablet || isTabletSmall) && (
										<Pagination
											items={totalItems}
											value={page}
											onChange={setPage}
											visibleCount={10}
											// items={15}
											// value={page}
											// onChange={setPage}
											// visibleCount={10}
										/>
									)}
									{isMobile && (
										<Pagination
											items={totalItems}
											value={page}
											onChange={setPage}
											visibleCount={5}
											// items={15}
											// value={page}
											// onChange={setPage}
											// visibleCount={10}
										/>
									)}
								</Theme>
							</div>
						</div>
					</div>
					{/* <div className={cl.drs}> */}
					{/* 	<div className={cl.catalogBlock}> */}
					{/* 		/!* <div className={cl.catalogBtn} onClick={() => setIsOpen(!isOpen)}> *!/ */}
					{/* 		/!* 	<Button className={cl.btn}>КАТАЛОГ ЗАПЧАСТЕЙ</Button> *!/ */}
					{/* 		/!* </div> *!/ */}
					{/* 		/!* <div className={`${cl.menu}${isOpen ? 'active' : ''}`}> *!/ */}
					{/* 		/!* 	<div className={cl.menuList}> *!/ */}
					{/* 		/!* 		<div className={cl.partsGroup}> *!/ */}
					{/* 		/!* 			{partsList.map(({ name }) => ( *!/ */}
					{/* 		/!* 				<li className={cl.partsGroupItem}>{name}</li> *!/ */}
					{/* 		/!* 			))} *!/ */}
					{/* 		/!* 		</div> *!/ */}
					{/* 		/!* 		<div className={cl.partsName}> *!/ */}
					{/* 		/!* 			{partsList.map(({ name, parts }) => ( *!/ */}
					{/* 		/!* 				<div> *!/ */}
					{/* 		/!* 					/!* <span>{name}</span> *!/ *!/ */}
					{/* 		/!* 					<li className={cl.partsNameItem}>{parts}</li> *!/ */}
					{/* 		/!* 				</div> *!/ */}
					{/* 		/!* 			))} *!/ */}
					{/* 		/!* 		</div> *!/ */}
					{/* 		/!* 	</div> *!/ */}
					{/* 		/!* 	/!* <ul className={cl.menuList}> *!/ *!/ */}
					{/* 		/!* 	/!*	{partsList.map(({ name }) => ( *!/ *!/ */}
					{/* 		/!* 	/!*		<li className={cl.menuListItem}>{name}</li> *!/ *!/ */}
					{/* 		/!* 	/!*	))} *!/ *!/ */}
					{/* 		/!* 	/!* </ul> *!/ *!/ */}
					{/* 		/!* </div> *!/ */}
					{/* 	</div> */}
					{/* 	<Filters /> */}
					{/* </div> */}
				</div>
			</div>
		</>
	)
}

export default GoodsOfCategory
