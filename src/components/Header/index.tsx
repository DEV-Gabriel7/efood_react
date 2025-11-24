import logo from '../../assets/images/logo.png'
import { ButtonLink, HeaderDiv, HeaderTitle } from './styles'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'

export type Props = {
    button?: boolean
    text: string
    page: 'home' | 'menu';
}


const Header = ({ button, text, page }: Props) => {
    const dispatch = useDispatch()
    const { items } = useSelector((state: RootState) => state.cart)

    const openCart = () => {
        dispatch(open())
    }

    return (
        <HeaderDiv page={page}>
            <div className="container">
                {page === 'menu' ? (
                    <>
                        <ButtonLink to='/'>Restaurantes</ButtonLink>
                        <img src={logo} />
                        <HeaderTitle onClick={openCart} page={page}>{items.length} - Produto(s) no carrinho</HeaderTitle>

                    </>

                ) : (
                    <>
                        {button && <ButtonLink to='/'>Restaurantes</ButtonLink>}
                        <img src={logo} />
                        <HeaderTitle page={page}>{text}</HeaderTitle>
                    </>
                )}
            </div>
        </HeaderDiv>


    )
}

export default Header