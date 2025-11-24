import styled from "styled-components";
import { colors } from "../../styles";

export const CartModal = styled.div`
    display: none;  

    &.is-open{
        display: block;
    }
`

export const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
`

export const CartContainer = styled.aside`
    height: 100%;
    width: 360px;
    background-color: ${colors.softCoral};
    position: fixed;
    right: 0;
    top: 0;
    padding: 8px;
    z-index: 99; 
`

export const CartItem = styled.div`
    width: 340px;
    height: 100px;
    background-color: ${colors.softPeach};
    padding: 8px;
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
    position: relative; /* necessário para z-index */
    z-index: 99; /* acima do overlay */
    
    img.banner{
        object-fit: cover;
        width: 80px;
        height: 80px;
    }
`

export const ProductName = styled.h3`
    font-weight: bold;
    font-size: 18px;
`

export const ProductPrice = styled.p`
    margin-top: 16px;
    line-height: 22px;
`

export const DeleteButton = styled.img`
    position: absolute;
    top: 78px;
    left: 320px;
    width: 16px;
    height: 16px;
    object-fit: cover;
    cursor: pointer;
`

export const CartContainerContent = styled.div`
    display: flex;
    justify-content: space-between;    
    margin-top: 40px;

    p {
        color: ${colors.softPeach};
        font-weight: bold;
        font-size: 14px;
    }
`

export const CartBtn = styled.button`
    width: 100%;
    padding: 4px;
    background-color: ${colors.softPeach};
    border: none;
    font-weight: 700;
    margin-top: 16px;
`
