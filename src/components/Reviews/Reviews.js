import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/Api';
import {
  ErrTxt,
  ReviewAuthor,
  ReviewContent,
  ReviewItem,
  ReviewList,
  ReviewsContainer,
} from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const showReviews = async () => {
      try {
        const results = await fetchReviews(movieId);
        setReviews(results);
      } catch (error) {
        console.error('Error getting reviews:', error);
        setError(error);
      } finally {
        setLoader(false);
      }
    };

    showReviews();
  }, [movieId]);

  return (
    <ReviewsContainer>
      {loader && <Loader />}
      <h2>Reviews</h2>
      {error ? (
        <ErrTxt>Error loading reviews</ErrTxt>
      ) : reviews.length === 0 ? (
        <p>No reviews</p>
      ) : (
        <ReviewList>
          {reviews.map(review => (
            <ReviewItem key={review.id}>
              <ReviewAuthor>{review.author}</ReviewAuthor>
              <ReviewContent>{review.content}</ReviewContent>
            </ReviewItem>
          ))}
        </ReviewList>
      )}
    </ReviewsContainer>
  );
};

export default Reviews;
