import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { close, remove } from "../../store/reducers/cart"
import { RootState } from "../../store"
import { CartModal, Overlay, CartContainer, CartItem, ProductName, ProductPrice, DeleteButton, CartContainerContent, CartBtn } from "./styles"
import trash from "../../assets/images/trash.png"

const Cart = () => {
    const { isOpen, items } = useSelector((state: RootState) => state.cart)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const closeCart = () => {
        dispatch(close())
    }

    const totalPrice = items.reduce((accumulator, currentValue) => accumulator + currentValue.preco, 0).toFixed(2)

    const removeItem = (id: number) => {
        dispatch(remove(id))
    }

    const goToCheckout = () => {
        navigate('/checkout')
        dispatch(close())
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
                    <p>R$ {totalPrice}</p>
                </CartContainerContent>
                <CartBtn margin='cart' onClick={goToCheckout}>Continuar para entrega</CartBtn>
            </CartContainer>

        </CartModal>
    )
}

export default Cart