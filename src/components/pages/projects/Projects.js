import React from 'react';
import styled from 'styled-components';
import Header from '../../Header';
import ProjectsContent from './ProjectsContent';

const Projects = () => {
  return (
    <Container>
      <Header />
      <ProjectsContent />
    </Container>
  );
};

export default Projects;

const Container = styled.div`
  height: 100vh;
  min-height: 900px;
  background: rgba(110, 57, 143, 0.5);
  display: flex;
  flex-direction: column;

  @media (max-width: 750px) {
    min-height: 900px;
  }
`;
