import { CartBtn, CartContainer, CartContainerContent, CartItem, CartModal, DeleteButton, Overlay, ProductName, ProductPrice } from "./styles"
import trash from '../../assets/images/trash.png'
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store"
import { close, remove } from "../../store/reducers/cart"

const Cart = () => {
    //const isOpen = useSelector((state: RootState) => state.cart.isOpen)
    const { isOpen, items } = useSelector((state: RootState) => state.cart)

    const dispatch = useDispatch()

    const closeCart = () => {
        dispatch(close())
    }

    const getTotalPrice = () => {
        return items.reduce((accumulator, currentValue) => {
            return (accumulator += currentValue.preco)
        }, 0)
    }

    const removeItem = (id: number) => {
        dispatch(remove(id))
    }

    return (
        <CartModal className={isOpen ? 'is-open' : ''}>
            <Overlay onClick={closeCart} />
            <CartContainer>
                {items.map((item) => (
                    <CartItem key={item.id}>
                        <div>
                            <img className="banner" src={item.foto} alt={item.nome} />
                        </div>
                        <div>
                            <ProductName>{item.nome}</ProductName>
                            <ProductPrice>R$ {item.preco.toFixed(2)}</ProductPrice>

                        </div>
                        <DeleteButton onClick={() => removeItem(item.id)} src={trash} />
                    </CartItem>
                ))}


                <CartContainerContent>
                    <p>Valor total</p>
                    <p>R$ {getTotalPrice().toFixed(2)}</p>
                </CartContainerContent>
                <CartBtn>Continuar para entrega</CartBtn>

            </CartContainer>

        </CartModal>
    )
}

export default Cart