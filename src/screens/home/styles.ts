import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  
  display: flex;
  flex-direction: column;

  top: 0;

  width: 100%;
  align-items: center;
`;

export const Section = styled.section`
  display: flex;
  flex: 1;
  width: 90%;
  align-items: center;
  flex-direction: column;
`;

export const SectionList = styled.section`
  display: flex;
  flex: 1 ;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
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