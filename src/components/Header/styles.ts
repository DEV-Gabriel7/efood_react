import styled from "styled-components";
import { colors } from "../../styles";
import heroBG from "../../assets/images/hero_background.png";
import { Link } from "react-router-dom";
import { Props } from ".";

export const HeaderDiv = styled.div<Omit<Props, 'button' | 'text'>>`
  width: 100%;
  height: ${({ page }) => (page === 'menu' ? '180px' : '384px')};
  background-image: url(${heroBG});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: ${({ page }) =>
    page === 'menu' ? 'center' : 'flex-start'};

  /* o container agora controla o conteúdo centralizado */
  .container {
    display: flex;
    flex-direction: ${({ page }) => (page === 'menu' ? 'row' : 'column')};
    justify-content: ${({ page }) =>
      page === 'menu' ? 'space-between' : 'center'};
    align-items: center;
    text-align: center;
    width: 100%;
  }

  img {
    margin-top: ${({ page }) => (page === 'menu' ? '0' : '64px')};
  }
`

export const HeaderTitle = styled.h1<Omit<Props, 'button'>>`
  color: ${colors.softCoral};
  font-weight: 900;
  text-align: center;

  ${({ page }) =>
    page === "menu" ? `
        font-size: 18px;
        margin: 0;
      `
      : `
        width: 540px;
        margin: 140px 0 40px;
      `
  }
`;

export const ButtonLink = styled(Link)`
  color: ${colors.softCoral};
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
`;
