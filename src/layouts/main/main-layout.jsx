import { memo } from 'react'

import Footer from '@components/footer'
import Header from '@components/header'

const MainLayout = ({ children }) => {
	return (
		<>
			<div className="container">
				<Header />
				{children}
			</div>
			<Footer />
		</>
	)
}

export default memo(MainLayout)
