const TOKEN = "api_key=9c6da59b2b094b4ca9156b08c61ff1b2";
const BASE_URL = "https://api.themoviedb.org/3/movie/";

const UPCOMING_URL = `${BASE_URL}upcoming?${TOKEN}`;
const DETAILS_URL = `${BASE_URL}<ID>?${TOKEN}`;
const IMAGE_URL = "https://image.tmdb.org/t/p/w500/";
const IMAGE_ORIGINAL_URL = "https://image.tmdb.org/t/p/original/";
const DUMMY_IMAGE_URL = "https://via.placeholder.com/500x281?text=No+Image+Found";
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie/?${TOKEN}&query=`;

const IMDB_URL = "https://www.imdb.com/title/";

export {
    UPCOMING_URL,
    DETAILS_URL,
    IMAGE_URL,
    IMAGE_ORIGINAL_URL,
    IMDB_URL,
    SEARCH_URL,
    DUMMY_IMAGE_URL
};