import ButtonLink from '@ui/button/link'

import car from '../../../../../../assets/images/car.jpg'
import cl from './card.module.scss'
import { Link } from "react-router-dom";

const Card = ({ title, button }) => {
	return (
		<div className={cl.cardWrapper}>
			<img className={cl.img} src="../../../../../../assets/images/car.jpg" alt="" />
			<div className={cl.contentWrapper}>
				<span className={cl.logo} />
				<h1 className={cl.title}>{title}</h1>
				{/* <Link to='/goods-of-category'> */}
					<ButtonLink className={cl.btnLink} sizeStyle="sizeM" colorStyle="outlined" href='/goods-of-category'>
						{button}
					</ButtonLink>
				{/* </Link> */}
			</div>
		</div>
	)
}

export default Card
