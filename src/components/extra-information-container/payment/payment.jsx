import cn from 'classnames'
import React from 'react'

import cl from './payment.module.scss'

const Payment = () => {
	return (
		<div className={cl.content}>
			<div className={cl.contentBlock}>
				<h3 className={cn([cl.cards, cl.contentTitle])}>Банковской картой
					<img src='../../../../assets/icons/cards.svg' alt="" />
				</h3>
				<p className={cl.contentText}>
					Оплачивайте банковской картой на сайте. Оплата происходит через зашифрованный протокол на сайтах Сбeра и
					Тинькофф банка. KSP не имеет доступа к вашим данным — безопасность данных гарантируют банки.
				</p>
			</div>
			<div className={cl.contentBlock}>
				<h3 className={cl.contentTitle}>Наличными</h3>
				<p className={cl.contentText}>
					Заказ можно оплатить наличными в пункте выдачи. При оплате вам выдадут чек, платеж отразим в личном кабинете.
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
