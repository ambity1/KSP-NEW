import useDisableScroll from '@hooks/use-disable-scroll.js'
import { Link } from 'react-router-dom'

import Contacts from '@components/contacts'

import cl from './side-panel-tablet.module.scss'

const BurgerSidePanelTablet = ({ onClose }) => {
	useDisableScroll()
	return (
		<>
			<div className={cl.sidePanelWrapper}>
				<button aria-label="Закрыть" className={cl.btnClose} onClick={onClose} />
				<div className={cl.linksWrapper}>
					<Link to="/">Подбор запчастей по VIN</Link>
					<Link to="/">Подбор запчастей по марке авто</Link>
					<Link to="/about">О компании</Link>
					<Link to="/contacts">Контакты</Link>
				</div>
				<Contacts
					wrapperClassName={cl.wrapper}
					addressesWrapperClassName={cl.addressesWrapper}
					addressItemClassName={cl.addressItem}
					messengersWrapperClassName={cl.messengersWrapper}
				/>
			</div>
			<div className={cl.overlay} />
		</>
	)
}

export default BurgerSidePanelTablet
