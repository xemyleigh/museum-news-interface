import { createSlice } from '@reduxjs/toolkit'
import { fetchNews } from '../fetchApi'

const newsSlice = createSlice({
    name: 'newsSlice',
    initialState: {
        news: {},
        ids: [],
        isLoading: true
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchNews.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchNews.fulfilled, (state, { payload }) => {
                state.isLoading = false
                const [ news, ids ] = payload
                state.news = news
                state.ids = ids
            })
            .addCase(fetchNews.rejected, (state, action) => {
                state.isLoading = false
                console.log(action.error)
            })

    }
})

export const { actions } = newsSlice
export default newsSlice.reducer