import { getAnimeByRank } from "./api.js";
import { toJsonFile, shuffleArray, formatData } from "./utils.js";
const JSON_FILE = "./data.json";

try {
  const animeData = await getAnimeByRank(0, 400, [], 800);
  shuffleArray(animeData);
  const formattedData = formatData(animeData);
  await toJsonFile(JSON_FILE, formattedData);
  console.log(animeData);
} catch (error) {
  console.log(error);
}
