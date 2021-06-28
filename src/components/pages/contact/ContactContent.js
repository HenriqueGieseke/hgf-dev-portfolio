import React from 'react';
import styled, { keyframes } from 'styled-components';
import contactImage from '../../../assets/contact-image.svg';
import whatsApp from '../../../assets/whatsapp-logo.svg';
import emailIcon from '../../../assets/email-icon.svg';
import bigGithub from '../../../assets/github-icon-big.svg';
import bigInstagram from '../../../assets/instagram-icon-big.svg';
import bigFacebook from '../../../assets/facebook-icon-big.svg';

const ProjectsContent = () => {
  return (
    <Container>
      <ContentBox>
        <h3>Entre em Contato</h3>
        <ContactContainer>
          <ImageBox>
            <StyledImg src={contactImage} alt="Contato" />
          </ImageBox>
          <ContactBox>
            <ContactWrapper>
              <img src={whatsApp} alt="WhatsApp" />
              <span>(21) 992671256</span>
            </ContactWrapper>
            <ContactWrapper>
              <img src={emailIcon} alt="Email" />
              <span>henriquegieseke@gmail.com</span>
            </ContactWrapper>
            <IconsWrapper>
              <a
                href="https://github.com/HenriqueGieseke"
                target="_blank"
                rel="noreferrer"
              >
                <img src={bigGithub} alt="GitHub" />
              </a>
              <a
                href="https://www.instagram.com/henriquegieseke/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={bigInstagram} alt="Instagram" />
              </a>
              <a
                href="https://www.facebook.com/henrique.gieseke"
                target="_blank"
                rel="noreferrer"
              >
                <img src={bigFacebook} alt="Facebook" />
              </a>
            </IconsWrapper>
          </ContactBox>
        </ContactContainer>
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

  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${FadeIn} 1.5s ease;

  @media (max-width: 840px) {
    align-items: flex-end;
  }
`;

const ContentBox = styled.div`
  height: 65%;
  width: 100vw;
  background: rgba(60, 9, 92, 0.75);

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  h3 {
    font-weight: 400;
    color: #ffffff;

    margin-top: 20px;
    @media (max-width: 840px) {
      margin-top: 20px;
    }
  }

  @media (max-width: 840px) {
    justify-content: flex-start;
  }
  @media (max-width: 840px) {
    height: 90%;
  }
`;

const ContactContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 840px) {
    flex-direction: column;
  }
  @media (max-width: 420px) {
    justify-content: center;
  }
`;

const ImageBox = styled.div`
  width: 30%;
  height: 60%;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 840px) {
    width: 50%;
    min-height: 100px;
  }
`;

const ContactBox = styled.div`
  width: 30%;
  height: 60%;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  span {
    color: #ffffff;
    font-size: 22px;

    @media (max-width: 480px) {
      font-size: 1rem;
    }

    @media (max-width: 460px) {
      font-size: 0.7rem;
    }
  }

  @media (max-width: 860px) {
    width: 60%;
    max-width: 370px;
  }
  @media (max-width: 460px) {
    width: 60%;
    min-width: 50px;
    align-items: center;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  min-width: 375px;
  min-height: 131px;

  @media (max-width: 840px) {
    min-width: 255px;
    min-height: 31px;
  }
`;

const ContactWrapper = styled.div`
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin-right: 16px;
  }
`;

const IconsWrapper = styled.div`
  width: 80%;
  height: 40%;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 860px) {
    justify-content: space-evenly;
    width: 100%;
  }

  img {
    margin-right: 30px;
    transition: 0.2s;

    &:hover {
      filter: brightness(0.7);
    }

    @media (max-width: 480px) {
      max-height: 60px;
    }
    @media (max-width: 460px) {
      max-height: 40px;
      margin-right: 0px;
    }
  }
`;

export default ProjectsContent;
