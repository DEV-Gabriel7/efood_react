import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../../types';

type CartState = {
    items: Product[]
    isOpen: boolean
}

const initialState: CartState = {
    items: [],
    isOpen: false
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
        }
    }
})

export const { add, open, close, remove } = cartSlice.actions;
export default cartSlice.reducer