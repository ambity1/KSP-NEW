import cn from 'classnames'
import { memo, useMemo } from 'react'
import { Link } from 'react-router-dom'

import cl from './contacts.module.scss'

const Contacts = ({
	wrapperClassName,
	addressesWrapperClassName,
	messengersWrapperClassName,
	addressItemClassName
}) => {
	const addressesList = useMemo(
		() => [
			{
				id: 0,
				text: 'ТД «Car City» (9 бутик)',
				phone: '+7 (707) 164-00-24'
			},
			{
				id: 1,
				text: 'Рынок «Kol Auto» (24 и 59 бутик)',
				phone: '+7 (707) 164-00-24'
			}
		],
		[]
	)
	const messengersList = useMemo(
		() => [
			{
				id: 0,
				href: '/',
				text: 'Whatsapp',
				icon: './assets/icons/whatsapp.svg'
			},
			{
				id: 1,
				href: '/',
				text: 'Telegram',
				icon: './assets/icons/telegram.svg'
			},
			{
				id: 2,
				href: 'https://www.instagram.com/korean_parts_024?igsh=Mzg2ajQxbDlsMDY=',
				text: 'Instagram',
				icon: './assets/icons/instagram.svg'
			}
		],
		[]
	)

	return (
		<div className={cn([cl.wrapper, wrapperClassName])}>
			<ul className={cn([cl.addressesList, addressesWrapperClassName])}>
				{addressesList.map(({ id, text, phone }) => (
					<li key={id} className={cn([cl.addressItem, addressItemClassName])}>
						<span className={cl.address}>{text}</span>
						<Link to={`tel:${phone}`}>{phone}</Link>
					</li>
				))}
			</ul>
			<ul className={cn([cl.messengersWrapper, messengersWrapperClassName])}>
				<li>
					<h4>Мессенджеры:</h4>
				</li>
				{messengersList.map(({ id, href, text, icon }) => (
					<li key={id}>
						<Link className={cl.messengerItem} to={href}>
							<img src={icon} alt="" className={cl.icons} />
							{text}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default memo(Contacts)
