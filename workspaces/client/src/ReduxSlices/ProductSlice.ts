import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getProducts } from '../ReduxActions/ProductActions';

interface Product {
    id: number,
    mailid: string,
    phone: string,
    productname: string,
    category: string,
    price: number,
    path: string,
    description: string,
}

interface ProductsState {
    products: Product[] | null
}

const initialState: ProductsState = {
    products: null
}

export const ProductsSlice = createSlice({
    name: 'ProductSlice',
    initialState,
    reducers: {
    },
    extraReducers: {
        [getProducts.fulfilled.toString()]: (state, action: PayloadAction<ProductsState>) => {
            state.products = action.payload.products
        },
    },
})

export default ProductsSlice.reducer