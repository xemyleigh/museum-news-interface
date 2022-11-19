import { createSlice } from '@reduxjs/toolkit'
import { fetchNews } from '../fetchApi'

const newsSlice = createSlice({
    name: 'newsSlice',
    initialState: {
        news: {},
        ids: []
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchNews.pending, (state) => {
                console.log('PENDING NEWS')
            })
            .addCase(fetchNews.fulfilled, (state, { payload }) => {
                console.log('NEWS DOWNLOADED');
                console.log(payload)
                const [ news, ids ] = payload
                state.news = news
                state.ids = ids
            })
            .addCase(fetchNews.rejected, (state, action) => {
                console.log('NEWS DOWNLOADING ERROR');
                console.log(action.error)
            })

    }
})

export const { actions } = newsSlice
export default newsSlice.reducer