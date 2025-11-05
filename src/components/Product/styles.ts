import styled from "styled-components";
import { colors } from "../../styles";

export const ProductCard = styled.div`
    max-width: 320px;
    background-color: ${colors.softCoral};
    overflow: hidden;
    padding: 8px;
    
    img{
        object-fit: cover;
    }
`
export const MenuTitle = styled.h1`
    font-size: 16px;
    color: ${colors.softPeach};
    font-weight: bold;
    margin: 8px 0;
`

export const MenuDescription = styled.p`
    font-size: 14px;
    color: ${colors.softPeach};
`

export const ButtonAddCart = styled.button` 
    width: 300px;
    height: 24px;
    background-color: ${colors.softPeach};
    color: ${colors.softCoral};
    border: none;
    font-weight: bold;
    margin-top: 8px;
`