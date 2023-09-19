import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'services/Api';
import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';
import { HomeContainer, Title } from './Home.styled';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await fetchTrendingMovies();
        setTrendingMovies(movies);
      } catch (error) {
        console.error(error);
      } finally {
        setLoader(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <HomeContainer>
      <Title>Trending Movies</Title>
      {loader ? (
        <Loader />
      ) : trendingMovies.length === 0 ? (
        <p>No trending movies available</p>
      ) : (
        <MovieList movies={trendingMovies} />
      )}
    </HomeContainer>
  );
};
