import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { setCheckoutStep, setDeliveryData, setPaymentData, setOrderConfirmation, close } from '../../store/reducers/cart'
import { usePlaceOrderMutation } from '../../services/api'
import { DeliveryData, PaymentData } from '../../types'
import { validateDelivery, validatePayment } from '../../types'
import Modal from '../Modal'
import Cart from '../Cart'
import Delivery from '../Delivery'
import Payment from '../Payment'
import Confirmation from '../Confirmation'

const CheckoutDrawer = () => {
  const dispatch = useDispatch()
  const [placeOrder] = usePlaceOrderMutation()
  
  const { isOpen, checkoutStep, items, deliveryData, paymentData, orderId, orderTotal } = useSelector(
    (state: RootState) => state.cart
  )

  const handleDeliveryNext = (data: DeliveryData) => {
    const errors = validateDelivery(data)
    if (errors.length > 0) {
      alert(errors.join('\n'))
      return
    }
    dispatch(setDeliveryData(data))
    dispatch(setCheckoutStep('payment'))
  }

  const handlePaymentNext = async (data: PaymentData) => {
    const errors = validatePayment(data)
    if (errors.length > 0) {
      alert(errors.join('\n'))
      return
    }

    if (!deliveryData) return

    try {
      const order = {
        products: items.map(item => ({
          id: item.id,
          price: item.preco
        })),
        delivery: deliveryData,
        payment: data
      }

      const response = await placeOrder(order).unwrap()
      
      dispatch(setPaymentData(data))
      dispatch(setOrderConfirmation({
        orderId: response.id || Math.floor(Math.random() * 10000),
        total: items.reduce((total, item) => total + item.preco, 0)
      }))
      dispatch(setCheckoutStep('confirmation'))
    } catch (error) {
      console.error('Erro ao fazer pedido:', error)
      alert('Erro ao processar o pagamento. Tente novamente.')
    }
  }

  const handleBackToCart = () => {
    dispatch(setCheckoutStep('cart'))
  }

  const handleBackToDelivery = () => {
    dispatch(setCheckoutStep('delivery'))
  }

  const handleFinish = () => {
    dispatch(close())
  }

  return (
    <Modal isOpen={isOpen} isCart={true}>
      {checkoutStep === 'cart' && <Cart />}
      
      {checkoutStep === 'delivery' && (
        <Delivery 
          onNext={handleDeliveryNext}
          onBack={handleBackToCart}
        />
      )}
      
      {checkoutStep === 'payment' && (
        <Payment 
          onNext={handlePaymentNext}
          onBack={handleBackToDelivery}
        />
      )}
      
      {checkoutStep === 'confirmation' && orderId && (
        <Confirmation 
          orderData={{
            id: orderId,
            products: items,
            delivery: deliveryData!,
            payment: paymentData!,
            total: orderTotal
          }}
          onFinish={handleFinish}
        />
      )}
    </Modal>
  )
}

export default CheckoutDrawer
