import { Theme, presetGpnDark } from '@consta/uikit/Theme'
import useScrollTop from '@hooks/use-scroll-top.js'
import { memo } from 'react'

import Footer from '@components/footer'
import Header from '@components/header'

import BreadCrumbs from '../components/bread-сrumbs'

const MainLayout = ({ children, hideBreadCrumbs }) => {
	useScrollTop()
	return (
		<Theme preset={presetGpnDark}>
			<Header />
			{!hideBreadCrumbs && <BreadCrumbs />}
			{children}
			<Footer />
		</Theme>
	)
}

export default memo(MainLayout)
