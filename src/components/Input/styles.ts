import styled from 'styled-components'
import { colors } from '../../styles'

type InputStyledProps = {
  hasError?: boolean
}

export const Label = styled.label`
  display: block;
  color: ${colors.softPeach};
  margin-bottom: 8px;
  font-weight: bold;
  font-size: 14px;
`

export const Input = styled.input<InputStyledProps>`
  width: 100%;
  background-color: ${colors.softPeach};
  border: 2px solid transparent;
  height: 32px;
  padding: 0 8px;
  margin-bottom: 8px;
  border-radius: 4px;
  font-size: 16px;
  border-color: ${props => props.hasError ? '#e74c3c' : 'transparent'};

  &:focus {
    outline: none;
    border-color: ${props => props.hasError ? '#e74c3c' : colors.softCoral};
  }

  @media (max-width: 768px) {
    font-size: 16px; /* Previne zoom no iOS */
  }
`