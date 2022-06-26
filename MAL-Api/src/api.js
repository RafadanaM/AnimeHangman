import axios from "axios"
import fs from "fs"
import 'dotenv/config' //
const FILE_PATH = "./images/"

export const instance = axios.create({
    headers: { "X-MAL-CLIENT-ID": process.env.CLIENT_ID}
    
})

function sleep(ms) {
    return new Promise((resolve) => {
        console.log("Sleeping");
        setTimeout(resolve, ms);
    });
  }

export const downloadImage = async (url, filename) => {
    console.log(filename);
    const response = await axios.get(url, {responseType: "stream"})
    return new Promise((resolve, reject) => {
        response.data.pipe(fs.createWriteStream(FILE_PATH + filename)).on('error', reject)
        .once('close', () => resolve(filename)); 
    })
    
}

// src = https://stackoverflow.com/questions/51510699/axios-recursion-for-paginating-an-api-with-a-cursor
// data is here so I can check
export const getAnimeByRank = async (offset, limit, data = [], dataLimit = 1, pause = 1000) => {
    try {
        if (data.length >= dataLimit || limit === undefined || offset === undefined) return data
        const currentURL = `https://api.myanimelist.net/v2/anime/ranking?ranking_type=all&offset=${offset}&limit=${limit}&fields=synopsis,mean,status,genres,start_date,media_type`
        console.log("GET : " + currentURL)

        const res = await instance.get(currentURL)
        const responseData = res.data
        const animeData = responseData.data
        const mNextURL = responseData?.paging?.next
        data.push(...animeData)

        let nextLimit
        let nextOffset
        // handle reaching max pagination (MAL does not specify, so I'm just guessing here)
        if (mNextURL) {
            const nextURL = new URL(mNextURL)
            nextLimit = nextURL.searchParams.get("limit")
            if (nextURL.searchParams.has("offset") && nextURL.searchParams.get("offset") !== offset) {
                nextOffset = nextURL.searchParams.get("offset")
            }
        }
     
        await sleep(pause)
        return getAnimeByRank(nextOffset, nextLimit, data, dataLimit, pause)
    } catch (error) {
        console.log(error)
    }
}

