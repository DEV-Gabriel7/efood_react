import { OrderResponse } from "../../types"
import * as S from "./styles"

type ConfirmationProps = {
  orderData: OrderResponse
  onFinish: () => void
}

const Confirmation = ({ orderData, onFinish }: ConfirmationProps) => {
  return (
    <S.ConfirmationContainer>
      <h4>Pedido Confirmado</h4>
      
      <S.ConfirmationMessage>
        <p>
          Estamos felizes em informar que seu pedido já está em processo de preparação e, 
          em breve, será entregue no endereço fornecido.
        </p>
        
        <p>
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar 
          cobranças extras.
        </p>
        
        <p>
          Lembre-se da importância de higienizar as mãos após o recebimento do pedido, 
          garantindo assim sua segurança e bem-estar durante a refeição.
        </p>
        
        <p>
          Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. 
          Bom apetite!
        </p>
      </S.ConfirmationMessage>

      <S.OrderInfo>
        <p><strong>ID do Pedido:</strong> {orderData.id}</p>
        <p><strong>Total:</strong> R$ {orderData.total.toFixed(2)}</p>
      </S.OrderInfo>

      <S.ConfirmationButton onClick={onFinish}>
        Voltar ao Menu
      </S.ConfirmationButton>
    </S.ConfirmationContainer>
  )
}

export default Confirmation