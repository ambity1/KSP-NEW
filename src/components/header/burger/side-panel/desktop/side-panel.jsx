import phone from '@assets/icons/phone.svg'
import useDisableScroll from '@hooks/use-disable-scroll.js'
import cn from 'classnames'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

import CartButton from '@components/header/cart-button/cart-button.jsx'
import InputSearch from '@components/header/input-search/input-search.jsx'

import cl from './side-panel.module.scss'

const BurgerSidePanel = ({ isOpen, onClose }) => {
	const [isWasClosed, setIsWasClosed] = useState(false)

	// useDisableScroll()

	const navigationsList = useMemo(
		() => [
			{
				id: 0,
				links: [
					{
						id: 0,
						href: '/',
						text: 'Подбор запчастей по VIN'
					},
					{
						id: 1,
						href: '/',
						text: 'Подбор запчастей по марке авто'
					},
					{
						id: 2,
						href: '/',
						text: 'Помощь с подбором'
					},
					{
						id: 3,
						href: '/stock',
						text: 'Акции'
					},
					{
						id: 4,
						href: '/contacts',
						text: 'Контакты'
					}
				]
			},

			{
				id: 1,
				links: [
					{
						id: 0,
						href: '/information/delivery',
						text: 'Доставка'
					},
					{
						id: 1,
						href: '/information/payment',
						text: 'Оплата'
					},
					{
						id: 2,
						href: '/information/refund',
						text: 'Возврат'
					},
					{
						id: 3,
						href: '/about',
						text: 'О компании'
					},
					{
						id: 4,
						href: '/',
						text: 'Поставщикам'
					}
				]
			}
		],
		[]
	)

	const contactsList = useMemo(
		() => [
			{
				id: 0,
				href: '/',
				className: cl.whatsapp,
				text: 'Whatsapp'
			},
			{
				id: 1,
				href: '/',
				className: cl.telegram,
				text: 'Telegram'
			},
			{
				id: 2,
				href: '/',
				className: cl.instagram,
				text: 'Instagram'
			}
		],
		[]
	)

	// const closeHandler = () => {
	// 	setIsWasClosed(true)
	// 	setTimeout(() => onClose(), 500)
	// }
	const sidePanelWrapperClassNames = cn([cl.sidePanelWrapper, 'container', { [cl.sidePanelClosed]: isWasClosed }])

	return (
		<div className={isOpen ? cl.sidePanel : cn([cl.sidePanel, cl.sidePanelClosed])}>
			<div className={sidePanelWrapperClassNames}>
				{/* <header className={cl.headerWrapper}> */}
				{/*	<Link className={cl.logo} to="/" /> */}
				{/*	<InputSearch /> */}
				{/*	<Link className={cl.phone} to="tel:+7 (707) 164-00-24"> */}
				{/*		<img src={phone} alt="" /> */}
				{/*		<span>+7 (707) 164-00-24</span> */}
				{/*	</Link> */}
				{/*	<CartButton /> */}
				{/*	<button aria-label="Закрыть" className={cl.btnClose} onClick={closeHandler} /> */}
				{/* </header> */}
				<div className={cl.navigationWrapper}>
					{navigationsList.map(({ id, links }) => (
						<nav key={id}>
							<ul className={cl.navigationListWrapper}>
								{links.map(({ id: linkId, text, href }) => (
									<li key={linkId}>
										<Link onClick={onClose} className={cl.navigationItem} to={href}>
											{text}
										</Link>
									</li>
								))}
							</ul>
						</nav>
					))}
				</div>
				<footer>
					<ul className={cl.footerListWrapper}>
						{contactsList.map(({ id, className, href, text }) => (
							<li key={id}>
								<Link className={cn([cl.messengerItem, className])} to={href}>
									{text}
								</Link>
							</li>
						))}
					</ul>
				</footer>
			</div>
		</div>
	)
}

export default BurgerSidePanel
