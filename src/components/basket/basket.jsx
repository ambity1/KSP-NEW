import bracket from '@assets/images/basket/bracket.jpg'
import headlight from '@assets/images/basket/headlight.jpg'
import cn from 'classnames'
import React from 'react'

import ButtonLink from '@ui/button/link/index.js'

import cl from '@components/basket/basket.module.scss'

const Basket = () => {
	const basketList = [
		{
			img: bracket,
			name: 'Кронштейн фары противотуманной левой для Hyundai Sonata VI 2010-2014 БУ состояние удовлетворительное',
			vin: '14848284',
			manufacturer: 'Hyundai-Kia',
			delivery: '6 дней',
			count: 'counter',
			price: '750 ₽'
		},
		{
			img: headlight,
			name: 'Фара правая для Hyundai Sonata VI 2010-2014 новая',
			vin: '87448284',
			manufacturer: 'Hyundai-Kia',
			delivery: '6 дней',
			count: 'counter',
			price: '750 ₽'
		}
	]

	return (
		<div className={cn([cl.wrapper, 'container'])}>
			<div className={cl.basketHeader}>Корзина</div>
			<div className={cl.basketContent}>
				<div className={cl.basketContentTable}>
					<div className={cl.basketContentTableHeader}>
						<div>Фото</div>
						<div>Товар</div>
						<div>Доставка в ПВЗ</div>
						<div>Количество</div>
						<div>Сумма</div>
					</div>
					{basketList.map(({ img, name, vin, manufacturer, delivery, count, price }) => (
						<div className={cl.basketContentTableLines}>
							<img className={cl.productsImage} src={img} alt="" />
							<div className={cl.nameLines}>
								<div>{name}</div>
								<div className={cl.additionalNames}>VIN: {vin}</div>
								<div className={cl.additionalNames}>Производитель: {manufacturer}</div>
							</div>
							<div>{delivery}</div>
							<div>{count}</div>
							<div className={cl.price}>{price}</div>
						</div>
					))}
				</div>
				<div className={cl.basketContentCard}>
					<div className={cl.basketContentCardTitle}>Ваша корзина</div>
					<div className={cl.basketContentCardCount}>
						<div>Всего:</div>
						<div>3 товара</div>
					</div>
					<div className={cl.basketContentCardTotalPrice}>
						<div>Итого:</div>
						<div className={cl.priceNumber}>95 400 ₽</div>
					</div>
					<ButtonLink>Оформить заказ</ButtonLink>
				</div>
			</div>
		</div>
	)
}

export default Basket
