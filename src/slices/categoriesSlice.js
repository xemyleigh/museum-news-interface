import { createSlice } from '@reduxjs/toolkit'
import { fetchCategories } from '../fetchApi'

const categoriesSlice = createSlice({
    name: 'categoriesSlice',
    initialState: {
        categories: {},
        ids: []
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                console.log('PENDING NEWS')
            })
            .addCase(fetchCategories.fulfilled, (state, { payload }) => {
                console.log('NEWS DOWNLOADED');
                const [ categories, ids ] = payload
                state.categories = categories
                state.ids = ids
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                console.log('NEWS DOWNLOADING ERROR');
                console.log(action.error);
            })

    }
})

export const { actions } = categoriesSlice
export default categoriesSlice.reducer