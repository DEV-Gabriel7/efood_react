import styled from "styled-components";
import { colors } from "../styles";

export const CartModal = styled.div`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 50;

    &.is-open {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &.cart-open {
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
    cursor: pointer;
`

// Para Cart/Checkout - Drawer lateral
export const CartDrawer = styled.aside`
    height: 100%;
    width: 360px;
    background-color: ${colors.softCoral};
    position: fixed;
    right: 0;
    top: 0;
    padding: 8px;
    z-index: 99;
    overflow-y: auto;

    h4 {
        margin: 32px 0 16px;
        color: ${colors.softPeach};
        font-size: 18px;
        font-weight: bold;
    }

    @media (max-width: 768px) {
        width: 100%;
        max-width: 360px;
    }
`

// Para Modal centralizado (se precisar depois)
export const ModalContainer = styled.aside`
    background-color: ${colors.softCoral};
    position: relative;
    padding: 32px;
    z-index: 99;
    max-width: 540px;
    width: 90%;
    max-height: 90vh;
    overflow-y: auto;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);

    h4 {
        margin: 0 0 24px;
        color: ${colors.softPeach};
        font-size: 20px;
        font-weight: bold;
    }

    @media (max-width: 768px) {
        width: 95%;
        padding: 24px;
        max-width: 100%;
    }
`

export const Form = styled.form``

export const Button = styled.button`
    width: 100%;
    padding: 12px;
    background-color: ${colors.softPeach};
    border: none;
    font-weight: 700;
    font-size: 16px;
    margin-top: 16px;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.2s ease;
    color: ${colors.softCoral};

    &:hover:not(:disabled) {
        background-color: #f5d4ca;
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    @media (max-width: 768px) {
        padding: 12px;
        font-size: 14px;
    }
`