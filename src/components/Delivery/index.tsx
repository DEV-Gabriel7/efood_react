import Modal from "../Modal"
import Input from "../Input"
import { DeliveryData } from "../../types"
import { MESSAGES } from "../../types"
import { useForm } from "../../hooks"
import { useValidation } from "../../hooks"
import { validateDelivery } from "../../types"
import ErrorMessage from "../ErrorMessage"
import * as S from "./styles"

type DeliveryProps = {
  onNext: (data: DeliveryData) => void
  onBack: () => void
  errors?: string[]
}

const Delivery = ({ onNext, onBack, errors = [] }: DeliveryProps) => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validationErrors.length === 0) {
      onNext(formData)
    }
  }

  return (
    <Modal isOpen={true}>
      <S.DeliveryContainer>
        <h4>{MESSAGES.DELIVERY_TITLE}</h4>
        <ErrorMessage errors={validationErrors} />
        <S.FormDelivery onSubmit={handleSubmit}>
          <Input
            label={MESSAGES.RECEIVER}
            type="text"
            id="receiver"
            value={formData.receiver}
            onChange={handleChange}
            placeholder="Nome completo"
            required
          />
          <Input
            label={MESSAGES.ADDRESS}
            type="text"
            id="address.description"
            value={formData.address.description}
            onChange={handleChange}
            placeholder="Rua, Avenida, etc."
            required
          />
          <Input
            label={MESSAGES.CITY}
            type="text"
            id="address.city"
            value={formData.address.city}
            onChange={handleChange}
            placeholder="Cidade"
            required
          />
          <div>
            <Input
              label={MESSAGES.ZIP_CODE}
              type="number"
              id="address.zipCode"
              value={formData.address.zipCode || ''}
              onChange={handleChange}
              placeholder="12345678"
              min="10000000"
              max="99999999"
              required
            />
            <Input
              label={MESSAGES.NUMBER}
              type="number"
              id="address.number"
              value={formData.address.number || ''}
              onChange={handleChange}
              placeholder="123"
              min="1"
              required
            />
          </div>
          <Input
            label={MESSAGES.COMPLEMENT}
            type="text"
            id="address.complement"
            value={formData.address.complement}
            onChange={handleChange}
            placeholder="Apto, bloco, etc. (opcional)"
          />
          <S.Button type="submit" disabled={validationErrors.length > 0}>{MESSAGES.CONTINUE_TO_PAYMENT}</S.Button>
          <S.Button type="button" onClick={onBack}>{MESSAGES.BACK_TO_CART}</S.Button>
        </S.FormDelivery>
      </S.DeliveryContainer>
    </Modal>
  )
}

export default Delivery