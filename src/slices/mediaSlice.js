import { createSlice } from '@reduxjs/toolkit'
import { fetchMedia } from '../fetchApi'

const mediaSlice = createSlice({
    name: 'mediaSlice',
    initialState: {
        img: '',
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMedia.pending, (state) => {
                console.log('PENDING NEWS')
            })
            .addCase(fetchMedia.fulfilled, (state, { payload }) => {
                console.log('NEWS DOWNLOADED');
                console.log(payload);
                state.media = payload
            })
            .addCase(fetchMedia.rejected, (state, { payload }) => {
                console.log('NEWS DOWNLOADING ERROR');
            })

    }
})

export const { actions } = mediaSlice
export default mediaSlice.reducer