import cn from 'classnames'
import { memo } from 'react'

// import RateBar from '@components/other-goods-slider/good-card/rate-bar'
// import goodDetail from '../../../../assets/images/good1.jpg'
import cl from './good-card.module.scss'

const GoodCard = (props) => {
	return (
		<div className={cl.wrapper}>
			{/* <img className={cl.image} src={image} alt="" /> */}
			<div className={cn([cl.description])}>
				<h3 className={cl.title}>{props.description}</h3>
				{/* <RateBar rate="4.5" hideScore={false} /> */}
				<span className={cl.cost}>{props.price}</span>
			</div>
			{/* <span className={cl.delivery}>от 6 дней</span> */}
		</div>
	)
}

export default memo(GoodCard)
