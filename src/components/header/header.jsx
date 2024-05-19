import { TextField } from '@consta/uikit/TextField'
import useMatchMedia from '@hooks/use-match-media.js'
import cn from 'classnames'
import { memo, useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '@ui/button/index.js'

import HelpWithSelection from '@components/main/hero-screen/selection/help-with-selection/index.js'

import phone from '/assets/icons/phone.svg'
import Burger from './burger'
import CartButton from './cart-button'
import cl from './header.module.scss'
import InputSearch from './input-search'

const Header = ({ closeSidePanel, sidePanelIsOpen }) => {
	const [isOpen, setIsOpen] = useState(false)
	const { isMobile, isTabletSmall, isDesktop } = useMatchMedia()
	const [search, setSearch] = useState(null)
	const handleChange = (search) => setSearch(search)
	// const [activeTab, setActiveTab] = useState('vin')

	const togglePanel = () => {
		setIsOpen(!isOpen)
	}
	const closePanel = () => {
		setIsOpen(false)
	}

	const headerContentWrapperClassNames = cn([cl.headerContentWrapper, 'container'])

	return (
		<header className={cl.header}>
			<div className={headerContentWrapperClassNames}>
				<Link to="/">
					<img className={cl.logo} src="/assets/images/logo.svg" alt="" />
				</Link>
				<div className={cl.second}>
					<InputSearch />
					<Link className={cl.phone} to="tel:+77071640024">
						<img src={phone} alt="" />
						<span>+7 (707) 164-00-24</span>
					</Link>
					<div>
						<Button sizeStyle="sizeM" colorStyle="outlined" className={cl.help} onClick={togglePanel}>
							Помощь с подбором
						</Button>
						<Button sizeStyle="sizeS" colorStyle="outlined" className={cl.helpSmall} onClick={togglePanel}>
							Помощь с подбором
						</Button>
						{isOpen ? <HelpWithSelection onClose={closePanel} /> : ''}
					</div>
					{/* <CartButton /> */}
					{/* <Burger /> */}
					{/* <div> */}
					{/* <button className={cl.burger} onClick={() => closeSidePanel(!sidePanelIsOpen)} /> */}
					<img style={{cursor: "pointer"}} src="/assets/icons/burger.svg" alt="" onClick={() => closeSidePanel(!sidePanelIsOpen)} />
					{/* </div> */}
				</div>
			</div>
		</header>
	)
}

export default memo(Header)
