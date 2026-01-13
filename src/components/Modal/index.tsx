import { ReactNode } from 'react'
import * as S from '../../styles/modal'

type ModalProps = {
  isOpen: boolean
  children: ReactNode
}

const Modal = ({ isOpen, children }: ModalProps) => {
  return (
    <S.CartModal className={isOpen ? 'is-open' : ''}>
      <S.Overlay />
      {children}
    </S.CartModal>
  )
}

export default Modal