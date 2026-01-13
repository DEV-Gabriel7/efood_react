import { InputHTMLAttributes } from 'react'
import * as S from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  placeholder?: string
}

const Input = ({ label, placeholder, ...props }: InputProps) => {
  return (
    <div>
      <S.Label htmlFor={props.id}>{label}</S.Label>
      <S.Input {...props} placeholder={placeholder} />
    </div>
  )
}

export default Input