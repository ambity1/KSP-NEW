import cn from 'classnames'
import { Link } from 'react-router-dom'

import Contacts from '@components/contacts'

import cl from './side-panel-tablet.module.scss'

const BurgerSidePanelTablet = ({ isOpen, onClose }) => {
	return (
		<div className={cn([`${cl.sidePanelWrapper} ${isOpen ? '' : cl.active}`])}>
			<div className={`${isOpen ? cl.overlay : ''}`} onClick={onClose} />
			<div className={cl.sidePanelWrapperContent}>
				<img src="../../../../../../assets/icons/closebtn.svg" alt="" className={cl.btnClose} onClick={onClose} />
				<div className={cl.linksWrapper}>
					<Link to="/" className={cl.linksWrapperYellow}>
						Поиск автозапчастей
					</Link>
					<Link to="/stock">Акции</Link>
					<Link to="/about">О компании</Link>
					<Link to="/contacts">Контакты</Link>
					<Link to="/information/payment">Оплата</Link>
					<Link to="/information/delivery">Доставка</Link>
					<Link to="/information/refund">Возврат</Link>
				</div>
				<Contacts
					wrapperClassName={cl.wrapper}
					addressesWrapperClassName={cl.addressesWrapper}
					addressItemClassName={cl.addressItem}
					messengersWrapperClassName={cl.messengersWrapper}
				/>
			</div>
		</div>
	)
}

export default BurgerSidePanelTablet
