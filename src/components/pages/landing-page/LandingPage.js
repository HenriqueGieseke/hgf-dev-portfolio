import React from 'react';
import styled from 'styled-components';
import Header from '../../Header';
import LandingContent from './LandingContent'

const LandingPage = () => {
  return (
    <Container>
      <Header />
      <LandingContent />
    </Container>
  );
};

export default LandingPage;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  min-height: 900px;
  background: rgba(110, 57, 143, 0.5);
  display: flex;
  flex-direction: column;

  @media (max-width: 750px) {
    min-height: 900px;
  }
`;

