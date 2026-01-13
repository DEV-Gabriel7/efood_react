import { ReactNode } from 'react'
import * as S from './styles'

type ErrorMessageProps = {
  errors: string[]
}

const ErrorMessage = ({ errors }: ErrorMessageProps) => {
  if (errors.length === 0) return null

  return (
    <S.ErrorContainer>
      {errors.map((error, index) => (
        <S.ErrorText key={index}>{error}</S.ErrorText>
      ))}
    </S.ErrorContainer>
  )
}

export default ErrorMessage