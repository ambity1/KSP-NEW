import { combineReducers } from '@reduxjs/toolkit'

import { carPartsApi } from '../modules/car-parts-api.js'

export default () =>
	combineReducers({
		// modals: modalsReducer,
		[carPartsApi.reducerPath]: carPartsApi.reducer
	})
