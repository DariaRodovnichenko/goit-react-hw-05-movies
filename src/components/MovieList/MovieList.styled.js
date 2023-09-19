import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieListContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px 40px;
`;

export const MoviesList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

export const StyledLink = styled(Link)`
  font-size: 20px;
  font-weight: bold;
  color: darkblue;
`;
