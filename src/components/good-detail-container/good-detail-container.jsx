import useMatchMedia from '@hooks/use-match-media.jsx'
import { memo } from 'react'
import { useParams } from 'react-router-dom'

import OtherGoodsSlider from '@components/other-goods-slider/index.js'

import GeneralDetail from './general-detail'
import Tabs from './tabs'

function GoodDetailContainer() {
	const { isDesktop } = useMatchMedia()
	const { id } = useParams()

	return (
		<>
			<GeneralDetail />
			{isDesktop && <Tabs />}
			<OtherGoodsSlider />
		</>
	)
}

export default memo(GoodDetailContainer)
