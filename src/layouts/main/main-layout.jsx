import useScrollTop from '@hooks/use-scroll-top.js'
import { memo } from 'react'

import Footer from '@components/footer'
import Header from '@components/header'

import BreadCrumbs from '../components/bread-сrumbs'

const MainLayout = ({ children, hideBreadCrumbs }) => {
	useScrollTop()
	return (
		<>
			<Header />
			{!hideBreadCrumbs && <BreadCrumbs />}
			{children}

			<Footer />
		</>
	)
}

export default memo(MainLayout)
