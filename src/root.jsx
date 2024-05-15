import { Provider } from 'react-redux'

import '../assets/styles/style.scss'
import Routes from './routes.jsx'
import store from './store'

function Root() {
	return (
		<Provider store={store}>
			<Routes />
		</Provider>
	)
}

export default Root
