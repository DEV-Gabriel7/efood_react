import { useDispatch, useSelector } from "react-redux"
import { remove, setCheckoutStep } from "../../store/reducers/cart"
import { RootState } from "../../store"
import { CartContainer, CartItem, ProductName, ProductPrice, DeleteButton, CartContainerContent, CartBtn } from "./styles"
import trash from "../../assets/images/trash.png"

const Cart = () => {
    const { items } = useSelector((state: RootState) => state.cart)
    const dispatch = useDispatch()

    const totalPrice = items.reduce((accumulator, currentValue) => accumulator + currentValue.preco, 0).toFixed(2)

    const removeItem = (id: number) => {
        dispatch(remove(id))
    }

    const goToDelivery = () => {
        dispatch(setCheckoutStep('delivery'))
    }

    return (
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
            <CartBtn margin='cart' onClick={goToDelivery}>Continuar para entrega</CartBtn>
        </CartContainer>
    )
}

export default Cart