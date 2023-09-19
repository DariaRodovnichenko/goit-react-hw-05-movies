import styled from 'styled-components';

export const ReviewsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

export const ReviewsHeader = styled.h2`
  font-size: 24px;
  margin-top: 10px;
`;

export const ErrTxt = styled.p`
  color: red;
  font-size: 18px;
  margin-top: 20px;
`;

export const ReviewList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ReviewItem = styled.li`
  margin-top: 20px;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

export const ReviewAuthor = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const ReviewContent = styled.p`
  font-size: 16px;
`;
