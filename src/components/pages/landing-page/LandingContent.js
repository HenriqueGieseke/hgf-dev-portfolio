import React from 'react';
import styled, { keyframes } from 'styled-components';
import landingImage from '../../../assets/lading-image.svg';
import { useHistory } from 'react-router-dom';

const LandingContent = () => {
  let history = useHistory();

  const handleClick = () => {
    history.push('/contact');
  };

  return (
    <Container>
      <ContentWrapper>
        <p>
          Web developer autodidata que usa as tecnologias mais difundidas no
          mercado e com paixão por aprender coisas novas
        </p>
        <img src={landingImage} alt="Landing" />
      </ContentWrapper>
      <ButtonWrapper>
        <StyledButton onClick={handleClick}>ENTRE EM CONTATO</StyledButton>
      </ButtonWrapper>
    </Container>
  );
};

const FadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Container = styled.section`
  width: 100vw;
  height: 65%;
  animation: ${FadeIn} 1.5s ease;

  p {
    font-weight: bold;
    font-size: 51px;
    width: 670px;

    color: #ffffff;

    @media (max-width: 1400px) {
      font-size: 2rem;
      width: 400px;
    }
    @media (max-width: 950px) {
      font-size: 1.5rem;
      width: 200px;
    }

    @media (max-width: 530px) {
      font-size: 1.35rem;
    }
  }

  img {
    height: 380px;

    @media (max-width: 1400px) {
      height: 60%;
    }

    @media (max-width: 950px) {
      height: 40%;
    }

    @media (max-width: 530px) {
      height: 30%;
    }
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 950px) {
    height: 70%;
  }

  @media (max-width: 530px) {
    flex-direction: column;
  }
`;

const ButtonWrapper = styled.div`
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 580px) {
    height: 10%;
  }
`;

const StyledButton = styled.button`
  width: 334px;
  height: 66px;
  background: #9a3aa6;
  border-radius: 19px;
  border: none;
  cursor: pointer;

  font-size: 23px;
  color: #ffffff;

  transition: 0.2s;

  &:hover {
    filter: brightness(0.7);
  }

  @media (max-width: 1400px) {
    width: 250px;
    height: 46px;

    font-size: 16px;
    border-radius: 10px;
  }

  @media (max-width: 300px) {
    width: 200px;
  }
`;

export default LandingContent;
