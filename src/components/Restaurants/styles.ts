import styled from "styled-components";
import { colors } from "../../styles";
import { Link } from "react-router-dom";

export const Card = styled.div`
    max-width: 470px;
    height: 398px;
    border: 1px solid ${colors.softCoral};
    margin-bottom: 48px;
    overflow: hidden;
    position: relative;

    img {
        width: 100%;
        height: 220px;
        object-fit: cover; 
    }
`

export const TagContainer = styled.div`
    display: flex;
    gap: 8px;
    position: absolute;
    top: 16px;
    right: 16px;

`

export const Tag = styled.div`
    background-color: ${colors.softCoral};
    color: ${colors.white};
    width: fit-content;
    font-size: 12px;
    padding: 6px 4px;
    font-weight: bold;
`

export const CardTitle = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    margin: 8px 7px 16px;
    align-items: center;

    span {
        color: #ffd900ff;
        font-size: 18px;
    }
`


export const CardDescription = styled.p`
    margin: 0 8px 16px;
`

export const ButtonCard = styled(Link)`
    background-color: ${colors.softCoral};
    color: ${colors.white};
    border: none;
    font-size: 14px;
    padding: 4px 6px;
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    cursor: pointer;
    margin: 0 8px 8px;
    text-decoration: none;
    
`