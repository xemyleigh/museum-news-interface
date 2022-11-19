import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import convertDate from './convertDate'


export const fetchNews = createAsyncThunk(
    'fetchNews',
    async (newsCount, imgIndexes) => {
        console.log(newsCount, imgIndexes)

        const { data } = await axios.get(`http://turgenevmus.ru/wp-json/wp/v2/posts?per_page=${newsCount}&_fields=id,author,link,title,content,date,categories`)
        const ids = data.map(story => story.id)
        const news = await Promise.all(data.map(async ({ date, title, content, id, link, categories }, index) => {
            let image
            if ( [2, 5, 6, 12, 13, 19].includes(index)) {
                const imageResponse = await axios.get(`//turgenevmus.ru/wp-json/wp/v2/media?parent=${id}`)
                const [ imageData ] = imageResponse.data
                const imageInfo = imageData.description.rendered
                image = imageInfo.split(`src="`)[1].split(`"`)[0]
                console.log(image)
            }
            const formattedDate = convertDate(date)
            const newTitle = title.rendered
            const newContent = content.rendered
            const story = {
                date: formattedDate,
                title: newTitle,
                content: newContent,
                id, link, image, categories
            }


            return [ id, story ]
    }))

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
