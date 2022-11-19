import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import convertDate from './convertDate'


export const fetchNews = createAsyncThunk(
    'fetchNews',
    async (newsCount) => {
        const { data } = await axios.get(`http://turgenevmus.ru/wp-json/wp/v2/posts?per_page=${newsCount}&_fields=id,author,link,title,featured_media,content,date`)
        const ids = data.map(story => story.id)
        const news = data.map(({ date, title, content, id, link }) => {
            const formattedDate = convertDate(date)
            const newTitle = title.rendered
            const newContent = content.rendered
            const story = {
                date: formattedDate,
                title: newTitle,
                content: newContent,
                id, link
            }
            return [ id, story ]
    })
        const normalizedNews = Object.fromEntries(news)
        return [ normalizedNews, ids ]            
    }
)

export const fetchCategories = createAsyncThunk(
    'fetchCategories',
    async () => {
        const { data } = await axios.get('http://turgenevmus.ru/wp-json/wp/v2/categories?_fields=id,name,link')
        const ids = data.map(category => category.id)
        const categories = data.map((category) => {
            return [ category.id, category ]
        })
        const normalizedCategories = Object.fromEntries(categories)
        return [ normalizedCategories, ids ]
    }

)

export const fetchMedia = createAsyncThunk(
    'fetchMedia',
    async (storyId) => {
          const imageResponse = await axios.get(`http://turgenevmus.ru/wp-json/wp/v2/media?parent=${storyId}`)
          const [ imageData ] = imageResponse.data
          return imageData.description.rendered;
    }
)
