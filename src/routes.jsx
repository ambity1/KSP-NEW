import AboutCompanyPage from '@pages/about-company-page'
import ContactsPage from '@pages/contacts-page'
import ExtraInformationPage from '@pages/extra-information-page/extra-information-page.jsx'
import GoodDetailPage from '@pages/good-detail-page'
import Main from '@pages/main-page'
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
			path: `/about`,
			element: <AboutCompanyPage />
		},
		{
			path: `/information/:id`,
			element: <ExtraInformationPage />
		}
	])

	return <RouterProvider router={router} />
}

export default Routes
