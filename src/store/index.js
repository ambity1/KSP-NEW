import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { carPartsApi } from './modules/car-parts-api.js'
import { stockApi } from './modules/stock-api.js'
import createRootReducer from './reducers'

export const store = configureStore({
	// reducer: createRootReducer(),
	reducer: {
		// Add the generated reducer as a specific top-level slice
		[carPartsApi.reducerPath]: carPartsApi.reducer,
		[stockApi.reducerPath]: stockApi.reducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(carPartsApi.middleware).concat(stockApi.middleware)
})
setupListeners(store.dispatch)
// export default store
