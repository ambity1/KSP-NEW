import useMatchMedia from '@hooks/use-match-media.jsx'
import { memo } from 'react'

import OtherGoodsSlider from '@components/other-goods-slider/index.js'

import GeneralDetail from './general-detail'
import Tabs from './tabs'

const GoodDetail = () => {
	const { isDesktop } = useMatchMedia()

	return (
		<>
			<GeneralDetail />
			{isDesktop && <Tabs />}
			<OtherGoodsSlider />
		</>
	)
}

export default memo(GoodDetail)
