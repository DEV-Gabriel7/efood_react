import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product, DeliveryData, PaymentData } from '../../types';

export type CheckoutStep = 'cart' | 'delivery' | 'payment' | 'confirmation'

type CartState = {
    items: Product[]
    isOpen: boolean
    checkoutStep: CheckoutStep
    deliveryData: DeliveryData | null
    paymentData: PaymentData | null
    orderId: number | null
    orderTotal: number
}

const initialState: CartState = {
    items: [],
    isOpen: false,
    checkoutStep: 'cart',
    deliveryData: null,
    paymentData: null,
    orderId: null,
    orderTotal: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Product>) => {
            const product = state.items.find(item => item.id === action.payload.id)
            if(!product) {
                state.items.push(action.payload)
            } else {
                alert("O produto já está no carrinho!")
            }
        },
        remove: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter((item => item.id !== action.payload))
        },
        open: (state) => {
            state.isOpen = true
        },
        close: (state) => {
            state.isOpen = false
            state.checkoutStep = 'cart'
            state.deliveryData = null
            state.paymentData = null
            state.orderId = null
        },
        setCheckoutStep: (state, action: PayloadAction<CheckoutStep>) => {
            state.checkoutStep = action.payload
        },
        setDeliveryData: (state, action: PayloadAction<DeliveryData>) => {
            state.deliveryData = action.payload
        },
        setPaymentData: (state, action: PayloadAction<PaymentData>) => {
            state.paymentData = action.payload
        },
        setOrderConfirmation: (state, action: PayloadAction<{ orderId: number; total: number }>) => {
            state.orderId = action.payload.orderId
            state.orderTotal = action.payload.total
        }
    }
})

export const { add, open, close, remove, setCheckoutStep, setDeliveryData, setPaymentData, setOrderConfirmation } = cartSlice.actions;
export default cartSlice.reducer