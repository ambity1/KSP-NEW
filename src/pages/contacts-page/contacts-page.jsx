import BreadCrumbs from '@layouts/components/bread-сrumbs/index.js'
import MainLayout from '@layouts/main'

import ContactsContainer from '@components/contacts-container'

const ContactsPage = () => {
	const crumbsList = [
		{
			id: 0,
			href: '/',
			text: 'Главная'
		},
		{
			id: 1,
			href: '/contacts',
			text: 'Контакты'
		}
	]

	return (
		<MainLayout>
			<BreadCrumbs crumbsList={crumbsList} />
			<ContactsContainer />
		</MainLayout>
	)
}

export default ContactsPage
