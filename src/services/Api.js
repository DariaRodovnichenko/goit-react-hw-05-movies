import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = '25e02e4408f629d90f0c35e347b8b6ac';

const params = {
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
};

export const fetchMovies = async movieName => {
  try {
    const response = await axios.get(
      `/search/movie?query=${movieName}`,
      params
    );
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error; // Rethrow the error to handle it in the calling component
  }
};

export const fetchMovieDetails = async movieId => {
  try {
    const response = await axios.get(`/movie/${movieId}`, params);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(`trending/movie/day`, params);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw error;
  }
};

export const fetchReviews = async movieId => {
  try {
    const response = await axios.get(`movie/${movieId}/reviews?`, params);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error;
  }
};

export const fetchCast = async movieId => {
  try {
    const response = await axios.get(`movie/${movieId}/credits?`, params);
    return response.data.cast;
  } catch (error) {
    console.error('Error fetching cast:', error);
    throw error;
  }
};
