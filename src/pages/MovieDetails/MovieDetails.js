import { Loader } from 'components/Loader/Loader';
import { useState, useEffect, useRef, Suspense } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/Api';
import {
  AdditionalInfo,
  AdditionalTitle,
  BackBtn,
  DetailsContainer,
  ErrorText,
  Genre,
  GenresTitle,
  LinkBtn,
  MovieImg,
  MovieInfo,
  MovieOverview,
  MovieTitle,
} from './MovieDetails.styled';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();
  const backLink = useRef(location.state?.from || '/');

  useEffect(() => {
    const fetchMovieOverview = async () => {
      try {
        const response = await fetchMovieDetails(movieId);
        setMovieDetails(response);
      } catch (error) {
        console.error('Error getting movie details:', error);
        setError(error);
      }
    };
    fetchMovieOverview();
  }, [movieId]);

  if (error) {
    return <p>Error loading movie details</p>;
  }

  if (!movieDetails) {
    return <Loader />;
  }

  return (
    <div>
      {error ? (
        <ErrorText>Error loading movie details</ErrorText>
      ) : (
        <DetailsContainer>
          <Link to={backLink.current}>
            <BackBtn type="button">Go back</BackBtn>
          </Link>
          <MovieInfo style={{ backdrop: movieDetails.backdrop_path }}>
            <div>
              <MovieTitle>{movieDetails.title}</MovieTitle>
              <MovieOverview>Overview</MovieOverview>
              <p>{movieDetails.overview}</p>
              <GenresTitle>Genres</GenresTitle>
              <p>
                {movieDetails.genres.map(genre => (
                  <Genre key={genre.id}> {genre.name}</Genre>
                ))}
              </p>
            </div>
            <div>
              <MovieImg
                src={
                  movieDetails.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
                    : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
                }
                alt={movieDetails.title || movieDetails.name}
              />
            </div>
          </MovieInfo>
          <AdditionalInfo>
            <AdditionalTitle>Additional information</AdditionalTitle>
            <Link to="cast">
              <LinkBtn type="button">Cast</LinkBtn>
            </Link>
            <Link to="reviews">
              <LinkBtn type="button">Reviews</LinkBtn>
            </Link>
          </AdditionalInfo>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </DetailsContainer>
      )}
    </div>
  );
};
