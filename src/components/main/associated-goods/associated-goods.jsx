import cn from 'classnames'
import React, { memo, useMemo } from 'react'
import { Link } from 'react-router-dom'

import accessories from '../../../../assets/images/accessories.png'
import autochemistry from '../../../../assets/images/auto-chemistry.png'
import autoelectrics from '../../../../assets/images/auto-electrics.png'
import cl from './associated-goods.module.scss'

const AssociatedGoods = () => {
	const associatedGoodsList = useMemo(
		() => [
			{
				id: 0,
				href: '/',
				title: 'Автоэлектрика',
				img: autoelectrics
			},
			{
				id: 1,
				href: '/',
				title: 'Автохимия и автокосметика',
				img: autochemistry
			},
			{
				id: 2,
				href: '/',
				title: 'Аксессуары',
				img: accessories
			}
		],
		[]
	)
	const associatedGoodsContentWrapperClassNames = cn([cl.wrapper, 'container'])
	return (
		<div className={associatedGoodsContentWrapperClassNames}>
			<h2 className={cl.title}>Сопутствующие товары</h2>
			<div className={cl.goodsList}>
				{associatedGoodsList.map(({ id, href, title, img }) => (
					<Link className={cl.goodItemWrapper} key={id} to={href}>
						<div className={cl.goodItem}>
							<h3 className={cl.itemTitle}>{title}</h3>
							{/* <div className={cl.content}> */}
							<span className={cl.arrow} />
							<img className={cl.img} alt="" src={img} />
							{/* </div> */}
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}

export default memo(AssociatedGoods)
