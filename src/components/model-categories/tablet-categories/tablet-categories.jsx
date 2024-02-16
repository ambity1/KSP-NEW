import React from 'react'

import Cards from '@components/model-categories/tablet-categories/cards/cards.jsx'

import cl from './tablet-categories.module.scss'

const TabletCategories = ({ categoriesList }) => {
	return (
		<div className={cl.categories}>
			{categoriesList.map(({ categoryImg, categoryName, sparePartsCategory }) => (
				<Cards categoryImg={categoryImg} categoryName={categoryName} sparePartsCategory={sparePartsCategory} />
			))}
		</div>
	)
}

export default TabletCategories
