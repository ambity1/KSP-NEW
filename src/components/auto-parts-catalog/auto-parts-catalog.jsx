import cn from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

import ButtonLink from '@ui/button/link/index.js'

import GoodCard from '@components/other-goods-slider/good-card/good-card.jsx'

import chevton from '../../../assets/images/chevron-right.svg'
import cl from './auto-parts-catalog.module.scss'

const AutoPartsCatalog = () => {
	const cards = [
		{
			id: 0,
			image: '../../../../assets/images/good1.jpg',
			description:
				'Кронштейн фары противотуманной левой для Hyundai Sonata VI 2010-2014 БУ состояние удовлетворительное',
			price: '590 руб.'
		},
		{
			id: 1,
			image: '../../../../assets/images/good1.jpg',
			description: 'Крепление фары левой Hyundai Sonata VI (YF) 2009 - 2014 2013',
			price: '1083 руб.'
		},
		{
			id: 2,
			image: '../../../../assets/images/good1.jpg',
			description: 'Кронштейн фары противотуманной левой для Hyundai Sonata VI 2010-2014 новая',
			price: '1487 руб.'
		},
		{
			id: 3,
			image: '../../../../assets/images/good1.jpg',
			description: 'Cordiant Winter Drive PW-1',
			price: '560 руб.'
		}
	]

	const otherGoodsSliderWrapperClassNames = cn([cl.otherGoodsWrapper, 'container'])
	return (
		<div className={otherGoodsSliderWrapperClassNames}>
			<div className={cl.head}>
				<Link to="/goods-of-category" className={cl.title}>
					<h2>Каталог автозапчастей</h2>
					<img className={cl.icon} src="../../../assets/images/chevron-right.svg" alt="" />
				</Link>
				<ButtonLink sizeStyle="sizeL" colorStyle="outlined" className={cl.button} href="/goods-of-category">
					Смотреть все товары
				</ButtonLink>
			</div>
			<div className={cl.otherGoodsSwiper}>
				{cards.map(({ id, image, description, price }) => (
					<div key={id} className={cl.wrapper}>
						<img className={cl.image} src={image} alt="" />
						<div className={cn([cl.description])}>
							<h3 className={cl.title}>{description}</h3>
							<span className={cl.cost}>{price}</span>
						</div>
					</div>
					// <div key={id}>
					// 	<GoodCard image={image} description={description} price={price} />
					// </div>
				))}
			</div>
		</div>
	)
}

export default AutoPartsCatalog
