import BreadCrumbs from '@layouts/components/bread-сrumbs/bread-crumbs.jsx'
import cn from 'classnames'

import Contacts from '@components/contacts'
import Map from '@components/map'

import cl from './contacts-container.module.scss'

const ContactsContainer = () => {
	const contactsWrapperClassNames = cn([cl.wrapper, 'container'])

	return (
		<div className={contactsWrapperClassNames}>
			<h1 className={cl.title}>Контакты</h1>
			<div className={cl.contentWrapper}>
				<Contacts />
				<Map />
			</div>
		</div>
	)
}

export default ContactsContainer
