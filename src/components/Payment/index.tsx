import Modal from "../Modal"
import Input from "../Input"
import { useSelector } from "react-redux"
import { RootState } from "../../store"
import { PaymentData } from "../../types"
import { MESSAGES } from "../../types"
import { useForm } from "../../hooks"
import { useValidation } from "../../hooks"
import { validatePayment } from "../../types"
import ErrorMessage from "../ErrorMessage"
import * as S from "./styles"

type PaymentProps = {
  onNext: (data: PaymentData) => void
  onBack: () => void
  errors?: string[]
  isSubmitting?: boolean
}

const Payment = ({ onNext, onBack, errors = [], isSubmitting = false }: PaymentProps) => {
  const { items } = useSelector((state: RootState) => state.cart)
  const { formData, handleChange } = useForm<PaymentData>({
    card: {
      name: '',
      number: 0,
      code: 0,
      expires: {
        month: 0,
        year: 0
      }
    }
  })

  const validationErrors = useValidation(formData, validatePayment)
  const totalPrice = items.reduce((accumulator, currentValue) => accumulator + currentValue.preco, 0).toFixed(2)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validationErrors.length === 0) {
      onNext(formData)
    }
  }

  return (
    <Modal isOpen={true}>
      <S.PaymentContainer>
        <h4>{MESSAGES.PAYMENT_TITLE}{totalPrice}</h4>
        <ErrorMessage errors={validationErrors} />
        <S.FormPayment onSubmit={handleSubmit}>
          <Input
            label={MESSAGES.CARD_NAME}
            type="text"
            id="card.name"
            value={formData.card.name}
            onChange={handleChange}
            placeholder="Nome no cartão"
            required
          />
          <div className="card-details">
            <Input
              label={MESSAGES.CARD_NUMBER}
              type="number"
              id="card.number"
              value={formData.card.number || ''}
              onChange={handleChange}
              placeholder="1234567890123456"
              min="1000000000000000"
              max="9999999999999999"
              required
            />
            <Input
              label={MESSAGES.CVV}
              type="number"
              id="card.code"
              value={formData.card.code || ''}
              onChange={handleChange}
              placeholder="123"
              min="100"
              max="9999"
              required
            />
          </div>
          <div className="expiration">
            <Input
              label={MESSAGES.EXPIRY_MONTH}
              type="number"
              id="card.expires.month"
              value={formData.card.expires.month || ''}
              onChange={handleChange}
              placeholder="MM"
              min="1"
              max="12"
              required
            />
            <Input
              label={MESSAGES.EXPIRY_YEAR}
              type="number"
              id="card.expires.year"
              value={formData.card.expires.year || ''}
              onChange={handleChange}
              placeholder="AAAA"
              min={new Date().getFullYear()}
              max={new Date().getFullYear() + 20}
              required
            />
          </div>
          <S.Button type="submit" disabled={validationErrors.length > 0 || isSubmitting}>
            {isSubmitting ? 'Processando...' : MESSAGES.FINALIZE_PAYMENT}
          </S.Button>
          <S.Button type="button" onClick={onBack} disabled={isSubmitting}>
            {MESSAGES.BACK_TO_DELIVERY}
          </S.Button>
        </S.FormPayment>
      </S.PaymentContainer>
    </Modal>
  )
}

export default Payment