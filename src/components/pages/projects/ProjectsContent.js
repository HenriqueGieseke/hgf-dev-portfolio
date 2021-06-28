import React from 'react';
import styled, { keyframes } from 'styled-components';
import countriesInfoLogo from '../../../assets/countries-info-logo.svg';
import basicCrudLogo from '../../../assets/basic-crud-logo.svg';
import htlmIcon from '../../../assets/html-icon.svg';
import cssIcon from '../../../assets/css-icon.svg';
import javascriptIcon from '../../../assets/javascrip-icon.svg';
import reactIcon from '../../../assets/react-icon.svg';
import nodejsIcon from '../../../assets/nodejs-icon.svg';
import mongodbIcon from '../../../assets/mongodb-icon.svg';
import expressIcon from '../../../assets/express-icon.svg';
import axiosIcon from '../../../assets/axios-icon.svg';
import styledComponentsIcon from '../../../assets/styled-components-icon.svg';
import nodemonIcon from '../../../assets/nodemon-icon.svg';

const ProjectsContent = () => {
  return (
    <Container>
      <ContentBox>
        <h3>Meus Projetos</h3>
        <ProjectsContainer>
          <ProjectBox>
            <a
              href="https://basic-crud-frontend-hgfdev.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={basicCrudLogo} alt="basic-Crud" />
              <p>
                Aplicação com frontend e backend que edita um banco de dados de
                usuários com informações geradas aleatoriamente por uma API
              </p>
            </a>
            <h5>Tecnolgias</h5>
            <LowerWrapper>
              <img src={htlmIcon} alt="HTML5" />
              <img src={cssIcon} alt="Cascading Style Sheets" />
              <img src={javascriptIcon} alt="JavaScript" />
              <img src={reactIcon} alt="ReactJS" />
              <img src={nodejsIcon} alt="NodeJS" />
              <img src={mongodbIcon} alt="MongoDB" />
              <img src={expressIcon} alt="Express" />
              <img src={axiosIcon} alt="Axios" />
              <img src={styledComponentsIcon} alt="Styled-components" />
              <img src={nodemonIcon} alt="Nodemon" />
            </LowerWrapper>
          </ProjectBox>
          <ProjectBox>
            <a
              href="https://countries-info-hgfdev.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={countriesInfoLogo} alt="Countrie Info" />
              <p>
                Aplicação frontend que mostra informações retiradas de duas APIs
                sobre países
              </p>
            </a>
            <h5>Tecnolgias</h5>
            <LowerWrapper>
              <img src={htlmIcon} alt="HTML5" />
              <img src={cssIcon} alt="Cascading Style Sheets" />
              <img src={javascriptIcon} alt="JavaScript" />
              <img src={reactIcon} alt="ReactJS" />
              <img src={axiosIcon} alt="Axios" />
              <img src={styledComponentsIcon} alt="Styled-components" />
            </LowerWrapper>
          </ProjectBox>
        </ProjectsContainer>
      </ContentBox>
    </Container>
  );
};

const FadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Container = styled.div`
  height: 65%;
  width: 100vw;
  animation: ${FadeIn} 1.5s ease;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 540px) {
    align-items: flex-end;
  }
`;

const ContentBox = styled.div`
  height: 65%;
  width: 100vw;
  background: rgba(60, 9, 92, 0.75);

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;

  h3 {
    font-weight: 400;
    color: #ffffff;

    @media (max-width: 540px) {
      margin-top: 20px;
    }
  }

  @media (max-width: 540px) {
    justify-content: flex-start;
  }
  @media (max-width: 540px) {
    height: 90%;
  }
`;

const ProjectsContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 540px) {
    flex-direction: column;
  }
  @media (max-width: 420px) {
    justify-content: center;
  }
`;

const ProjectBox = styled.div`
  width: 25%;
  height: 60%;
  border-radius: 10px;
  min-width: 240px;
  min-height: 240px;
  background: rgba(110, 57, 143, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 540px) {
    margin-top: 20px;
    width: 100vw;
    min-height: 190px;
    border-radius: 0px;

    justify-content: center;
  }

  h5 {
    font-weight: 400;
    color: #ffffff;

    @media (max-width: 540px) {
      font-size: 0.6rem;
      margin-top: 10px;
      margin-bottom: 0px;
    }
  }

  p {
    color: #ffffff;
    font-size: 0.8rem;
    text-align: justify;

    @media (max-width: 1700px) {
      font-size: 0.6rem;
    }
    @media (max-width: 1190px) {
      font-size: 0.5rem;
    }
  }

  a {
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    text-decoration: none;

    height: 35%;
    width: 66%;
    transition: 0.2s;

    @media (max-width: 540px) {
      margin-bottom: 10px;
    }

    &:hover {
      filter: brightness(0.7);
    }

    img {
      margin-right: 15px;

      @media (max-width: 1700px) {
        width: 40%;
      }
    }
  }
`;

const LowerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 5px;

  height: 20%;
  width: 66%;

  @media (max-width: 540px) {
    height: 20%;
  }

  img {
    height: 20px;
    max-width: 80px;
    margin-bottom: 5px;
    margin-right: 3px;

    @media (max-width: 540px) {
      height: 15px;
      margin-bottom: 4px;
    }
  }
`;

export default ProjectsContent;
