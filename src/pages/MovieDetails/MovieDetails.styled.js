import styled from 'styled-components';

export const DetailsContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 40px;
  background-color: aliceblue;
`;
export const BackBtn = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 180px;
`;

export const MovieInfo = styled.div`
  margin: 0 auto;
  width: 800px;
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

export const MovieTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const MovieOverview = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
`;

export const GenresTitle = styled.h2`
  margin-top: 10px;
`;

export const Genre = styled.span`
  margin-right: 10px;
`;

export const MovieImg = styled.img`
  max-width: 200px;
  height: auto;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const AdditionalInfo = styled.div`
  margin: 0 auto;
  width: 800px;
  padding: 20px;
`;

export const AdditionalTitle = styled.h3`
  margin-bottom: 10px;
`;

export const Info = styled.div`
  margin-top: 20px;
`;

export const LinkBtn = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 18px;
  margin-top: 20px;
`;
