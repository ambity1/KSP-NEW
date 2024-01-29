import cn from 'classnames'

import Button from '@ui/button/index.js'

import GoodCard from '@components/other-goods-slider/good-card/good-card.jsx'

import cl from './goods-of-category.module.scss'

const GoodsOfCategory = () => {
	return (
		<div className={cn([cl.goodsOfCategoryWrapper, 'container'])}>
			<h1 className={cl.title}>Кронштейн фары противотуманной левой на Sonata Тагаз, код двигателя G4GC</h1>
			<div className={cl.wrapper}>
				<div>
					<Button>католог</Button>
					<div>Filters</div>
				</div>
				<div className={cl.goodsWrapper}>
					<GoodCard />
					<GoodCard />
					<GoodCard />
				</div>
			</div>
		</div>
	)
}

export default GoodsOfCategory
