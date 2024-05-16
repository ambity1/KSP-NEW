import { ApiProvider } from '@reduxjs/toolkit/query/react'

import '../assets/styles/style.scss'
import Routes from './routes.jsx'
import { carPartsApi } from './store/modules/car-parts-api.js'

// import store from './store'

function Root() {
	return (
		<ApiProvider api={carPartsApi}>
			<Routes />
		</ApiProvider>
	)
}

export default Root
