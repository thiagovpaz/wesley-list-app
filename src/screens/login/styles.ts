import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;

  height: 100vh;
  width: 100vw;
`;

export const Image = styled.img`
  object-fit: cover;
  object-position: center;
  max-width: 60%;
`;