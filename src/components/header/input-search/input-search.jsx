import useMatchMedia from '@hooks/use-match-media.js'
import { memo } from 'react'

import Button from '@ui/button'

import search from '../../../../assets/icons/search.svg'
import cl from './input-search.module.scss'

const InputSearch = () => {
	const { isMobile, isDesktop } = useMatchMedia()
	// const [value, setValue] = useState()

	if (isMobile) {
		// PLACEHOLDER
		return <img className={cl.modalButton} src={search} alt="" />
	}
	// const items = ['Первый', 'Второй', 'Третий', 'Четвертый', 'Пятый']
	return (
		<form className={cl.wrapper}>
			<input
				className={cl.input}
				type="text"
				placeholder="Наименование, номер запчасти или VIN. Например: 123123123123"
			/>
			{/* <AutoComplete */}
			{/* 	type="text" */}
			{/* 	size="m" */}
			{/* 	form="default" */}
			{/* 	items={items} */}
			{/* 	getItemKey={(item) => item} */}
			{/* 	getItemLabel={(item) => item} */}
			{/* 	value={value} */}
			{/* 	onChange={({ value }) => setValue(value)} */}
			{/* /> */}
			{isDesktop && (
				<Button sizeStyle="sizeS" className={cl.button} type="button">
					Найти
				</Button>
			)}
		</form>
	)
}

export default memo(InputSearch)
