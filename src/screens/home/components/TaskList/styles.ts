import styled from "styled-components";

export const TaskListContainer = styled.div`
position: absolute;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Máximo de 3 colunas */
  gap: 1rem;
  justify-content: end; /* Alinha itens à direita */
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Alinha como coluna no mobile */
    justify-content: center; /* Centraliza os itens no mobile */
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
