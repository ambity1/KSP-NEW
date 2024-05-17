import useMatchMedia from '@hooks/use-match-media.js'
import cn from 'classnames'
import { memo, useState } from 'react'

import Button from '@ui/button'

// import Counter from '@ui/counter'
import SendRequest from '@components/good-detail-container/send-request/send-request.jsx'

// import HelpWithSelection from '@components/main/hero-screen/selection/help-with-selection/index.js'
import cl from './good-detail.module.scss'

const GoodDetail = (props) => {
	const { isDesktop } = useMatchMedia()
	const goodDetailWrapperClassNames = cn([cl.wrapper, 'container'])
	const descriptionWrapperClassNames = cn([cl.description, 'container'])

	const [inBasket, setInBasket] = useState(false)
	const [isOpen, setIsOpen] = useState(false)
	const togglePanel = () => {
		setIsOpen(!isOpen)
	}
	const closePanel = () => {
		setIsOpen(false)
	}

	return (
		<div key={props.id}>
			<div className={goodDetailWrapperClassNames}>
				{/* <img className={cl.image} src={goodImageSrc} alt="" /> */}
				<div className={cl.contentWrapper}>
					<h1 className={cl.title}>{props.name}</h1>
					{props.price !== null && <span className={cl.price}>{props.price} ₽</span>}
					<div className={cl.extraInfoWrapper}>
						<span>Номер товара: {props.articulate}</span>
						{/* <span>Номер товара: {props.description}</span> */}
						{/* <span>Производитель: Atek</span> */}
						{/* <span className={cl.rate}>Рейтинг: 4,5 </span> */}
					</div>
					<div className={cl.actionsWrapper}>
						{/* <div onClick={() => setInBasket(!inBasket)}> */}
						{props.price !== null ? (
							<Button additionalStyles={['mobileWide']} className={cl.basketBtn} onClick={togglePanel}>
								Оставить заявку
							</Button>
						) : (
							<Button additionalStyles={['mobileWide']} className={cl.basketBtn} onClick={togglePanel}>
								Уточнить цену
							</Button>
						)}
						{/* <Button additionalStyles={['mobileWide']} className={cl.basketBtn} onClick={togglePanel}> */}
						{/* 	Оставить заявку */}
						{/* </Button> */}
						{/* </div> */}
						{isOpen ? <SendRequest onClose={closePanel} /> : null}
						{/* {inBasket === true ? ( */}
						{/* 	<Counter /> */}
						{/* ) : ( */}
						{/* 	<div onClick={() => setInBasket(!inBasket)}> */}
						{/* 		<Button additionalStyles={['mobileWide']} className={cl.basketBtn}> */}
						{/* 			Оставить заявку */}
						{/* 		</Button> */}
						{/* 	</div> */}
						{/* )} */}
						{/* <Button additionalStyles={['mobileWide']} colorStyle="outlined" className={cl.favouritesAction}> */}
						{/* 	<span>В избранное</span> */}
						{/* </Button> */}
					</div>
					{/* <span className={cl.availableAmount}> */}
					{/* 	<b>В наличии: </b>3 шт */}
					{/* </span> */}
				</div>
			</div>
			{isDesktop && (
				<div className={descriptionWrapperClassNames}>
					<div className={cl.header}>
						<div className={cl.name}>Описание</div>
					</div>
					<div className={cl.information}>{props.description}</div>
				</div>
			)}
		</div>
	)
}

export default memo(GoodDetail)
