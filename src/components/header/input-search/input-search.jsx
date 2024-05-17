// import { AutoComplete } from '@consta/uikit/AutoCompleteCanary'
import { IconSearchStroked } from '@consta/icons/IconSearchStroked'
import { TextField } from '@consta/uikit/TextField'
import useMatchMedia from '@hooks/use-match-media.js'
import cn from 'classnames'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

import Button from '@ui/button'

import Contacts from '@components/contacts/contacts.jsx'

// import search from '../../../../assets/icons/search.svg'
import cl from './input-search.module.scss'
import ButtonLink from "@ui/button/link/index.js";

const InputSearch = () => {
	const { isMobile, isTablet, isTabletSmall, isDesktop } = useMatchMedia()
	const [isOpen, setIsOpen] = useState(false)
	const [search, setSearch] = useState('');
	const navigate = useNavigate();

	const handleChange = ( value ) => setSearch(value);

	const handleSearch = () => {
		navigate('/goods-of-category', { state: { word: search } });
		setSearch('');
	};

	console.log(search);

	// const handleChange = (search) => setSearch(search)
	// console.log(search);

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

	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			handleSearch();
		}
	};

	if (isMobile || isTabletSmall) {
		// PLACEHOLDER
		return (
			<>
				<div className={cn([`${cl.sidePanelInput} ${isOpen ? '' : cl.active}`])}>
					<div className={`${isOpen ? cl.overlay : ''}`} onClick={() => setIsOpen(false)} />
					<div className={cl.sidePanelInputContent}>
						<img
							src="/assets/icons/closebtn.svg"
							alt=""
							className={cl.btnClose}
							onClick={() => setIsOpen(false)}
						/>
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
							onKeyPress={handleKeyPress}
						/>
					</div>
				</div>

				<img
					className={cl.modalButton}
					src="/assets/icons/search.svg"
					alt=""
					onClick={() => setIsOpen(true)}
				/>
			</>
		)
	}
	// const items = ['Первый', 'Второй', 'Третий', 'Четвертый', 'Пятый']
	return (
		<div className={cl.wrapper}>
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
					onKeyPress={handleKeyPress}
				/>
			)}
			{isDesktop && (
				<Link to='/goods-of-category' state={{search: search}}>
					<Button sizeStyle="sizeM" className={cl.button} type="button" onClick={handleSearch}>
						Найти
					</Button>
				</Link>
			)}
		</div>
	)
}

export default InputSearch
