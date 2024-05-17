import cn from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

import cl from './refund.module.scss'

const Refund = () => {
	return (
		<div className={cl.content}>
			<div className={cl.contentBlock}>
				<h3 className={cn([cl.mail, cl.contentTitle])}>Если вы хотите вернуть товар</h3>
				<p className={cl.contentText}>
					Если у вас возникли какие-либо вопросы или проблемы товаром, пожалуйста, свяжитесь с нами по телефону. Мы всегда готовы помочь и решить вашу проблему.
				</p>
				<br />
				<Link className={cl.contentText} to="tel:+77071640024">
					+7 (707) 164-00-24
				</Link>
			</div>
		</div>
	)
}

export default Refund
