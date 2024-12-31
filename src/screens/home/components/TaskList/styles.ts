import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr); 
  gap: 1rem;
  background-color: #4A90E2;
  padding: 2rem;
  border-radius: 10px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr); 
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr); 
  }
`;


export const TaskCard = styled.div`
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;

  h3 {
    margin: 0 0 0.5rem;
    color: #333;
  }

  p {
    margin: 0.25rem 0;
    color: #666;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;
