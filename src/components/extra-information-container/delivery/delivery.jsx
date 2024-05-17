import cn from 'classnames'
import React from 'react'

import cl from './delivery.module.scss'

const Delivery = () => {
	return (
		<div className={cl.content}>
			<div className={cl.contentBlock}>
				<h3 className={cn([cl.store, cl.contentTitle])}>Самовывоз из магазинов</h3>
				<p className={cl.contentText}>Вы можете забрать свой заказ самостоятельно из наших магазинов по адресам:</p>
				<br />
				<p className={cl.contentText}>• Актобе, просп. Санкибай Батыра, 171Г</p>
				<p className={cl.contentText}>• Актобе, просп. Санкибай Батыра, 32</p>
			</div>
			<div className={cl.contentBlock}>
				<h3 className={cn([cl.truck, cl.contentTitle])}>Доставка</h3>
				<p className={cl.contentText}>
					Мы доставляем по городу Актобе и по всему Казахстану. Чтобы оформить доставку вам нужно оплатить товары, после оплаты сообщить нам адрес доставки и удобный способ получения.
				</p><br />
				<p className={cl.contentText}>
					Мы сотрудничаем с сервисами Яндекс.Доставка, курьерской службой СДЭК , Казпочтой.
				</p><br />
				<p className={cl.contentText}>
					В отдельных случаях мы рассмотрим любой другой способ доставки.
				</p>
			</div>
		</div>
	)
}

export default Delivery
