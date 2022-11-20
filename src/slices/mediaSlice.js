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
            })
            .addCase(fetchMedia.fulfilled, (state, { payload }) => {
                state.media = payload
            })
            .addCase(fetchMedia.rejected, (state, action) => {
                console.log(action.error);
            })

    }
})

export const { actions } = mediaSlice
export default mediaSlice.reducer