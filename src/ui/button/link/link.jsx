import cn from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

import toCapitalize from '@utils/to-capitalize.js'

import cl from '../button.module.scss'

const ButtonLink = ({
	sizeStyle = 'sizeM',
	colorStyle = 'primary',
	additionalStyles = [],
	className,
	onClick,
	href,
	children,
	disabled,
	...restProps
}) => {
	const classNames = cn([
		cl.btn,
		className,
		{ [cl.btnDisabled]: disabled },
		cl[`btn${toCapitalize(sizeStyle)}`],
		cl[`btn${toCapitalize(colorStyle)}`],
		...additionalStyles.map((additionalStyle) => cl[`btn${toCapitalize(additionalStyle)}`])
	])

	return (
		<Link to={href} className={classNames} disabled={disabled} {...restProps}>
			{children}
		</Link>
	)
}

ButtonLink.propTypes = {
	colorStyle: PropTypes.oneOf(['primary', 'outlined', 'secondary']),
	sizeStyle: PropTypes.oneOf(['sizeS', 'sizeM', 'sizeL']),
	additionalStyles: (props, propName, componentName) => {
		const additionalStyles = props[propName]
		if (
			additionalStyles === undefined ||
			(Array.isArray(additionalStyles) &&
				[...new Set(additionalStyles)].every((additionalStyle) => ['mobileWide'].includes(additionalStyle)))
		) {
			return
		}

		return new Error(`Invalid prop \`${propName}\` supplied to \`${componentName}\`. Validation failed.`)
	}
}

export default ButtonLink
