import styled from "styled-components"
import { colors } from "../../styles"

export const ProductsContainer = styled.section`
    justify-self: center;
    align-self: center;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    margin: 56px 0 120px;
`

export const ProductCard = styled.div`
    max-width: 320px;
    background-color: ${colors.softCoral};
    overflow: hidden;
    padding: 8px;
    border-radius: 8px;

    >img{
        width: 100%;
        height: 168px;
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
    cursor: pointer;
`

export const ModalContainer = styled.div`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.8);
    }

    &.visible {
        display: flex;
    }
`

export const ModalContent = styled.div`
    background-color: ${colors.softCoral};
    width: 1024px;
    height: 340px;
    padding: 32px;
    gap: 24px;
    display: flex;
    position: relative;
    color: ${colors.white};
    overflow: hidden;

    * {
        color: inherit;
    }
`

export const BannerProduct = styled.img`
    object-fit: cover;
    width: 280px;
    height: 280px;
`

export const CloseButton = styled.img`
    position: absolute;
    top: 8px;
    right: 8px;
    width: 16px;
    height: 16px;
    cursor: pointer;
`

export const ModalTitle = styled.h3`
    font-size: 18px;
    font-weight: 900;
`

export const ModalDescription = styled.p`
    margin-top: 16px;
    line-height: 22px;
    font-size: 14px;
`

export const AddCartButton = styled.button`
    background-color: ${colors.softPeach};
    color: ${colors.softCoral};
    margin-top: 16px;
    padding: 4px;
    width: 216px;
    height: 24px;
    border: none;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
`