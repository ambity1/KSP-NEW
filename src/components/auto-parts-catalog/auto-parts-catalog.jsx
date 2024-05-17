import cn from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

import ButtonLink from '@ui/button/link/index.js'

import GoodCard from '@components/other-goods-slider/good-card/good-card.jsx'

import chevton from '../../../assets/images/chevron-right.svg'
import { useGetFourRandomPartsQuery } from '../../store/modules/car-parts-api.js'
import cl from './auto-parts-catalog.module.scss'

const AutoPartsCatalog = () => {
	const { data: randomParts } = useGetFourRandomPartsQuery()

	const otherGoodsSliderWrapperClassNames = cn([cl.otherGoodsWrapper, 'container'])
	return (
		<div className={otherGoodsSliderWrapperClassNames}>
			<div className={cl.head}>
				<Link to="/goods-of-category" className={cl.title}>
					<h2>Каталог автозапчастей</h2>
					<img className={cl.icon} src="/assets/images/chevron-right.svg" alt="" />
				</Link>
				<ButtonLink sizeStyle="sizeL" colorStyle="outlined" className={cl.button} href="/goods-of-category">
					Смотреть все товары
				</ButtonLink>
			</div>
			<div className={cl.otherGoodsSwiper}>
				{randomParts &&
					randomParts.map((part) => (
						<Link to={`/good/${part.id}`} className={cl.wrapper}>
							<div key={part.id}>
								{/* <img className={cl.image} src={image} alt="" /> */}
								<div className={cn([cl.description])}>
									<h3 className={cl.title}>{part.description}</h3>
									{part && part.price && <span className={cl.cost}>{part.price} руб.</span>}
								</div>
							</div>
						</Link>
						// <div key={id}>
						// 	<GoodCard image={image} description={description} price={price} />
						// </div>
					))}
			</div>
		</div>
	)
}

export default AutoPartsCatalog
