import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'services/Api';
import {
  ActorName,
  CastCard,
  CastContainer,
  CastImg,
  Character,
} from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const showCast = async () => {
      try {
        const castData = await fetchCast(movieId);
        setCast(castData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoader(false);
      }
    };

    showCast();
  }, [movieId]);

  return (
    <div>
      {loader && <Loader />}
      <CastContainer>
        {cast.map(({ id, profile_path, name, character }) => (
          <CastCard key={id}>
            <CastImg
              width="200px"
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg' // Corrected the URL
              }
              alt={name}
            />
            <ActorName>{name}</ActorName>
            <Character>Character: {character}</Character>
          </CastCard>
        ))}
      </CastContainer>
    </div>
  );
};

export default Cast;
