import AboutCompanyPage from '@pages/about-company-page/index.js'
import ContactsPage from '@pages/contacts-page'
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
			path: `/contacts/:id`,
			element: <ContactsPage />
		},
		{
			path: `/about/:id`,
			element: <AboutCompanyPage />
		}
	])

	return <RouterProvider router={router} />
}

export default Routes
