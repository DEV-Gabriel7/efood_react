import { InputHTMLAttributes } from 'react'
import * as S from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  placeholder?: string
  hasError?: boolean
}

const Input = ({ label, placeholder, hasError = false, ...props }: InputProps) => {
  return (
    <div>
      <S.Label htmlFor={props.id}>{label}</S.Label>
      <S.Input {...props} placeholder={placeholder} hasError={hasError} />
    </div>
  )
}

export default Input