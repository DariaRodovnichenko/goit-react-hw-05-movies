import { useLocation } from 'react-router-dom';
import { MovieListContainer, MoviesList, StyledLink } from './MovieList.styled';
import { MovieImg } from 'pages/MovieDetails/MovieDetails.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <MovieListContainer>
      <MoviesList>
        {movies.map(movie => (
          <li key={movie.id}>
            <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
              <MovieImg
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              {movie.title}
            </StyledLink>
          </li>
        ))}
      </MoviesList>
    </MovieListContainer>
  );
};

export default MovieList;
