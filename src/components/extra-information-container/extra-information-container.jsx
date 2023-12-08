import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom'

import Delivery from './delivery/index.js'
import cl from './extra-information-container.module.scss'
import Payment from './payment/index.js'
import Refund from './refund/index.js'
import TabLinks from './tab-links/index.js'

const ExtraInformationContainer = () => {
	const { id: currentTabId } = useParams()
	const tabs = useMemo(
		() => [
			{
				id: 'payment',
				href: '/payment',
				label: 'Оплата',
				title: 'Оплата',
				component: <Payment />
			},
			{
				id: 'delivery',
				href: '/delivery',
				label: 'Доставка',
				title: 'Доставка',
				component: <Delivery />
			},
			{
				id: 'refund',
				href: '/refund',
				label: 'Возврат',
				title: 'Возврат',
				component: <Refund />
			}
		],
		[]
	)
	const currentTab = useMemo(() => tabs.find(({ id }) => id === currentTabId), [currentTabId, tabs])

	return (
		<div className={cl.wrapper}>
			<h1 className={cl.wrapperHeader}>{currentTab.title}</h1>
			<div className={cl.wrapperContainer}>
				{currentTab.component}
				<TabLinks tabs={tabs} />
			</div>
		</div>
	)
}

export default ExtraInformationContainer
