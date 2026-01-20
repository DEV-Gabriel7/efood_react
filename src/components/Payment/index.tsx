import { useState } from "react"
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

export type { PaymentData }

type PaymentProps = {
  onNext: (data: PaymentData) => void
  onBack: () => void
  errors?: string[]
  isSubmitting?: boolean
}

const Payment = ({ onNext, onBack, errors = [], isSubmitting = false }: PaymentProps) => {
  const [attemptedSubmit, setAttemptedSubmit] = useState(false)
  const [touched, setTouched] = useState<Set<string>>(new Set())
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

  const handleBlur = (fieldId: string) => {
    setTouched(prev => new Set(prev).add(fieldId))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setAttemptedSubmit(true)
    
    if (validationErrors.length === 0) {
      onNext(formData)
    }
  }

  const getFieldError = (fieldId: string) => {
    const fieldErrors: Record<string, string> = {
      'card.name': 'Nome no cartão',
      'card.number': 'Número do cartão',
      'card.code': 'CVV',
      'card.expires.month': 'Mês de vencimento',
      'card.expires.year': 'Ano de vencimento'
    }
    
    return validationErrors.some(err => {
      const fieldName = fieldErrors[fieldId]
      return fieldName && err.includes(fieldName)
    })
  }

  const shouldShowError = (fieldId: string) => touched.has(fieldId) || attemptedSubmit

  return (
    <S.PaymentContainer>
      <h4>{MESSAGES.PAYMENT_TITLE}{totalPrice}</h4>
      {attemptedSubmit && <ErrorMessage errors={validationErrors} />}
        <S.FormPayment onSubmit={handleSubmit}>
          <Input
            label={MESSAGES.CARD_NAME}
            type="text"
            id="card.name"
            value={formData.card.name}
            onChange={handleChange}
            onBlur={() => handleBlur('card.name')}
            placeholder="Nome no cartão"
            hasError={shouldShowError('card.name') && getFieldError('card.name')}
            required
          />
          <Input
            label={MESSAGES.CARD_NUMBER}
            type="number"
            id="card.number"
            value={formData.card.number || ''}
            onChange={handleChange}
            onBlur={() => handleBlur('card.number')}
            placeholder="1234567890123456"
            min="1000000000000000"
            max="9999999999999999"
            hasError={shouldShowError('card.number') && getFieldError('card.number')}
            required
          />
          <Input
            label={MESSAGES.CVV}
            type="number"
            id="card.code"
            value={formData.card.code || ''}
            onChange={handleChange}
            onBlur={() => handleBlur('card.code')}
            placeholder="123"
            min="100"
            max="9999"
            hasError={shouldShowError('card.code') && getFieldError('card.code')}
            required
          />
          <Input
            label={MESSAGES.EXPIRY_MONTH}
            type="number"
            id="card.expires.month"
            value={formData.card.expires.month || ''}
            onChange={handleChange}
            onBlur={() => handleBlur('card.expires.month')}
            placeholder="MM"
            min="1"
            max="12"
            hasError={shouldShowError('card.expires.month') && getFieldError('card.expires.month')}
            required
          />
          <Input
            label={MESSAGES.EXPIRY_YEAR}
            type="number"
            id="card.expires.year"
            value={formData.card.expires.year || ''}
            onChange={handleChange}
            onBlur={() => handleBlur('card.expires.year')}
            placeholder="AAAA"
            min={new Date().getFullYear()}
            max={new Date().getFullYear() + 20}
            hasError={shouldShowError('card.expires.year') && getFieldError('card.expires.year')}
            required
          />
          <S.Button type="submit" disabled={validationErrors.length > 0 || isSubmitting}>
            {isSubmitting ? 'Processando...' : MESSAGES.FINALIZE_PAYMENT}
          </S.Button>
          <S.Button type="button" onClick={onBack} disabled={isSubmitting}>
            {MESSAGES.BACK_TO_DELIVERY}
          </S.Button>
        </S.FormPayment>
      </S.PaymentContainer>
    )
}

export default Payment