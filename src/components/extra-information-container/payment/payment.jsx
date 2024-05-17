import cn from 'classnames'
import React from 'react'

import cl from './payment.module.scss'

const Payment = () => {
	return (
		<div className={cl.content}>
			<div className={cl.contentBlock}>
				<h3 className={cn([cl.cards, cl.contentTitle])}>Банковской картой
					<img src='/assets/icons/cards.svg' alt="" />
				</h3>
				<p className={cl.contentText}>
					В нашем магазине вы можете оплатить товары банковской картой.
				</p>
			</div>
			<div className={cl.contentBlock}>
				<h3 className={cl.contentTitle}>Наличными</h3>
				<p className={cl.contentText}>
					Заказ можно оплатить наличными в наших магазинах при получении.
				</p>
			</div>
			<div className={cl.contentBlock}>
				<h3 className={cl.contentTitle}>По реквизитам</h3>
				<p className={cl.contentText}>Оплата по реквизитам может идти до 2 рабочих дней, это зависит от банка.</p>
			</div>
		</div>
	)
}

export default Payment
