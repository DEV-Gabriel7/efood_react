import { OrderResponse } from "../../types"
import { MESSAGES } from "../../types"
import * as S from "./styles"

type ConfirmationProps = {
  orderData: OrderResponse
  onFinish: () => void
}

const Confirmation = ({ orderData, onFinish }: ConfirmationProps) => {
  return (
    <S.ConfirmationContainer>
      <h2>{MESSAGES.ORDER_SUCCESS}{orderData.id}</h2>
      <p>
        {MESSAGES.ORDER_SUCCESS_MESSAGE}
      </p>
      <S.OrderDetails>
        <h3>{MESSAGES.DELIVERY_DETAILS}</h3>
        <p><strong>Nome:</strong> {orderData.delivery.receiver}</p>
        <p><strong>Endereço:</strong> {orderData.delivery.address.description}, {orderData.delivery.address.number}</p>
        <p><strong>Cidade:</strong> {orderData.delivery.address.city}</p>
        <p><strong>CEP:</strong> {orderData.delivery.address.zipCode}</p>
        {orderData.delivery.address.complement && (
          <p><strong>Complemento:</strong> {orderData.delivery.address.complement}</p>
        )}
      </S.OrderDetails>
      <S.OrderDetails>
        <h3>{MESSAGES.PAYMENT_DETAILS}</h3>
        <p><strong>Nome no cartão:</strong> {orderData.payment.card.name}</p>
        <p><strong>Número do cartão:</strong> **** **** **** {orderData.payment.card.number.toString().slice(-4)}</p>
      </S.OrderDetails>
      <S.OrderDetails>
        <h3>{MESSAGES.PRODUCTS}</h3>
        {orderData.products.map((produto) => (
          <div key={produto.id} className="product-item">
            <img src={produto.foto} alt={produto.nome} />
            <div>
              <h4>{produto.nome}</h4>
              <p>R$ {produto.preco.toFixed(2)}</p>
            </div>
          </div>
        ))}
        <p className="total"><strong>{MESSAGES.TOTAL}{orderData.total.toFixed(2)}</strong></p>
      </S.OrderDetails>
      <S.ConfirmationButton onClick={onFinish}>
        Concluir
      </S.ConfirmationButton>
    </S.ConfirmationContainer>
  )
}

export default Confirmation