import React from 'react'

import ButtonLink from '@ui/button/link/index.js'

import cl from './stock.module.scss'

const Stock = () => {
	return (
		<div className={cl.wrapper}>
			<h1 className={cl.wrapperHeader}>Акции</h1>
			<div className={cl.wrapperContent}>
				<div className={cl.contentBlock}>
					<div className={cl.contentImage}>Баннер с акцией</div>
					<div className={cl.contentCard}>
						<h4 className={cl.contentTitle}>Акция на автозапчасти для Hyundai</h4>
						<div className={cl.contentText}>Дарим скидку на все запчасти автомобиля Hyundai 15% до 23.08.2023</div>
						<ButtonLink className={cl.buttonLink}>Перейти в каталог</ButtonLink>
					</div>
				</div>
				<div className={cl.contentBlock}>
					<div className={cl.contentImage}>Баннер с акцией</div>
					<div className={cl.contentCard}>
						<h4 className={cl.contentTitle}>Акция на автозапчасти для Hyundai</h4>
						<div className={cl.contentText}>Дарим скидку на все запчасти автомобиля Hyundai 15% до 23.08.2023</div>
						<ButtonLink className={cl.buttonLink} sizeStyle="sizeM">
							Перейти в каталог
						</ButtonLink>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Stock
