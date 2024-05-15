import useDebounce from '@hooks/use-debounce.js'
import { memo, useState } from 'react'

import Button from '@ui/button/index.js'

import cl from './input-search-catalog.module.scss'

const InputSearchCatalog = () => {
	const [search, setSearch] = useState('')

	const debounsedSearch = useDebounce(search, 300)

	// дописать константу которая передает данные в store (чекнуть клинику)

	return (
		<form className={cl.wrapper}>
			<div className={cl.inputWrapper}>
				<input
					value={search}
					onChange={(event) => setSearch(event.target.value)}
					className={cl.input}
					type="text"
					placeholder="Поиск по наименованию, номеру запчасти или артиклю"
				/>
			</div>
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
			<Button sizeStyle="sizeM" className={cl.button} type="button">
				Найти
			</Button>
		</form>
	)
}

export default memo(InputSearchCatalog)
