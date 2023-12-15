import { Theme, presetGpnDark } from '@consta/uikit/Theme'
import { memo } from 'react'

import Footer from '@components/footer'
import Header from '@components/header'

import BreadCrumbs from '../components/bread-сrumbs'

function MainLayout({ children, hideBreadCrumbs }) {
	return (
		<Theme preset={presetGpnDark}>
			<div className="container">
				<Header />
				{!hideBreadCrumbs && <BreadCrumbs />}
				{children}
			</div>
			<Footer />
		</Theme>
	)
}

export default memo(MainLayout)
