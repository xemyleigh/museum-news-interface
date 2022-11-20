import { createSlice } from '@reduxjs/toolkit'
import { fetchCategories } from '../fetchApi'

const categoriesSlice = createSlice({
    name: 'categoriesSlice',
    initialState: {
        categories: {},
        ids: []
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.fulfilled, (state, { payload }) => {
                const [ categories, ids ] = payload
                state.categories = categories
                state.ids = ids
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                console.log(action.error)
            })

    }
})

export const { actions } = categoriesSlice
export default categoriesSlice.reducer