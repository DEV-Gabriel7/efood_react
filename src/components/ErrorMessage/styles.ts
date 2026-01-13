import styled from 'styled-components'
import { colors } from '../../styles'

export const ErrorContainer = styled.div`
  background-color: #fee;
  border: 1px solid #fcc;
  border-radius: 4px;
  padding: 12px;
  margin-bottom: 16px;
`

export const ErrorText = styled.p`
  color: #c33;
  font-size: 14px;
  margin: 4px 0;
  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
`