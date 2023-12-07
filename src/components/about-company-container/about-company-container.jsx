import AboutCompany from '@components/about-company-container/about-company'
import CarBands from '@components/car-brands/car-bands.jsx'
import ContactsContainer from '@components/main/contacts-container/contacts-container.jsx'

const AboutCompanyContainer = () => {
	return (
		<>
			<AboutCompany />
			<CarBands />
			<ContactsContainer />
		</>
	)
}

export default AboutCompanyContainer
