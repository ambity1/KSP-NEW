import GoodDetailPage from '@pages/good-detail-page'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const Routes = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <GoodDetailPage />
		}
	])

	return <RouterProvider router={router} />
}

export default Routes
