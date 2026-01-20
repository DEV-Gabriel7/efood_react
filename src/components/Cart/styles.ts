import styled from "styled-components";
import { colors } from "../../styles";
import { CartModal, Overlay, CartDrawer, Button } from "../../styles/modal";

type MarginTop = {
    margin: 'cart'
}

export { CartModal, Overlay };

export const CartContainer = styled(CartDrawer)``

export const CartBtn = styled(Button)<MarginTop>`
    margin-top: ${props => props.margin === 'cart' ? '32px' : '16px'};
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
