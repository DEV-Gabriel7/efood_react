import { JSX } from "react/jsx-runtime"

export type Product = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type RestaurantsApi = {
  id?: number
  titulo: string
  destacado?: boolean
  tipo: string
  avaliacao?: number
  descricao: string
  capa: string
  cardapio: Product[]
}

export type Order = {
  products: Array<{
    id: number
    price: number
  }>
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: number
      number: number
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: number
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

export type OrderResponse = {
  id: number
  products: Product[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: number
      number: number
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: number
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
  total: number
}

export type DeliveryData = {
  receiver: string
  address: {
    description: string
    city: string
    zipCode: number
    number: number
    complement: string
  }
}

export const MESSAGES = {
  CHECKOUT_TITLE: 'Checkout',
  CHECKOUT_DESCRIPTION: 'Revise seus produtos e continue para o pagamento',
  CONTINUE_TO_DELIVERY: 'Continuar para entrega',
  DELIVERY_TITLE: 'ENTREGA',
  PAYMENT_TITLE: 'Pagamento - Valor a pagar R$ ',
  CONTINUE_TO_PAYMENT: 'Continuar com o pagamento',
  BACK_TO_CART: 'Voltar para carrinho',
  FINALIZE_PAYMENT: 'Finalizar pagamento',
  BACK_TO_DELIVERY: 'Voltar para página de endereço',
  ORDER_SUCCESS: 'Pedido realizado - ',
  ORDER_SUCCESS_MESSAGE: 'Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.',
  DELIVERY_DETAILS: 'Dados da entrega',
  PAYMENT_DETAILS: 'Pagamento',
  PRODUCTS: 'Produtos',
  TOTAL: 'Total: R$ ',
  RECEIVER: 'Quem irá receber',
  ADDRESS: 'Endereço',
  CITY: 'Cidade',
  ZIP_CODE: 'CEP',
  NUMBER: 'Número',
  COMPLEMENT: 'Complemento (opcional)',
  CARD_NAME: 'Nome no cartão',
  CARD_NUMBER: 'Número do cartão',
  CVV: 'CVV',
  EXPIRY_MONTH: 'Mês de vencimento',
  EXPIRY_YEAR: 'Ano de vencimento',
  CART_ITEMS: 'produtos no carrinho',
  ORDER_ERROR: 'Erro ao processar o pedido. Tente novamente.'
} as const

export const validateDelivery = (data: DeliveryData): string[] => {
  const errors: string[] = []

  if (!data.receiver.trim()) errors.push('Nome do destinatário é obrigatório')
  if (!data.address.description.trim()) errors.push('Endereço é obrigatório')
  if (!data.address.city.trim()) errors.push('Cidade é obrigatório')
  if (!data.address.zipCode || data.address.zipCode.toString().length !== 8) errors.push('CEP deve ter 8 dígitos')
  if (!data.address.number || data.address.number <= 0) errors.push('Número é obrigatório')

  return errors
}

export const validatePayment = (data: PaymentData): string[] => {
  const errors: string[] = []
  const currentYear = new Date().getFullYear()
  const currentMonth = new Date().getMonth() + 1

  if (!data.card.name.trim()) {
    errors.push('Nome no cartão é obrigatório')
  } else if (data.card.name.trim().split(' ').length < 2) {
    errors.push('Nome no cartão deve ter pelo menos nome e sobrenome')
  }

  if (!data.card.number || data.card.number.toString().length !== 16) {
    errors.push('Número do cartão deve ter exatamente 16 dígitos')
  }

  if (!data.card.code || data.card.code < 100 || data.card.code > 9999) {
    errors.push('CVV deve ter 3 ou 4 dígitos')
  }

  if (!data.card.expires.month || data.card.expires.month < 1 || data.card.expires.month > 12) {
    errors.push('Mês de vencimento inválido')
  }

  if (!data.card.expires.year || data.card.expires.year < currentYear ||
      (data.card.expires.year === currentYear && data.card.expires.month < currentMonth)) {
    errors.push('Data de vencimento deve ser futura')
  }

  return errors
}
