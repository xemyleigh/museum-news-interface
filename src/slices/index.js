import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./newsSlice";
import categoriesSlice from './categoriesSlice'
import mediaSlice from "./mediaSlice";

export default configureStore({
    reducer: {
        newsInfo: newsSlice,
        categoriesInfo: categoriesSlice,
        mediaInfo: mediaSlice,
    }
})