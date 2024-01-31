import cardImg from '@assets/icons/cart.svg'
import { memo } from 'react'
import { Link } from 'react-router-dom'

import cl from './cart-button.module.scss'

const CartButton = () => {
	return (
		<Link className={cl.wrapper} to="/basket">
			<div className={cl.cartButton}>
				<img src={cardImg} alt="" />
				<span className={cl.counterWrapper}>
					<span className={cl.counter}>2</span>
				</span>
			</div>
			<span className={cl.cost}>170 550&nbsp;₽</span>
		</Link>
	)
}

export default memo(CartButton)
