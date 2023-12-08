import cn from 'classnames'
import React from 'react'
import { Link, useParams } from 'react-router-dom'

import cl from './tab-links.module.scss'

const TabLinks = ({ tabs }) => {
	const { id: currentTabId } = useParams()
	return (
		<div className={cl.links}>
			{tabs.map(({ id, href, label }) => (
				<Link to={`/information${href}`} className={cn([cl.link, { [cl.linkActive]: id === currentTabId }])}>
					{label}
				</Link>
			))}
		</div>
	)
}

export default TabLinks
