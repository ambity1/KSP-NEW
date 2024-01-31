import dropDown from '@assets/icons/dropDown/arow-down.svg'
import { useMemo, useState } from 'react'

import cl from './drop-down.module.scss'

const DropDown = () => {
	const directionsList = useMemo(() => [
		{
			id: 0,
			name: 'Цена по возрастанию'
		},
		{
			id: 1,
			name: 'Все'
		}
	])

	const [selectedId, setSelectedId] = useState(0)

	const selectHandler = (id) => {
		setSelectedId(id)

		if (selectedId === id) {
			return
		}

		if (id === 0) {
		}
	}

	const selectedOption = directionsList.find(({ id }) => id === selectedId)

	return (
		<div className={cl.link}>
			<div className={cl.linkTitle}>{selectedOption?.name}</div>
			<img src={dropDown} alt="" />
			<div className={cl.linkMenu}>
				<div className={cl.content}>
					{directionsList.map(({ id, name: text }) => (
						<div onClick={() => selectHandler(id)} key={id}>
							<div className={cl.text}>{text}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default DropDown