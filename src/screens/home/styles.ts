import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  
  display: flex;
  flex: 1;
  flex-direction: column;

  height: 100vh;
  width: 100vw;

  justify-content: center;
  align-items: center;
`;

export const Section = styled.section`
  display: flex;
  flex: 1;
  width: 100vh;
  align-items: center;

  flex-direction: column;
`;

export const SectionSearch = styled.section`
  display: flex;
  flex-direction: row;
`;

export const SectionModal = styled.section`
  height: 250px;
  width: 350px;
`;

export const SectionModalButton = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;