import { useCheckout } from '../../hooks'
import { MESSAGES } from '../../types'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Delivery, { DeliveryData } from '../../components/Delivery'
import Payment, { PaymentData } from '../../components/Payment'
import Confirmation from '../../components/Confirmation'
import ErrorMessage from '../../components/ErrorMessage'
import * as S from './styles'

const Checkout = () => {
  const {
    step,
    deliveryData,
    paymentData,
    items,
    errors,
    isSubmitting,
    handleStartCheckout,
    handleDeliveryNext,
    handlePaymentNext,
    handleBackToCart,
    handleBackToDelivery,
    handleFinish
  } = useCheckout()

  return (
    <>
      <Header page="checkout" text={`${items.length} ${MESSAGES.CART_ITEMS}`} button={false} />
      <ErrorMessage errors={errors} />
      <S.Container>
        {step === 'initial' && (
          <S.CheckoutInitial>
            <h2>{MESSAGES.CHECKOUT_TITLE}</h2>
            <p>{MESSAGES.CHECKOUT_DESCRIPTION}</p>
            <S.StartCheckoutButton onClick={handleStartCheckout}>
              {MESSAGES.CONTINUE_TO_DELIVERY}
            </S.StartCheckoutButton>
          </S.CheckoutInitial>
        )}

        {step === 'delivery' && (
          <Delivery onNext={handleDeliveryNext} onBack={handleBackToCart} errors={errors} />
        )}

        {step === 'payment' && (
          <Payment onNext={handlePaymentNext} onBack={handleBackToDelivery} errors={errors} isSubmitting={isSubmitting} />
        )}

        {step === 'confirmation' && deliveryData && paymentData && (
          <Confirmation
            orderData={{
              id: Math.floor(Math.random() * 10000), // Simulando ID do pedido
              products: items,
              delivery: deliveryData,
              payment: paymentData,
              total: items.reduce((total, item) => total + item.preco, 0)
            }}
            onFinish={handleFinish}
          />
        )}
      </S.Container>
      <Footer />
    </>
  )
}

export default Checkout