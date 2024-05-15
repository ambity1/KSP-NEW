import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const carPartsApi = createApi({
	reducerPath: 'carPartsApi',
	// tagTypes: ['PartsSort', 'getPart'],
	baseQuery: fetchBaseQuery({ baseUrl: 'http://a0814722.xsph.ru/' }),
	endpoints: (builder) => ({
		getCarParts: builder.query({
			query: ({ typeSort, sort, limit }) => `/api/products/${typeSort}/${sort}/${limit}`
		}),
		getPriceFilter: builder.query({
			query: ({ typeSort, sort, limit, from, to }) => `/api/products/filter/${typeSort}/${sort}/${limit}/${from}/${to}`
		}),
		getPart: builder.query({
			query: (id) => `api/product/${id}`
		})
	})
})

export const { useGetCarPartsQuery, useGetPriceFilterQuery, useGetPartQuery } = carPartsApi
