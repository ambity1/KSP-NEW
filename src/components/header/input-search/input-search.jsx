// import { AutoComplete } from '@consta/uikit/AutoCompleteCanary'
import { IconSearchStroked } from '@consta/icons/IconSearchStroked'
import { TextField } from '@consta/uikit/TextField'
import useMatchMedia from '@hooks/use-match-media.js'
import cn from 'classnames'
import { memo, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '@ui/button'

import Contacts from '@components/contacts/contacts.jsx'

// import search from '../../../../assets/icons/search.svg'
import cl from './input-search.module.scss'

const InputSearch = () => {
	const { isMobile, isTablet, isTabletSmall, isDesktop } = useMatchMedia()
	const [isOpen, setIsOpen] = useState(false)
	const [search, setSearch] = useState(null)
	const handleChange = (search) => setSearch(search)

	if (isOpen) {
		document.body.style.overflow = 'hidden'
	} else {
		document.body.style.overflow = ''
	}

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 768) {
				setIsOpen(false)
			}
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	if (isMobile || isTabletSmall) {
		// PLACEHOLDER
		return (
			<>
				<div className={cn([`${cl.sidePanelInput} ${isOpen ? '' : cl.active}`])}>
					<div className={`${isOpen ? cl.overlay : ''}`} onClick={() => setIsOpen(false)} />
					<div className={cl.sidePanelInputContent}>
						{/* <img */}
						{/* 	src="../../../../../../assets/icons/closebtn.svg" */}
						{/* 	alt="" */}
						{/* 	className={cl.btnClose} */}
						{/* 	onClick={() => setIsOpen(false)} */}
						{/* /> */}
						{/* <div className={cl.wrapper}> */}
						{/* 	<input className={cl.input} type="text" placeholder="Наименование, номер запчасти или VIN" /> */}
						{/* </div> */}
						<TextField
							leftSide={IconSearchStroked}
							// className={cl.input}
							size="l"
							onChange={handleChange}
							value={search}
							type="textarea"
							// rows={3}
							placeholder="Наименование, номер запчасти или VIN"
						/>
					</div>
				</div>

				<img
					className={cl.modalButton}
					src="../../../../assets/icons/search.svg"
					alt=""
					onClick={() => setIsOpen(true)}
				/>
			</>
		)
	}
	// const items = ['Первый', 'Второй', 'Третий', 'Четвертый', 'Пятый']
	return (
		<form className={cl.wrapper}>
			{/* <form> */}
			{/* <input className={cl.input} type="text" placeholder="Название, номер запчасти или артикль" /> */}
			{isDesktop && (
				<TextField
					// className={cl.input}
					size="l"
					onChange={handleChange}
					value={search}
					type="text"
					placeholder="Наименование, номер запчасти или артикль"
				/>
			)}
			{isTablet && (
				<TextField
					// className={cl.input}
					size="m"
					onChange={handleChange}
					value={search}
					type="text"
					placeholder="Наименование, номер запчасти или артикль"
				/>
			)}
			{isDesktop && (
				<Link to='/goods-of-category'>
					<Button sizeStyle="sizeM" className={cl.button} type="button">
						Найти
					</Button>
				</Link>
			)}
		</form>
	)
}

export default memo(InputSearch)
