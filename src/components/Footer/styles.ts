import styled from "styled-components";
import { colors } from "../../styles";

export const FooterContainer = styled.footer`
  width: 100%;
  height: 300px;
  background-color: ${colors.softPeach}; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  text-align: center;
  overflow-x: hidden;

  img {
    margin-bottom: 32px;
  }

  .links {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-bottom: 40px;

    a {
      font-size: 24px;
      transition: 0.3s;

      &:hover {
        opacity: 0.7;
      }
    }
  }

  p {
    font-size: 10px;
    width: 90%;
    max-width: 480px;
    line-height: 1.4;
    margin: 0 auto;
  }
`;

