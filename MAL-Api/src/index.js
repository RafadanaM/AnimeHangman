import jsonfile from "jsonfile"
import { getAnimeByRank } from "./api.js";
import { toJsonFile, shuffleArray, formatData } from "./utils.js";
const JSON_FILE = "./data.json"

try {
    // if (!fs.existsSync(JSON_FILE)) {

    // }
    const animeData = await getAnimeByRank(0, 400 , [], 800)
    shuffleArray(animeData)
    const formattedData = formatData(animeData)
    await toJsonFile(JSON_FILE, formattedData)
    console.log(animeData);
    // const file = await jsonfile.readFile(JSON_FILE)
    // const data = file.data.map(x => ({...x, title: x.title.latinize()}))
    // file.data = [...data]

    // await jsonfile.writeFile(JSON_FILE, file)
    
    // await downloadImage(node.main_picture.medium, 1+ ".jpg")
} catch (error) {
    console.log(error)
}