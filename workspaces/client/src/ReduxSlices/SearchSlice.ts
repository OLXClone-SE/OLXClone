

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
interface SearchState {
    value: string
}

const initialState: SearchState = {
    value: "",
}

export const SearchSlice = createSlice({
    name: 'SearchSlice',
    initialState,
    reducers: {
        updateSearchWord: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
    },
})

export const { updateSearchWord } = SearchSlice.actions

export default SearchSlice.reducer