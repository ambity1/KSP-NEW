import { memo } from 'react'

import AutoPartsCatalog from '@components/auto-parts-catalog/auto-parts-catalog.jsx'
import CarBands from '@components/car-brands'
import AboutCompany from '@components/main/about-company'
import AssociatedGoods from '@components/main/associated-goods'
import ContactsContainer from '@components/main/contacts-container'
import HeroScreen from '@components/main/hero-screen'

const Main = () => {
	return (
		<>
			<HeroScreen />
			<AutoPartsCatalog />
			{/* <AssociatedGoods /> */}
			<CarBands />
			<AboutCompany />
			<ContactsContainer />
		</>
	)
}

export default memo(Main)
