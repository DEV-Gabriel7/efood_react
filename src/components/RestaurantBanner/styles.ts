import styled from "styled-components";
import { colors } from "../../styles";

export const Hero = styled.div`
    width: 100%;
    height: 280px;
    position: relative; 

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0; 
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4); 
        z-index: 1;
    }

    img {
        width: 100%;
        height: 280px;
        object-fit: cover;
    }

    h1 {
        position: absolute;
        z-index: 2;
        top: 24px;
        color: ${colors.white};
        font-weight: 100;
    }

    h2 {
        position: absolute;
        z-index: 2;
        bottom: 32px;
        color: ${colors.white};
        font-weight: 900;
    }
`;
