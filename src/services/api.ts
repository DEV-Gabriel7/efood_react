import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RestaurantsApi } from '../types'

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api-ebac.vercel.app/api/efood/'
    }),
    endpoints: (builder) => ({
        getRestaurantes: builder.query<RestaurantsApi[], void>({
            query: () => '/restaurantes'
        })
    })
})

export const { useGetRestaurantesQuery } = api

export default api 