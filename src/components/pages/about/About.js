import React from 'react';
import styled from 'styled-components';
import AboutContent from './AboutContent';
import AboutHeader from './AboutHeader'

const About = () => {
  return (
    <Container>
      <AboutHeader />
      <AboutContent />
    </Container>
  );
};

export default About;

const Container = styled.div`
  height: 100vh;
  min-height: 900px;
  background: rgba(110, 57, 143, 0.5);
  display: flex;
  flex-direction: column;

  @media (max-width: 540px) {
    min-height: 1100px;
  }
`;
