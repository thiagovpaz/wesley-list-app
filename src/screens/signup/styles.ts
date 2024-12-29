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

export const FormLogin = styled.form``;

export const SectionLogin = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SectionForm = styled.section`
  display: flex;
  height: 230px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
`;

export const Section = styled.section`
  display: flex;
  height: 100px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
`;