const API_KEY = "90a487410aa65a9e5544c8d491f09704";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTrendingAR: `/discover/movie?api_key=${API_KEY}&with_genre=16`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchThrillerMovies: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
  fetchRecommendations: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumantaries: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
  fetchTVAR: `/discover/movie?api_key=${API_KEY}&with_genres=9`,
  fetchTVUS: `/discover/tv?api_key=${API_KEY}&with_genres=10765`,
  fetchFamilyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
};

export default requests;
