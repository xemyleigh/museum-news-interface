import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./newsSlice";
import categoriesSlice from './categoriesSlice'
import mediaSlice from "./mediaSlice";
import openedStorySlice from "./openedStorySlice";
import openedCategorySlice from "./openedCategorySlice";

export default configureStore({
    reducer: {
        newsInfo: newsSlice,
        categoriesInfo: categoriesSlice,
        mediaInfo: mediaSlice,
        openedStoryInfo: openedStorySlice,
        openedCategoryInfo: openedCategorySlice,
    }
})