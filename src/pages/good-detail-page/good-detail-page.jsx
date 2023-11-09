import MainLayout from '@layouts/main'
import { memo } from 'react'

import GoodDetail from '@components/good-detail'

const GoodDetailPage = () => {
	return (
		<MainLayout>
			<GoodDetail />
		</MainLayout>
	)
}

export default memo(GoodDetailPage)
