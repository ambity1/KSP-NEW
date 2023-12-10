import MainLayout from '@layouts/main/main-layout.jsx'
import React from 'react'

import Stock from '@components/stock/index.js'

const StockPage = () => {
	return (
		<MainLayout>
			<Stock />
		</MainLayout>
	)
}

export default StockPage
