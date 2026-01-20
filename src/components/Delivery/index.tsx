import { useState } from "react"
import Input from "../Input"
import { DeliveryData } from "../../types"
import { MESSAGES } from "../../types"
import { useForm } from "../../hooks"
import { useValidation } from "../../hooks"
import { validateDelivery } from "../../types"
import ErrorMessage from "../ErrorMessage"
import * as S from "./styles"

export type { DeliveryData }

type DeliveryProps = {
  onNext: (data: DeliveryData) => void
  onBack: () => void
  errors?: string[]
}

const Delivery = ({ onNext, onBack, errors = [] }: DeliveryProps) => {
  const [attemptedSubmit, setAttemptedSubmit] = useState(false)
  const [touched, setTouched] = useState<Set<string>>(new Set())
  const { formData, handleChange } = useForm<DeliveryData>({
    receiver: '',
    address: {
      description: '',
      city: '',
      zipCode: 0,
      number: 0,
      complement: ''
    }
  })

  const validationErrors = useValidation(formData, validateDelivery)

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
      'receiver': 'Nome do destinatário',
      'address.description': 'Endereço',
      'address.city': 'Cidade',
      'address.zipCode': 'CEP',
      'address.number': 'Número'
    }
    
    return validationErrors.some(err => {
      const fieldName = fieldErrors[fieldId]
      return fieldName && err.includes(fieldName)
    })
  }

  const shouldShowError = (fieldId: string) => touched.has(fieldId) || attemptedSubmit

  return (
    <S.DeliveryContainer>
      <h4>{MESSAGES.DELIVERY_TITLE}</h4>
      {attemptedSubmit && <ErrorMessage errors={validationErrors} />}
      <S.FormDelivery onSubmit={handleSubmit}>
          <Input
            label={MESSAGES.RECEIVER}
            type="text"
            id="receiver"
            value={formData.receiver}
            onChange={handleChange}
            onBlur={() => handleBlur('receiver')}
            placeholder="Nome completo"
            hasError={shouldShowError('receiver') && getFieldError('receiver')}
            required
          />
          <Input
            label={MESSAGES.ADDRESS}
            type="text"
            id="address.description"
            value={formData.address.description}
            onChange={handleChange}
            onBlur={() => handleBlur('address.description')}
            placeholder="Rua, Avenida, etc."
            hasError={shouldShowError('address.description') && getFieldError('address.description')}
            required
          />
          <Input
            label={MESSAGES.CITY}
            type="text"
            id="address.city"
            value={formData.address.city}
            onChange={handleChange}
            onBlur={() => handleBlur('address.city')}
            placeholder="Cidade"
            hasError={shouldShowError('address.city') && getFieldError('address.city')}
            required
          />
          <Input
            label={MESSAGES.ZIP_CODE}
            type="number"
            id="address.zipCode"
            value={formData.address.zipCode || ''}
            onChange={handleChange}
            onBlur={() => handleBlur('address.zipCode')}
            placeholder="12345678"
            min="10000000"
            max="99999999"
            hasError={shouldShowError('address.zipCode') && getFieldError('address.zipCode')}
            required
          />
          <Input
            label={MESSAGES.NUMBER}
            type="number"
            id="address.number"
            value={formData.address.number || ''}
            onChange={handleChange}
            onBlur={() => handleBlur('address.number')}
            placeholder="123"
            min="1"
            hasError={shouldShowError('address.number') && getFieldError('address.number')}
            required
          />
          <Input
            label={MESSAGES.COMPLEMENT}
            type="text"
            id="address.complement"
            value={formData.address.complement}
            onChange={handleChange}
            onBlur={() => handleBlur('address.complement')}
            placeholder="Apto, bloco, etc. (opcional)"
          />
          <S.Button type="submit" disabled={validationErrors.length > 0}>{MESSAGES.CONTINUE_TO_PAYMENT}</S.Button>
          <S.Button type="button" onClick={onBack}>{MESSAGES.BACK_TO_CART}</S.Button>
        </S.FormDelivery>
      </S.DeliveryContainer>
    )
}

export default Delivery