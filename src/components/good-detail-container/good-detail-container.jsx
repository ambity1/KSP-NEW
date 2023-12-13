import useMatchMedia from '@hooks/use-match-media.js'
import { memo, useMemo } from 'react'

import Tabs from '@ui/tabs'

import Parameters from '@components/good-detail-container/parameters'
import OtherGoodsSlider from '@components/other-goods-slider'

import GoodDetail from './good-detail'
import cl from './good-detail-container.module.scss'

function GoodDetailContainer() {
	const { isDesktop } = useMatchMedia()

	const tabs = useMemo(
		() => [
			{
				id: 'parameters',
				label: 'Характеристики',
				component: <Parameters />
			},
			{
				id: 'reviews',
				label: 'Отзывы о поставщике',
				component: <span className={cl.content}>Отзывов пока нет</span>
			}
		],
		[]
	)

	return (
		<>
			<GoodDetail />
			<div className={cl.tabsWrapper}>{isDesktop && <Tabs tabs={tabs} />}</div>
			<OtherGoodsSlider />
		</>
	)
}

export default memo(GoodDetailContainer)
