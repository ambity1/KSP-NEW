import body from '@assets/images/model-categories/body.jpg'
import bodyElements from '@assets/images/model-categories/bodyElements.jpg'
import bodyGlasses from '@assets/images/model-categories/bodyGlasses.jpg'
import engine from '@assets/images/model-categories/engine.jpg'
import engineGearboxSuspension from '@assets/images/model-categories/engineGearboxSuspension.jpg'
import oilsTechnicalFluids from '@assets/images/model-categories/oilsTechnicalFluids.jpg'
import optics from '@assets/images/model-categories/optics.jpg'
import wheelSuspension from '@assets/images/model-categories/wheelSuspension.jpg'
import cn from 'classnames'
import React from 'react'

import cl from './model-categories.module.scss'

const ModelCategories = () => {
	const categoriesList = [
		{
			categoryImg: engine,
			categoryName: 'Двигатель',
			sparePartsCategory: ['Вкладыши коренные']
		},
		{
			categoryImg: body,
			categoryName: 'Кузов внутри',
			sparePartsCategory: ['Вкладыши коренные']
		},
		{
			categoryImg: bodyElements,
			categoryName: 'Кузов наружные элементы',
			sparePartsCategory: ['Вкладыши коренные']
		},
		{
			categoryImg: bodyGlasses,
			categoryName: 'Кузовные стёкла',
			sparePartsCategory: ['Вкладыши коренные']
		},
		{
			categoryImg: optics,
			categoryName: 'Оптика',
			sparePartsCategory: ['Вкладыши коренные']
		},
		{
			categoryImg: engineGearboxSuspension,
			categoryName: 'Подвеска двигателя / КПП',
			sparePartsCategory: ['Вкладыши коренные']
		},
		{
			categoryImg: wheelSuspension,
			categoryName: 'Подвеска задних колёс',
			sparePartsCategory: ['Вкладыши коренные']
		},
		{
			categoryImg: oilsTechnicalFluids,
			categoryName: 'Масла и тех. жидкости',
			sparePartsCategory: ['Вкладыши коренные']
		}
	]

	return (
		<div className={cn([cl.wrapper, 'container'])}>
			<h1 className={cl.title}>Запчасти на Sonata Тагаз, код двигателя G4GC</h1>
			<div className={cl.categories}>
				{categoriesList.map(({ categoryImg, categoryName, sparePartsCategory }) => (
					<div className={cl.categoryCard}>
						<div className={cl.categoryCardTitle}>
							<img src={categoryImg} alt="" />
							<span>{categoryName}</span>
						</div>
						<div className={cl.spareParts}>
							<span className={cl.sparePartsName}>{sparePartsCategory}</span>
							<span className={cl.sparePartsContinuation}>Все подкатегории</span>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default ModelCategories
