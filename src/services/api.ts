import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RestaurantsApi, Order, OrderResponse } from '../types'

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api-ebac.vercel.app/api/efood/'
    }),
    endpoints: (builder) => ({
        getRestaurantes: builder.query<RestaurantsApi[], void>({
            query: () => '/restaurantes'
        }),
        placeOrder: builder.mutation<OrderResponse, Order>({
            query: (order) => ({
                url: '/checkout',
                method: 'POST',
                body: order
            })
        })
    })
})

export const { useGetRestaurantesQuery, usePlaceOrderMutation } = api

export default api 