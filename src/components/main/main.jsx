import { memo } from 'react'

import CarBands from '@components/car-brands'
import AboutCompany from '@components/main/about-company'
import AssociatedGoods from '@components/main/associated-goods'
import ContactsContainer from '@components/main/contacts-container'
import HeroScreen from '@components/main/hero-screen'

const Main = () => {
	return (
		<>
			<HeroScreen />
			<AssociatedGoods />
			<CarBands />
			<AboutCompany />
			<ContactsContainer />
		</>
	)
}

export default memo(Main)
