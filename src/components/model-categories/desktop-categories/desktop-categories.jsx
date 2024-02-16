import React from 'react'

import cl from './desktop-categories.module.scss'

const DesktopCategories = ({ categoriesList }) => {
	return (
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
	)
}

export default DesktopCategories
