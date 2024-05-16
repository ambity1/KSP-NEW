import { combineReducers } from '@reduxjs/toolkit'

import { carPartsApi } from '../modules/car-parts-api.js'
import { stockApi } from '../modules/stock-api.js'

export default () =>
	combineReducers({
		// modals: modalsReducer,
		[carPartsApi.reducerPath]: carPartsApi.reducer,
		[stockApi.reducerPath]: stockApi.reducer
	})
