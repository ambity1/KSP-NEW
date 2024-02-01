import body from '@assets/images/model-categories/body.jpg'
import bodyElements from '@assets/images/model-categories/bodyElements.jpg'
import bodyGlasses from '@assets/images/model-categories/bodyGlasses.jpg'
import engine from '@assets/images/model-categories/engine.jpg'
import engineGearboxSuspension from '@assets/images/model-categories/engineGearboxSuspension.jpg'
import oilsTechnicalFluids from '@assets/images/model-categories/oilsTechnicalFluids.jpg'
import optics from '@assets/images/model-categories/optics.jpg'
import wheelSuspension from '@assets/images/model-categories/wheelSuspension.jpg'
import useMatchMedia from '@hooks/use-match-media.js'
import cn from 'classnames'
import React from 'react'

import DesktopCategories from '@components/model-categories/desktop-categories/index.js'
import TabletCategories from '@components/model-categories/tablet-categories/index.js'

import cl from './model-categories.module.scss'

const ModelCategories = () => {
	const { isDesktop } = useMatchMedia()

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
			{isDesktop ? (
				<DesktopCategories categoriesList={categoriesList} />
			) : (
				<TabletCategories categoriesList={categoriesList} />
			)}
		</div>
	)
}

export default ModelCategories
