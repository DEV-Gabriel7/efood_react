import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../store'
import { close } from '../store/reducers/cart'
import { usePlaceOrderMutation } from '../services/api'
import { Order } from '../types'
import { DeliveryData, PaymentData } from '../types'
import { MESSAGES } from '../types'
import { validateDelivery, validatePayment } from '../types'

export type CheckoutStep = 'delivery' | 'payment' | 'confirmation'

export const useCheckout = () => {
  const [step, setStep] = useState<CheckoutStep>('delivery')
  const [deliveryData, setDeliveryData] = useState<DeliveryData | null>(null)
  const [paymentData, setPaymentData] = useState<PaymentData | null>(null)
  const [errors, setErrors] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { items } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [placeOrder, { isLoading }] = usePlaceOrderMutation()

  const handleDeliveryNext = (data: DeliveryData) => {
    const validationErrors = validateDelivery(data)
    if (validationErrors.length > 0) {
      setErrors(validationErrors)
      return
    }
    setErrors([])
    setDeliveryData(data)
    setStep('payment')
  }

  const handlePaymentNext = async (data: PaymentData) => {
    if (!deliveryData) return

    const validationErrors = validatePayment(data)
    if (validationErrors.length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors([])
    setPaymentData(data)
    setIsSubmitting(true)

    const order: Order = {
      products: items.map(item => ({
        id: item.id,
        price: item.preco
      })),
      delivery: deliveryData,
      payment: data
    }

    try {
      await placeOrder(order).unwrap()
      setStep('confirmation')
      dispatch(close())
    } catch (error) {
      console.error('Erro ao fazer pedido:', error)
      setErrors([MESSAGES.ORDER_ERROR])
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleBackToCart = () => {
    navigate(-1)
  }

  const handleBackToDelivery = () => {
    setStep('delivery')
  }

  const handleFinish = () => {
    navigate('/')
  }

  return {
    step,
    deliveryData,
    paymentData,
    items,
    isLoading,
    errors,
    isSubmitting,
    handleDeliveryNext,
    handlePaymentNext,
    handleBackToCart,
    handleBackToDelivery,
    handleFinish
  }
}