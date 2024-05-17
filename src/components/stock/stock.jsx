import cn from 'classnames'
import React from 'react'

import ButtonLink from '@ui/button/link'

import { useGetStockQuery } from '../../store/modules/stock-api.js'
import cl from './stock.module.scss'
import useMatchMedia from "@hooks/use-match-media.js";

const Stock = () => {
	const { isMobile, isTablet, isTabletSmall, isDesktop } = useMatchMedia()
	const StockWrapperClassNames = cn([cl.wrapper, 'container'])

	return (
		<div className={StockWrapperClassNames}>
			<h1 className={cl.wrapperHeader}>Акции</h1>
			<div className={cl.wrapperContent}>
				<div className={cl.contentBlock}>
					{isDesktop && <img className={cl.contentImage} src="/assets/images/stock1.jpg" alt="" />}
					{isTablet && <img className={cl.contentImage} src="/assets/images/stock1tablet.jpg" alt="" />}
					{isTabletSmall && <img className={cl.contentImage} src="/assets/images/stock1tabletSmall.jpg" alt="" />}
					{isMobile && <img className={cl.contentImage} src="/assets/images/stock1mobile.jpg" alt="" />}
					<div className={cl.contentCard}>
						<h4 className={cl.contentTitle}>Автотовары в рассрочку 0%</h4>
						<div className={cl.contentText}>У нас действует рассрочка от Kaspi.kz и Kaspi RED</div>
						<ButtonLink className={cl.buttonLink} sizeStyle="sizeM" href='/goods-of-category'>
							К покупкам
						</ButtonLink>
					</div>
				</div>

				<div className={cl.contentBlock}>
					{isDesktop && <img className={cl.contentImage} src="/assets/images/stock2.jpg" alt="" />}
					{isTablet && <img className={cl.contentImage} src="/assets/images/stock2tablet.jpg" alt="" />}
					{isTabletSmall && <img className={cl.contentImage} src="/assets/images/stock2tabletSmall.jpg" alt="" />}
					{isMobile && <img className={cl.contentImage} src="/assets/images/stock2mobile.jpg" alt="" />}
					{/* <img src="/assets/images/stock2.jpg" alt="" className={cl.contentImage}/> */}
					{/* <div className={cl.contentImage}><img src="../../../../../../assets/images/car.jpg" alt="" /></div> */}
					<div className={cl.contentCard}>
						<h4 className={cl.contentTitle}>Доставка по Актобе и по всему Казахстану</h4>
						<div className={cl.contentText}>После оплаты сообщите нам адрес доставки и удобный способ получения. Мы сотрудничаем с сервисами Яндекс.Доставка, курьерской службой СДЭК , Казпочтой. В отдельных случаях мы рассмотрим любой другой способ доставки.</div>
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
