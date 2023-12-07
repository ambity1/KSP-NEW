import AboutCompanyPage from '@pages/about-company-page'
import ContactsPage from '@pages/contacts-page'
import DeliveryPage from '@pages/delivery-page'
import GoodDetailPage from '@pages/good-detail-page'
import Main from '@pages/main-page'
import PaymentPage from '@pages/payment-page'
import ReturnPage from '@pages/return-page'
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
			path: `/about/:id`,
			element: <AboutCompanyPage />
		},
		{
			path: `/delivery/:id`,
			element: <DeliveryPage />
		},
		{
			path: `/payment/:id`,
			element: <PaymentPage />
		},
		{
			path: `/return/:id`,
			element: <ReturnPage />
		}
	])

	return <RouterProvider router={router} />
}

export default Routes
