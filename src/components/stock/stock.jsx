import cn from 'classnames'
import React from 'react'

import ButtonLink from '@ui/button/link'

import { useGetStockQuery } from '../../store/modules/stock-api.js'
import cl from './stock.module.scss'

const Stock = () => {
	const StockWrapperClassNames = cn([cl.wrapper, 'container'])


	return (
		<div className={StockWrapperClassNames}>
			<h1 className={cl.wrapperHeader}>Акции</h1>
			<div className={cl.wrapperContent}>
				<div className={cl.contentBlock}>
					<img src="/assets/images/car.jpg" alt="" className={cl.contentImage}/>
					{/* <div className={cl.contentImage}><img src="../../../../../../assets/images/car.jpg" alt="" /></div> */}
					<div className={cl.contentCard}>
						<h4 className={cl.contentTitle}>Акция на автозапчасти для Hyundai</h4>
						<div className={cl.contentText}>Дарим скидку на все запчасти автомобиля Hyundai 15% до 23.08.2024</div>
						<ButtonLink className={cl.buttonLink} sizeStyle="sizeM" href='/goods-of-category'>
							Перейти в каталог
						</ButtonLink>
					</div>
				</div>

				<div className={cl.contentBlock}>
					<img src="/assets/images/car.jpg" alt="" className={cl.contentImage}/>
					{/* <div className={cl.contentImage}><img src="../../../../../../assets/images/car.jpg" alt="" /></div> */}
					<div className={cl.contentCard}>
						<h4 className={cl.contentTitle}>Акция на автозапчасти для Hyundai</h4>
						<div className={cl.contentText}>Дарим скидку на все запчасти автомобиля Hyundai 15% до 23.08.2024</div>
						<ButtonLink className={cl.buttonLink} sizeStyle="sizeM" href='/goods-of-category'>
							Перейти в каталог
						</ButtonLink>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Stock
