import useMatchMedia from '@hooks/use-match-media.js'
import cn from 'classnames'
import { memo } from 'react'

import Contacts from '@components/contacts'
import Map from '@components/map'

import cl from './contacts-container.module.scss'

const ContactsContainer = () => {
	const { isTablet, isDesktop } = useMatchMedia()
	const contactsWrapperClassNames = cn([cl.wrapper, 'container'])
	return (
		<div className={contactsWrapperClassNames}>
			<h2 className={cl.title}>Контакты</h2>
			<div className={cl.contentWrapper}>
				<Contacts />
				{(isTablet || isDesktop) && <Map />}
			</div>
		</div>
	)
}

export default memo(ContactsContainer)
