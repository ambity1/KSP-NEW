import { Select } from '@consta/uikit/Select'
import cn from 'classnames'
import React, { useState } from 'react'

import getRawPhoneFromParsedPhone from '@helpers/getRawPhoneFromParsedPhone.js'
import parseRawPhone from '@helpers/parseRawPhone.js'

import Button from '@ui/button/index.js'

import cl from '@components/placing-an-order/placing-an-order.module.scss'

const PlacingAnOrder = () => {
	const [viewPhone, setViewPhone] = useState('')
	const [phone, setPhone] = useState('')

	const addressList = [
		{
			text: 'ТД «Car City» (9 бутик)',
			id: 1
		},
		{
			text: 'Рынок «Kol Auto» (24 и 59 бутик)',
			id: 2
		}
	]

	const [address, setAddress] = useState(null)
	const changePhoneHandler = (event) => {
		const rawPhone = getRawPhoneFromParsedPhone(event.target.value, viewPhone)
		const newViewPhone = parseRawPhone(rawPhone)

		setViewPhone(newViewPhone)
		setPhone(rawPhone)
	}
	return (
		<div className={cn([cl.wrapper, 'container'])}>
			<h1 className={cl.title}>Оформление заказа</h1>
			<div className={cl.blocks}>
				<div className={cl.blockCard}>
					<div className={cl.cardTitle}>Получатель</div>
					<div className={cl.infoGroup}>
						<div>Контактное лицо</div>
						<input className={cl.input} type="text" placeholder="Имя" />
					</div>
					<div className={cl.infoGroup}>
						<div>Телефон</div>
						<input
							className={cl.input}
							onChange={changePhoneHandler}
							value={viewPhone}
							type="text"
							size="16"
							placeholder="Телефон"
							required
						/>
						<input name="phone" type="hidden" tabIndex={-1} readOnly value={phone} />
					</div>
				</div>
				<div className={cl.blockCard}>
					<div className={cl.cardTitle}>Способ получения</div>
					<div className={cl.btnGroup}>
						<Button colorStyle="secondary" sizeStyle="sizeS">
							Самовывоз
						</Button>
						<Button colorStyle="secondary" sizeStyle="sizeS">
							Доставка
						</Button>
					</div>
					<div className={cl.infoGroup}>
						<div>Выберите адрес пункта выдачи</div>
						<Select
							placeholder="Выберите пункт выдачи"
							items={addressList}
							size="m"
							// label="Select"
							// caption="Пример"
							// labelPosition="top"
							form="default"
							view="default"
							value={address}
							onChange={({ value }) => setAddress(value)}
						/>
					</div>
					<div className={cl.infoGroup}>
						<div className={cl.textGroup}>
							<span className={cl.textTitle}>Стоимость:</span>
							<span>0 ₽</span>
						</div>
						<div className={cl.textGroup}>
							<span className={cl.textTitle}>Дата:</span>
							<span>7 июля (чт)</span>
						</div>
					</div>
				</div>
				<div className={cl.blockCard}>
					<span className={cl.cardTitle}>Способ оплаты</span>
					<div className={cl.btnGroup}>
						<Button colorStyle="secondary" sizeStyle="sizeS">
							При получении
						</Button>
						<Button colorStyle="secondary" sizeStyle="sizeS">
							Онлайн на сайте
						</Button>
					</div>
					<div className={cl.infoGroup}>
						<div className={cl.textGroup}>
							<span className={cl.textTitle}>К оплате:</span>
							<span>4200 ₽</span>
						</div>
					</div>
				</div>
				<div className={cl.blockCard}>
					<span className={cl.cardTitle}>Ваш заказ</span>
					<span>(список запчастей)</span>
					<div className={cl.infoGroup}>
						<div className={cl.textGroup}>
							<span className={cl.textTitle}>Самовывоз:</span>
							<span>0 ₽</span>
						</div>
						<div className={cl.textGroup}>
							<span className={cl.textTitle}>Итого:</span>
							<span className={cl.textTitle}>4200 ₽</span>
						</div>
					</div>
				</div>
				<div>
					<Button sizeStyle="sizeS">Подтвердить заказ</Button>
				</div>
			</div>
		</div>
	)
}

export default PlacingAnOrder
