import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import * as S from './styles'

const Checkout = () => {
  const { items } = useSelector((state: RootState) => state.cart)

  return (
    <>
      <Header page="checkout" text={`${items.length} itens`} button={false} />
      <S.Container />
      <Footer />
    </>
  )
}

export default Checkout