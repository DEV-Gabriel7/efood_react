import { ReactNode } from 'react'
import { useDispatch } from 'react-redux'
import { close } from '../../store/reducers/cart'
import * as S from '../../styles/modal'

type ModalProps = {
  isOpen: boolean
  children: ReactNode
  isCart?: boolean
}

const Modal = ({ isOpen, children, isCart = false }: ModalProps) => {
  const dispatch = useDispatch()

  const handleOverlayClick = () => {
    dispatch(close())
  }

  if (!isOpen) return null

  return (
    <S.CartModal className={isCart ? 'cart-open' : 'is-open'}>
      <S.Overlay onClick={handleOverlayClick} />
      {children}
    </S.CartModal>
  )
}

export default Modal