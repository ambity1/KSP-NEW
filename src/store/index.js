import { configureStore } from '@reduxjs/toolkit'

import { carPartsApi } from './modules/car-parts-api.js'
import createRootReducer from './reducers'

const store = configureStore({
	reducer: createRootReducer(),
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(carPartsApi.middleware)
})

export default store
