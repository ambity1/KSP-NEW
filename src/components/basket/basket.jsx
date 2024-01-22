import basketPage from '@pages/basket-page/index.js'
import cn from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

import ButtonLink from '@ui/button/link/index.js'

import cl from '@components/basket/basket.module.scss'

const Basket = () => {
	const basketList = [
		{
			img: 'фото',
			name: 'Кронштейн фары противотуманной левой для Hyundai Sonata VI 2010-2014 БУ состояние удовлетворительное',
			delivery: '6 дней',
			count: 'counter',
			price: '750 ₽'
		},
		{
			img: '',
			name: '',
			delivery: '',
			count: '',
			price: ''
		},
		{
			img: '',
			name: '',
			delivery: '',
			count: '',
			price: ''
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
					{basketList.map(({ img, name, delivery, count, price }) => (
						<Link to="/#">
							<div className={cl.basketContentTableLines}>
								<div>{img}</div>
								<div>{name}</div>
								<div>{delivery}</div>
								<div>{count}</div>
								<div>{price}</div>
							</div>
						</Link>
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
						<div>95 400 ₽</div>
					</div>
					<ButtonLink>Оформить заказ</ButtonLink>
				</div>
			</div>
		</div>
	)
}

export default Basket
