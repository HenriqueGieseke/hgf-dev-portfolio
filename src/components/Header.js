import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import hgfFace from '../assets/hgf-face1.png';
import instagramIcon from '../assets/instagramIcon.svg';
import facebookIcon from '../assets/facebook-icon.svg';
import githubIcon from '../assets/githubIcon.svg';

const Header = () => {
  return (
    <HeaderNav>
      <NavBarContainer>
        <LogoWrapper>
          <Link to="/">hgf.dev</Link>
        </LogoWrapper>

        <LinksWrapper>
          <Link to="/projects">projetos</Link>
          <Link to="/about">sobre</Link>
          <Link to="/contact">contato</Link>
        </LinksWrapper>
      </NavBarContainer>
      <ProfileWrapper>
        <StyledImg src={hgfFace} />
        <StyledName>Henrique Gieseke Ferreira</StyledName>
        <StyledTitle>Programador Full Stack, Rio de Janeiro, RJ</StyledTitle>
        <IconsWrapper>
          <a
            href="https://www.instagram.com/henriquegieseke/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a
            href="https://www.facebook.com/henrique.gieseke"
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a
            href="https://github.com/HenriqueGieseke"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubIcon} alt="Github" />
          </a>
        </IconsWrapper>
      </ProfileWrapper>
    </HeaderNav>
  );
};

export default Header;

const HeaderNav = styled.header`
  height: 35%;
  width: 100vw;
  background: rgba(60, 9, 92, 0.75);

  @media (max-width: 540px) {
    height: 35%;
  }
`;

const NavBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-left: 50px;
  padding-right: 50px;
  padding-top: 16px;

  a {
    text-decoration: none;
    color: #ffffff;

    border-bottom: 1px solid rgba(60, 9, 92, 0);
    transition: 0.4s;
    padding-bottom: 4px;

    &:hover {
      border-bottom: 1px solid #ffffff;
    }
  }

  @media (max-width: 540px) {
    justify-content: center;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 20%;
  min-width: 215px;
`;

const LogoWrapper = styled.div`
  a {
    font-size: 1.3rem;
  }

  @media (max-width: 540px) {
    display: none;
  }
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
`;

const StyledImg = styled.img`
  margin-top: 2rem;
  margin-bottom: 1.2rem;

  @media (max-width: 540px) {
    height: 100px;
  }
`;

const StyledName = styled.span`
  font-size: 1.4rem;
  color: #ffffff;
  margin-bottom: 0.9rem;

  @media (max-width: 280px) {
    font-size: 1.2rem;
  }
`;

const StyledTitle = styled.span`
  font-size: 0.8rem;
  color: #ffffff;

  @media (max-width: 280px) {
    font-size: 0.7rem;
  }
`;

const IconsWrapper = styled.div`
  width: 90px;
  margin-top: 1.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    transition: 0.2s;

    &:hover {
      filter: brightness(0.7);
    }
  }
`;
