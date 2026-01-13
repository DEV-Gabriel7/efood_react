import styled from 'styled-components'

export const ConfirmationContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 32px;
  background-color: #fff;
  border-radius: 8px;

  h2 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
    color: #e66767;
  }

  p {
    margin-bottom: 16px;
    line-height: 1.5;
  }
`

export const OrderDetails = styled.div`
  margin-bottom: 24px;
  padding: 16px;
  background-color: #fff8f2;
  border-radius: 4px;

  h3 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 8px;
    color: #e66767;
  }

  p {
    margin-bottom: 4px;
    font-size: 14px;
  }

  .product-item {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    padding: 8px;
    background-color: #fff;
    border-radius: 4px;

    img {
      width: 80px;
      height: 80px;
      object-fit: cover;
      border-radius: 4px;
      margin-right: 12px;
    }

    h4 {
      font-size: 14px;
      margin-bottom: 4px;
    }

    p {
      font-size: 12px;
      color: #e66767;
      font-weight: bold;
    }
  }

  .total {
    font-size: 16px;
    color: #e66767;
    text-align: right;
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid #e66767;
  }
`

export const ConfirmationButton = styled.button`
  background-color: #e66767;
  color: #ffebd9;
  border: none;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 24px;

  &:hover {
    background-color: #ce5a5a;
  }
`