import React, { createContext, useContext } from 'react'
import { __assign, __rest } from 'tslib'

import { cn } from '../../utils/bem'
import { presetGiGas } from './presets/presetGiGas'

export { presetGiGas } from './presets/presetGiGas'
export { presetGiGasDark } from './presets/presetGiGasDark'
export { presetGiGasDisplay } from './presets/presetGiGasDisplay'
export var cnTheme = cn('Theme')
export function generateThemeClassNames(preset) {
	return {
		color: {
			primary: cnTheme({ color: preset.color.primary }),
			accent: cnTheme({ color: preset.color.accent }),
			invert: cnTheme({ color: preset.color.invert })
		},
		control: cnTheme({ control: preset.control }),
		font: cnTheme({ font: preset.font }),
		size: cnTheme({ size: preset.size }),
		space: cnTheme({ space: preset.space }),
		shadow: cnTheme({ shadow: preset.shadow })
	}
}
const defaultContextValue = {
	theme: presetGiGas,
	themeClassNames: generateThemeClassNames(presetGiGas)
}
export var ThemeContext = createContext(defaultContextValue)
export var Theme = React.forwardRef(function (props, ref) {
	const { className } = props
	const { children } = props
	const { preset } = props
	const otherProps = __rest(props, ['className', 'children', 'preset'])
	const mods = __assign(__assign({}, preset), { color: preset.color.primary })
	const themeClassNames = generateThemeClassNames(preset)
	return React.createElement(
		ThemeContext.Provider,
		{ value: { theme: preset, themeClassNames } },
		React.createElement('div', __assign({}, otherProps, { ref, className: cnTheme(mods, [className]) }), children)
	)
})
export function useTheme() {
	return useContext(ThemeContext)
}
