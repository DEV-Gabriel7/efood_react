import styled from 'styled-components'

export const Container = styled.div`
  padding: 80px 0 120px;
  background-color: #fff8f2;
  min-height: calc(100vh - 200px);
`

export const CheckoutInitial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;

  h2 {
    font-size: 24px;
    margin-bottom: 16px;
  }

  p {
    font-size: 16px;
    margin-bottom: 32px;
  }
`

export const StartCheckoutButton = styled.button`
  background-color: #e66767;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #d9534f;
  }
`