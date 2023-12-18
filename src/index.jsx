import { Theme } from '@consta/uikit/Theme'
import ReactDOM from 'react-dom/client'

import Root from './root'
import { presetGiGas } from './uikit/presets/presetGiGas'

ReactDOM.createRoot(document.getElementById('root')).render(
	<Theme preset={presetGiGas}>
		<Root />
	</Theme>
)
