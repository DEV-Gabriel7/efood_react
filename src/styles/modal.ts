import styled from "styled-components";
import { colors } from "../styles";

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

export const ModalContainer = styled.aside`
    height: 100%;
    width: 360px;
    background-color: ${colors.softCoral};
    position: fixed;
    right: 0;
    top: 0;
    padding: 8px;
    z-index: 99;

    h4{
        margin: 32px 0 16px;
        color: ${colors.softPeach};
    }

    @media (max-width: 768px) {
        width: 100%;
        max-width: 360px;
    }
`

export const Form = styled.form``

export const Button = styled.button`
    width: 100%;
    padding: 4px;
    background-color: ${colors.softPeach};
    border: none;
    font-weight: 700;
    margin-top: 16px;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.2s;

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    @media (max-width: 768px) {
        padding: 12px 4px;
        font-size: 16px;
    }
`