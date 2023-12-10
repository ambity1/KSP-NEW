import Contacts from '@components/contacts/contacts.jsx'
import Map from '@components/map/map.jsx'

import cl from './contacts-container.module.scss'

const ContactsContainer = () => {
	return (
		<div className={cl.wrapper}>
			<h1 className={cl.title}>Контакты</h1>
			<div className={cl.contentWrapper}>
				<Contacts />
				<Map />
			</div>
		</div>
	)
}

export default ContactsContainer
