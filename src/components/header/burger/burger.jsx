import { memo } from 'react'

import cl from './burger.module.scss'

const Burger = () => {
	return <button className={cl.burger} />
}

export default memo(Burger)
