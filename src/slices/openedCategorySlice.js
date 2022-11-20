import { createSlice } from '@reduxjs/toolkit'

const openedCategorySlice = createSlice({
    name: 'openedCategorySlice',
    initialState: {
        openedCategory: {},
    },
    reducers: {
        setOpenedCategory(state, { payload }) {
            state.openedCategory = payload
        }
    },
})

export const { actions } = openedCategorySlice
export default openedCategorySlice.reducer