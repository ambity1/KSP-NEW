import { Theme, presetGpnDefault } from '@consta/uikit/Theme'
import { memo } from 'react'

import Footer from '@components/footer'
import Header from '@components/header'

import BreadCrumbs from '../components/bread-сrumbs'

function MainLayout({ children, hideBreadCrumbs }) {
	return (
		<Theme preset={presetGpnDefault}>
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
