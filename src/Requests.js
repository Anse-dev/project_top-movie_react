import {
  API_KEY,
  API_URL,
  SEARCH_URL,
  POPULAR_URL,
  GENRES_URL,
} from "./ApiConfig";

const ApiSettings = {
  //GET ALL MOVIES
  getMovies: async (searchTerm, page) => {
    const endpoint = searchTerm
      ? `${SEARCH_URL}${searchTerm}&page=${page}`
      : `${POPULAR_URL}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  //GET MOVIE
  getMovie: async (movieId) => {
    const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`;
    return await (await fetch(endpoint)).json();
  },
  //GET SIMILAR MOVIES BY MOVIE_ID
  getSimilarMovies: async (movieId, page) => {
    const endpoint = `${API_URL}movie/${movieId}/similar?api_key=${API_KEY}&language=en-US&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  getGenres: async () => {
    const endpoint = GENRES_URL;
    return await (await fetch(endpoint)).json();
  },
  getMoviesByGenres: async () => {},
};
export default ApiSettings;
