import styled from 'styled-components';

export const CastContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 60px;
  padding: 20px;
`;

export const CastCard = styled.div`
  width: 200px;
  text-align: center;
`;

export const CastImg = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
`;

export const ActorName = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0;
`;

export const Character = styled.p`
  font-size: 20px;
`;
