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
					<div className={cl.catalogBlock}>
						<Button>Каталог</Button>
						<div className={cl.menu}>
							<ul className={cl.menuList}>
								<li className={cl.menuListItem}>Двигатель</li>
								<li className={cl.menuListItem}>Кузов внутри</li>
								<li className={cl.menuListItem}>Кузов наружные элементы</li>
							</ul>
						</div>
					</div>
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
