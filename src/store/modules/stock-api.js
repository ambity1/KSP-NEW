import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const stockApi = createApi({
	reducerPath: 'stockApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://a0814722.xsph.ru/' }),
	endpoints: (builder) => ({
		getStock: builder.query({
			query: () => `/api/promotions`
		})
	})
})

export const { useGetStockQuery } = stockApi
