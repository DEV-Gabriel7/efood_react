import styled from 'styled-components'
import { CartDrawer } from '../../styles/modal'
import { colors } from '../../styles'

export const ConfirmationContainer = styled(CartDrawer)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const ConfirmationMessage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  p {
    font-size: 14px;
    line-height: 1.6;
    color: ${colors.softPeach};
    margin: 0;
    text-align: justify;
  }
`

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
  background-color: ${colors.softPeach};
  border-radius: 4px;

  p {
    font-size: 14px;
    color: #333;
    margin: 0;

    strong {
      font-weight: bold;
    }
  }
`

export const ConfirmationButton = styled.button`
  width: 100%;
  background-color: ${colors.softCoral};
  color: white;
  border: none;
  padding: 12px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 8px;

  &:hover {
    background-color: #e55555;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`