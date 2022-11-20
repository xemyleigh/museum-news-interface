import { createSlice } from '@reduxjs/toolkit'

const openedStorySlice = createSlice({
    name: 'openedStorySlice',
    initialState: {
        openedStory: {},
    },
    reducers: {
        setOpenedStory(state, { payload }) {
            state.openedStory = payload
        }
    },
})

export const { actions } = openedStorySlice
export default openedStorySlice.reducer