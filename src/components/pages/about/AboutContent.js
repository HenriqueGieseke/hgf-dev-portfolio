import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import htlmIcon from '../../../assets/html-icon.svg';
import cssIcon from '../../../assets/css-logo.svg';
import nodejsIcon from '../../../assets/nodejs-icon.svg';
import mongodbIcon from '../../../assets/mongodb-icon.svg';
import expressIcon from '../../../assets/express-icon.svg';
import axiosIcon from '../../../assets/axios-icon.svg';
import typeScriptIcon from '../../../assets/typescript-icon.svg';
import javaScripLogo from '../../../assets/javascript-logo.svg';
import reactLogo from '../../../assets/reactjs-logo.svg';
import reactNativeLogo from '../../../assets/reactNativeIcon.svg';
import styledComponentsLogo from '../../../assets/styled-components-logo.svg';
import nextjsLogo from '../../../assets/nextjsIcon.svg';
import bootCampCertification from '../../../assets/hgf-certificado-bootcamp.jpg';
import CertificationModal from './CertificationModal';

const AboutContent = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <Container>
      <CertificationModal showModal={showModal} setShowModal={setShowModal} />
      <ContentBox>
        <h3>Sobre Mim</h3>
        <AboutContainer>
          <ParagraphBox>
            <p>
              Sou formado em História pela{' '}
              <a target="_blank" rel="noreferrer" href="http://www.uff.br/">
                UFF
              </a>
              , mas durante o recente período de crise tive que me reinventar
              para lidar com as mudanças de demanda no mercado de trabalho.
              Foquei na área da Tecnologia da Informação na qual sempre tive
              fascínio. Usei minha experiência acadêmica para organizar meus
              estudos e estabelecer um foco: a área de web development usando as
              tecnologias do stack{' '}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.mongodb.com/mern-stack"
              >
                MERN
              </a>
              .
            </p>
          </ParagraphBox>
          <CertificationBox>
            <StyledCertification
              onClick={openModal}
              src={bootCampCertification}
              alt="BootCamp Certification"
            />
            <a target="_blank" rel="noreferrer" href="https://www.igti.com.br/">
              Certicado de conclusão do Bootcamp de Desenvolvedor Full Stack do
              IGTI
            </a>
          </CertificationBox>
          <TechnologiesBox>
            <h5>Tecnologias</h5>
            <LowerWrapper>
              <img src={htlmIcon} alt="HTML" />
              <img src={cssIcon} alt="CSS Responsivo" />
              <img src={javaScripLogo} alt="JavaScript" />
              <img src={reactLogo} alt="ReactJS" />
              <img src={nodejsIcon} alt="NodeJS" />
              <img src={mongodbIcon} alt="MongoDB" />
              <img src={expressIcon} alt="Express" />
              <img src={axiosIcon} alt="Axios" />
              <img src={styledComponentsLogo} alt="styled-components" />
            </LowerWrapper>
            <StyledLowerTitle>Tecnologias em Aprendizado</StyledLowerTitle>
            <LowerWrapper>
              <img src={typeScriptIcon} alt="TypeScript" />
              <img src={reactNativeLogo} alt="React Native" />
              <img src={nextjsLogo} alt="NextJS" />
            </LowerWrapper>
          </TechnologiesBox>
        </AboutContainer>
      </ContentBox>
    </Container>
  );
};

const FadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Container = styled.div`
  height: 70%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${FadeIn} 1.5s ease;

  @media (max-width: 750px) {
    align-items: flex-end;
  }
`;

const ContentBox = styled.div`
  height: 65%;
  width: 100%;
  background: rgba(60, 9, 92, 0.75);

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;

  h3 {
    font-weight: 400;
    color: #ffffff;

    @media (max-width: 750px) {
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }

  @media (max-width: 750px) {
    justify-content: flex-start;
    height: 90%;
  }
`;

const AboutContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 750px) {
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
  }
`;

const ParagraphBox = styled.div`
  width: 20%;
  min-width: 240px;
  min-height: 240px;

  @media (max-width: 860px) {
    min-height: 168px;
  }

  @media (max-width: 750px) {
    width: 80%;
    height: 22%;
    min-height: 0px;
  }

  p {
    text-align: justify;
    color: #ffffff;
    height: 70%;

    @media (max-width: 860px) {
      font-size: 0.8rem;
    }
    @media (max-width: 380px) {
      font-size: 0.7rem;
    }
  }

  a {
    color: #ffffff;
    font-weight: 700;
    transition: 0.2s;

    &:hover {
      filter: brightness(0.7);
    }
  }
`;

const CertificationBox = styled.div`
  width: 20%;
  min-width: 240px;
  text-align: center;

  @media (max-width: 750px) {
    height: 30%;
    min-height: 0px;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  a {
    width: 100%;
    color: #ffffff;
    font-size: 0.6rem;
    transition: 0.2s;
    margin-top: 7px;

    &:hover {
      filter: brightness(0.7);
    }
  }
`;

const StyledCertification = styled.img`
  width: 100%;

  min-width: 200px;
  min-height: 100px;
  cursor: pointer;

  transition: 0.2s;

  @media (max-width: 860px) {
    width: 70%;
    min-width: 150px;
    min-height: 50px;
  }

  &:hover {
    filter: brightness(0.7);
  }
`;

const TechnologiesBox = styled.div`
  width: 20%;
  min-width: 240px;
  min-height: 240px;
  @media (max-width: 750px) {
    height: 20%;
    min-height: 0px;
    width: 70%;
  }

  @media (max-width: 860px) {
    min-height: 180px;
  }

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  h5 {
    text-align: center;
    color: #ffffff;
    font-weight: 400;
    margin-bottom: 15px;
    @media (max-width: 860px) {
      margin-bottom: 5px;
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
  width: 90%;

  @media (max-width: 750px) {
    height: 20%;
    width: 100%;
  }

  img {
    height: 35px;
    max-width: 100px;
    margin-bottom: 5px;
    margin-right: 3px;

    @media (max-width: 750px) {
      height: 15px;
      max-width: 90px;
    }
  }
`;

const StyledLowerTitle = styled.h5`
  text-align: center;
  color: #ffffff;
  font-weight: 400;
  margin-bottom: 15px;

  @media (max-width: 860px) {
    margin-bottom: 5px;
    margin-top: 20px;
  }
`;

export default AboutContent;
