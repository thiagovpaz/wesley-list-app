import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  
  display: flex;
  flex: 1;
  flex-direction: column;

  top: 0;

  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Section = styled.section`
  display: flex;
  flex: 1;
  width: 90%; /* Ajusta o tamanho para ocupar quase toda a largura da tela */
  align-items: center;
  flex-direction: column;
`;

export const SectionList = styled.section`
  display: flex;
  flex: 1;
  width: 90%; 
  backgroung-color: 'red';
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