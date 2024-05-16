import useDisableScroll from '@hooks/use-disable-scroll.js'
import cn from 'classnames'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import getRawPhoneFromParsedPhone from '@helpers/getRawPhoneFromParsedPhone.js'
import parseRawPhone from '@helpers/parseRawPhone.js'

import Button from '@ui/button'

import cl from './send-request.module.scss'

const SendRequest = ({ onClose }) => {
	useDisableScroll()

	const [isOk, setIsOk] = useState('default')
	// const [isWasClosed, setIsWasClosed] = useState(false)
	const [isDisabled, setIsDisabled] = useState(false)
	const [viewPhone, setViewPhone] = useState('')
	const [phone, setPhone] = useState('')

	const submitForm = (e) => {
		e.preventDefault()

		setIsDisabled(true)

		const fd = new FormData(e.target)

		const fdPhone = fd.get('phone')

		if (fdPhone.slice(0, 1) === '8') {
			fd.set('phone', `+7${fdPhone.slice(1)}`)
		}

		if (
			fd
				.get('phone')
				.split(/[-_()^\s*$]+/)
				.join('').length === 12
		) {
			fetch('http://a0814722.xsph.ru/api/request', { method: 'post', body: fd })
				.then((resp) => resp.json())
				.then((res) => {
					if (res.status === 'ok') {
						setIsOk('successfully')
					} else {
						setIsOk('error')
					}
				})
				.finally(() => {
					setIsDisabled(false)
				})
		} else {
			setIsDisabled(false)
			alert('Заполните номер телефона')
		}
	}

	const changePhoneHandler = (event) => {
		const rawPhone = getRawPhoneFromParsedPhone(event.target.value, viewPhone)
		const newViewPhone = parseRawPhone(rawPhone)

		setViewPhone(newViewPhone)
		setPhone(rawPhone)
	}
	return (
		<>
			<div className={cl.overlay} onClick={onClose} />
			{/* <div className={cl.wrapper}> */}
			<div>
				{isOk === 'successfully' ? (
					<div className={cl.wrapper}>
						<button className={cl.btnClose} onClick={onClose} />
						<div className={cl.contentWrapper}>
							<img className={cl.clipboard} src="../../../../../../assets/images/clipboard.svg" alt="" />
							<h2 className={cl.title}>Заявка успешно отправлена!</h2>
							<div className={cl.contentContainer}>
								<span className={cl.text}>Мы скоро свяжемся с вами</span>
							</div>
						</div>
					</div>
				) : isOk === 'default' ? (
					<div className={cl.wrapper}>
						<button className={cl.btnClose} onClick={onClose} />
						<div className={cl.contentWrapper}>
							<h2 className={cl.title}>Оставить заявку</h2>
							<div className={cl.contactsWrapper}>
								<span className={cl.text}>Или напишите нам в любую из соц. сетей:</span>
								<form className={cl.inputWrapper} onSubmit={submitForm}>
									{/* <input className={cl.input} type="number" placeholder="Телефон" /> */}
									<input
										className={cl.input}
										onChange={changePhoneHandler}
										value={viewPhone}
										type="text"
										size="16"
										placeholder="Телефон"
										required
										disabled={isDisabled}
									/>
									<input name="phone" type="hidden" tabIndex={-1} readOnly value={phone} />
									<div className={cl.btnWrapper}>
										<Button type="submit" className={cl.button} sizeStyle="sizeS">
											Отправить
										</Button>
									</div>
								</form>
								<span className={cl.confidential}>
									Нажимая на кнопку, вы соглашаетесь с{' '}
									<Link to="/privacy-policy" className={cl.underline}>
										Политикой конфиденциальности
									</Link>
								</span>
							</div>
							<div className={cl.contentContainer}>
								<span className={cl.text}>Или напишите нам в любую из соц. сетей:</span>
								<div className={cl.linkWrapper}>
									<Link className={cn([cl.link, cl.whatsapp])} to="https://api.whatsapp.com/send/?phone=77071640024&text&type=phone_number&app_absent=0" target='_blank'>
										Связаться в Whatsapp
									</Link>
									<Link className={cn([cl.link, cl.telegram])} to="#">
										Связаться в Telegram
									</Link>
								</div>
							</div>
						</div>
					</div>
				) : (
					<div className={cl.wrapper}>
						<button className={cl.btnClose} onClick={onClose} />
						<div className={cl.contentWrapper}>
							<h2 className={cl.title}>Ошибка!</h2>
							<div className={cl.contentContainer}>
								<span className={cl.text}>Произошла ошибка, попробуйте снова позже.</span>
							</div>
						</div>
					</div>
				)}
			</div>
			{/* </div> */}
		</>
	)
}

export default SendRequest
