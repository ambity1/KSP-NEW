import BreadCrumbs from '@layouts/components/bread-сrumbs/bread-crumbs.jsx'
import MainLayout from '@layouts/main/main-layout.jsx'
import React from 'react'

import AboutCompanyContainer from '@components/about-company-container'

const AboutCompanyPage = () => {
	const crumbsList = [
		{
			id: 0,
			href: '/',
			text: 'Главная'
		},
		{
			id: 1,
			href: '/about',
			text: 'О компании'
		}
	]

	return (
		<MainLayout>
			<BreadCrumbs crumbsList={crumbsList} />
			<AboutCompanyContainer />
		</MainLayout>
	)
}

export default AboutCompanyPage
