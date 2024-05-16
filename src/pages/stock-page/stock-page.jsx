import BreadCrumbs from '@layouts/components/bread-сrumbs/bread-crumbs.jsx'
import MainLayout from '@layouts/main/main-layout.jsx'
import React from 'react'

import Stock from '@components/stock/index.js'

const StockPage = () => {
	const crumbsList = [
		{
			id: 0,
			href: '/',
			text: 'Главная'
		},
		{
			id: 1,
			href: '/stock',
			text: 'Акции'
		}
	]

	return (
		<MainLayout>
			<BreadCrumbs crumbsList={crumbsList} />
			<Stock />
		</MainLayout>
	)
}

export default StockPage
