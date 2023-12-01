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
		}
	])

	return <RouterProvider router={router} />
}

export default Routes
