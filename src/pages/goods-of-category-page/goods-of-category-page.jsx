import BreadCrumbs from '@layouts/components/bread-сrumbs/bread-crumbs.jsx'
import MainLayout from '@layouts/main/index.js'

import GoodsOfCategory from '@components/goods-of-category/index.js'

const GoodsOfCategoryPage = () => {
	const crumbsList = [
		{
			id: 0,
			href: '/',
			text: 'Главная'
		},
		{
			id: 1,
			href: '/goods-of-category',
			text: 'Каталог'
		}
	]

	return (
		<MainLayout>
			<BreadCrumbs crumbsList={crumbsList} />
			<GoodsOfCategory />
		</MainLayout>
	)
}

export default GoodsOfCategoryPage
