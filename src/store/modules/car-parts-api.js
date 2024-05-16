import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const carPartsApi = createApi({
	reducerPath: 'carPartsApi',
	// tagTypes: ['PartsSort', 'getPart'],
	baseQuery: fetchBaseQuery({ baseUrl: 'http://a0814722.xsph.ru/' }),
	endpoints: (builder) => ({
		getCarParts: builder.query({
			query: ({ typeSort, sort, limit }) => `/api/products/${typeSort}/${sort}/${limit}`
		}),
		getProducts: builder.query({
			query: ({ formData, page }) => ({
				url: `/api/products/filter?page=${page}`,
				method: 'POST',
				body: formData
			})

		}),
		getPart: builder.query({
			query: (id) => `api/product/${id}`
		}),
		getFourRandomParts: builder.query({
			query: () => `/api/products/random`
		}),
		getMinMax: builder.query({
			query: () => `/api/minmax`
		})
		// getSearch: builder.query({
		// 	query: ({ name }) => `/api/product/find/${name}`
		// })
	})
})

export const {
	useGetCarPartsQuery,
	useGetProductsQuery,
	useGetPartQuery,
	useGetFourRandomPartsQuery,
	useGetSearchQuery,
	useGetMinMaxQuery
} = carPartsApi
