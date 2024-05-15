import useMatchMedia from '@hooks/use-match-media.js'
import useScrollTop from '@hooks/use-scroll-top.js'
import { memo, useState } from 'react'

import Footer from '@components/footer'
import Header from '@components/header'
import BurgerSidePanel from '@components/header/burger/side-panel/desktop/index.js'
import BurgerSidePanelTablet from '@components/header/burger/side-panel/tablet/index.js'

import BreadCrumbs from '../components/bread-сrumbs'

const MainLayout = ({ children, hideBreadCrumbs }) => {
	useScrollTop()
	const { isDesktop } = useMatchMedia()

	const [isOpen, setIsOpen] = useState(false)

	if (isOpen) {
		document.body.style.overflow = 'hidden'
	} else {
		document.body.style.overflow = ''
	}

	return (
		<>
			<Header closeSidePanel={(value) => setIsOpen(value)} sidePanelIsOpen={isOpen} />
			{!hideBreadCrumbs && <BreadCrumbs />}
			{children}

			<Footer />
			{isDesktop ? (
				<BurgerSidePanel onClose={() => setIsOpen(false)} isOpen={isOpen} />
			) : (
				<BurgerSidePanelTablet onClose={() => setIsOpen(false)} isOpen={isOpen} />
			)}
		</>
	)
}

export default memo(MainLayout)
