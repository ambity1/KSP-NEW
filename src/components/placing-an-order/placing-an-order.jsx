import { Select } from '@consta/uikit/Select'
import cn from 'classnames'
import React, { useState } from 'react'

import Button from '@ui/button/index.js'

import InputSearch from '@components/header/input-search/index.js'
import cl from '@components/placing-an-order/placing-an-order.module.scss'

const PlacingAnOrder = () => {
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
						<input className={cl.input} type="text" placeholder="+7" />
					</div>
				</div>
				<div className={cl.blockCard}>
					<div className={cl.cardTitle}>Способ получения</div>
					<div className={cl.btnGroup}>
						<Button sizeStyle="sizeS">Самовывоз</Button>
						<Button sizeStyle="sizeS" colorStyle="outlined">Доставка</Button>
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
							<div className={cl.textTitle}>Стоимость:</div>
							<div>0 ₽</div>
						</div>
						<div className={cl.textGroup}>
							<div className={cl.textTitle}>Дата:</div>
							<div>7 июля (чт)</div>
						</div>
					</div>
				</div>
				<div className={cl.blockCard}>
					<div className={cl.cardTitle}>Способ оплаты</div>
					<div className={cl.btnGroup}>
						<Button sizeStyle="sizeS">При получении</Button>
						<Button sizeStyle="sizeS" colorStyle="outlined">Онлайн на сайте</Button>
					</div>
					<div className={cl.infoGroup}>
						<div className={cl.textGroup}>
							<div className={cl.textTitle}>К оплате:</div>
							<div>4200 ₽</div>
						</div>
					</div>
				</div>
				<div className={cl.blockCard}>
					<div className={cl.cardTitle}>Ваш заказ</div>
					<div>
                        (список запчастей)
                    </div>
					<div className={cl.infoGroup}>
						<div className={cl.textGroup}>
							<div className={cl.textTitle}>Самовывоз:</div>
							<div>0 ₽</div>
						</div>
                        <div className={cl.textGroup}>
                            <div className={cl.textTitle}>Итого:</div>
                            <div className={cl.textTitle}>4200 ₽</div>
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
