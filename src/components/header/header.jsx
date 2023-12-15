import cn from 'classnames'
import { memo } from 'react'
import { Link } from 'react-router-dom'

import phone from '../../../assets/icons/phone.svg'
import Burger from './burger'
import CartButton from './cart-button'
import cl from './header.module.scss'
import InputSearch from './input-search'

const Header = () => {
	const headerContentWrapperClassNames = cn([cl.headerContentWrapper, 'container'])

	return (
		<header className={cl.header}>
			<div className={headerContentWrapperClassNames}>
				<Link className={cl.logo} to="/" />
				<InputSearch />
				<Link className={cl.phone} to="tel:+7 (915) 123-45-67">
					<img src={phone} alt="" />
					<span>+7 (915) 123-45-67</span>
				</Link>
				<CartButton />
				<Burger />
			</div>
		</header>
	)
}

export default memo(Header)
