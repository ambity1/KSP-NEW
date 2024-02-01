import React, { useState } from 'react'

import cl from './cards.module.scss'

const Cards = ({ categoryImg, categoryName, sparePartsCategory }) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className={cl.categoryCard}>
			<div onClick={() => setIsOpen(!isOpen)} className={`${cl.cardTitle}${isOpen ? ' active' : ''}`}>
				<img src={categoryImg} alt="" />
				<span>{categoryName}</span>
			</div>
			<div className={`${cl.spareParts}${isOpen ? 'active' : ''}`}>
				<span className={cl.sparePartsName}>{sparePartsCategory}</span>
				{/* <span className={cl.sparePartsContinuation}>Все подкатегории</span> */}
			</div>
		</div>
	)
}

export default Cards
