import useMatchMedia from '@hooks/use-match-media.js'
import cn from 'classnames'
import { memo, useMemo } from 'react'
import { useParams } from 'react-router-dom'

import Tabs from '@ui/tabs'

import Parameters from '@components/good-detail-container/parameters'
import OtherGoodsSlider from '@components/other-goods-slider'

import { useGetPartQuery } from '../../store/modules/car-parts-api.js'
import GoodDetail from './good-detail'
import cl from './good-detail-container.module.scss'

function GoodDetailContainer() {
	const { isDesktop } = useMatchMedia()

	const { id } = useParams()
	const { data: getPart } = useGetPartQuery(id)

	// const partPage = [
	// 	{
	// 		id: 0,
	// 		name: 'Кронштейн фары противотуманной левой для Hyundai Sonata VI 2010-2014 БУ состояние удовлетворительное',
	// 		price: '743 ₽',
	// 		article: '92101G6000'
	// 	}
	// ]

	// const tabs = useMemo(
	// 	() => [
	// 		{
	// 			id: 'description',
	// 			label: 'Описание',
	// 			component: <Parameters />
	// 		}
	// {
	// 	id: 'parameters',
	// 	label: 'Характеристики',
	// 	component: <Parameters />
	// }
	// {
	// 	id: 'reviews',
	// 	label: 'Отзывы о поставщике',
	// 	component: <span className={cl.content}>Отзывов пока нет</span>
	// }
	// 	],
	// 	[]
	// )
	// const tabsContentWrapperClassNames = cn([cl.tabsWrapper, 'container'])

	return (
		<>
			{getPart && (
				<GoodDetail
					id={getPart.id}
					name={getPart.name}
					price={getPart.price}
					articulate={getPart.articulate}
					description={getPart.description}
				/>
			)}
			{/* <GoodDetail id={partPage.id} name={partPage.name} price={partPage.price} article={partPage.article} /> */}
			{/* <div className={tabsContentWrapperClassNames}>{isDesktop && <Tabs tabs={tabs} />}</div> */}
			{/* <OtherGoodsSlider /> */}
		</>
	)
}

export default memo(GoodDetailContainer)
