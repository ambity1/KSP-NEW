import AboutCompanyPage from '@pages/about-company-page'
import ContactsPage from '@pages/contacts-page'
import GoodDetailPage from '@pages/good-detail-page'
import Main from '@pages/main-page'
import PaymentPage from '@pages/payment-page/index.js'
import ReturnPage from '@pages/return-page/index.js'
import StockPage from '@pages/stock-page/stock-page.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

function Routes() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Main />
		},
		{
			path: `/good/:id`,
			element: <GoodDetailPage />
		},
		{
			path: `/contacts/:id`,
			element: <ContactsPage />
		},
		{
			path: `/payment/:id`,
			element: <PaymentPage />
		},
		{
			path: `/return/:id`,
			element: <ReturnPage />
		},
		{
			path: `/stock`,
			element: <StockPage />
		},
		{
			path: `/about/:id`,
			element: <AboutCompanyPage />
		}
		// {
		// 	path: `/information/:id`,
		// 	element: <DeliveryPage />
		// }
	])

	return <RouterProvider router={router} />
}

export default Routes
