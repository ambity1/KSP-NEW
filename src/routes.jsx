import AboutCompanyPage from '@pages/about-company-page'
import BasketPage from '@pages/basket-page/index.js'
import BrandSearchPage from '@pages/brand-search-page/index.js'
import ContactsPage from '@pages/contacts-page'
import ExtraInformationPage from '@pages/extra-information-page/extra-information-page.jsx'
import GoodDetailPage from '@pages/good-detail-page'
import Main from '@pages/main-page'
import PrivacyPolicyPage from '@pages/privacy-policy-page/index.js'
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
			path: `/contacts`,
			element: <ContactsPage />
		},
		{
			path: `/stock`,
			element: <StockPage />
		},
		{
			path: `/about`,
			element: <AboutCompanyPage />
		},
		{
			path: `/information/:id`,
			element: <ExtraInformationPage />
		},
		{
			path: `/brand_search`,
			element: <BrandSearchPage />
		},
		{
			path: `/basket`,
			element: <BasketPage />
		},
		{
			path: `/privacy-policy`,
			element: <PrivacyPolicyPage />
		}
	])

	return <RouterProvider router={router} />
}

export default Routes
