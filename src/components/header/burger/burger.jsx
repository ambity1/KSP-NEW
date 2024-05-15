import useMatchMedia from '@hooks/use-match-media.js'
import { memo, useState } from 'react'

import BurgerSidePanel from '@components/header/burger/side-panel/desktop'
import BurgerSidePanelTablet from '@components/header/burger/side-panel/tablet/'

import cl from './burger.module.scss'

const Burger = () => {
	const [isOpen, setIsOpen] = useState(false)

	const { isDesktop } = useMatchMedia()

	// const togglePanel = () => {
	// 	setIsOpen(!isOpen)
	// }
	// const closePanel = () => {
	// 	setIsOpen(false)
	// }

	return (
		<div>
			<img src="../../../assets/icons/burger.svg" alt="" onClick={togglePanel} />
			{/* <button className={cl.burger} onClick={togglePanel} /> */}
		</div>
	)
}

export default memo(Burger)
