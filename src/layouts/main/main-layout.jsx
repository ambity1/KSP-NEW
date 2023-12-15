import { Theme, presetGpnDark } from '@consta/uikit/Theme'
import { bgColors } from '@consta/uikit/__internal__/src/uiKit/components/ThemePreview/helpers.js'
import { memo } from 'react'

import Footer from '@components/footer'
import Header from '@components/header'

import BreadCrumbs from '../components/bread-сrumbs'

function MainLayout({ children, hideBreadCrumbs }) {
	return (
		<>
			<div className="container">
				<Header />
				{!hideBreadCrumbs && <BreadCrumbs />}
				{children}
			</div>
			<Footer />
		</>
	)
}

export default memo(MainLayout)
