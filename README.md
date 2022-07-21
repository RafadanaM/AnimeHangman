# Guess The Anime Title

Daily anime title hangman created with React and Express which can be accessed [**here!**](https://guesstheanimetitle.netlify.app/)

## Directories
- [**analysis**](./analysis/), Some analysis made after collecting anime data
- [**be**](./be/), Express backend
- [**fe**](./fe/), React frontend
- [**MAL-Api**](./MAL-Api/), Anime data collection using [MyAnimeList](https://myanimelist.net/apiconfig/references/api/v2) API. 

## Installing the Project
- Clone this repository
  - `https://github.com/RafadanaM/AnimeHangman.git`
- Go to `MAL-Api` directory and run `npm install` (If you want to generate new anime data)
- Go to `fe` directory and run `yarn install`
- Go to `be` directory and run `npm install`

## Generating New Anime Data
- In `MAL-APi` directory, create `.env` and write `CLIENT_ID=YOUR_MAL_CLIENT_ID`
- Create `data.json` with content of `{"data": []}`
- Set appropriate offset, limit, and data limit in `index.js`
- Run `npm start`

## Running the Project
- ## Backend
    - Copy `data.json` from `MAL-Api` to `be/src/db/`
    - Create `.env` file in `be` with keys in `env-example`
    - Run `npm run start:dev`
- ## Frontend 
    - Create `.env` file in `fe` with keys in `env-example`
    - Run `yarn start`

## Building the Project
- ## Backend
    - Create new migration by running `npm run migration:generate ./src/db/migrations/migration_name`
    - Run `npm run build`
- ## Frontend
    - Run `yarn build`

