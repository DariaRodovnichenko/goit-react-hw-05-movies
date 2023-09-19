import { useEffect, useState } from 'react';
import { MovieList } from 'components/MovieList/MovieList';
import { fetchMovies } from 'services/Api';
import { Loader } from 'components/Loader/Loader';
import { useSearchParams } from 'react-router-dom';
import { MoviesContainer } from './Movies.styled';
import { Searchbar } from 'components/Searchbar/Searchbar';

const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loader, setLoader] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') || '';

  const updateSearchQuery = value => {
    setSearchQuery(value);
  };

  useEffect(() => {
    setSearchParams({ query: searchQuery });
  }, [searchQuery, setSearchParams]);

  useEffect(() => {
    setSearchQuery(movieName);
  }, [movieName]);

  useEffect(() => {
    const search = async () => {
      try {
        setLoader(true);
        const movies = await fetchMovies(searchQuery);
        setSearchResults(movies);
      } catch (error) {
        console.error(error);
      } finally {
        setLoader(false);
      }
    };

    const delayedSearch = debounce(search, 300);

    if (searchQuery) {
      delayedSearch();
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  return (
    <MoviesContainer>
      <Searchbar search={searchQuery} onChange={updateSearchQuery} />
      {searchResults.length === 0 ? (
        loader ? (
          <Loader />
        ) : (
          searchQuery && <h2>No results found</h2>
        )
      ) : (
        <MovieList movies={searchResults} />
      )}
    </MoviesContainer>
  );
};