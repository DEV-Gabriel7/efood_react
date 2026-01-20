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

export type PaymentData = {
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

  // Validar nome do destinatário
  if (!data.receiver || !data.receiver.trim()) {
    errors.push('Nome do destinatário é obrigatório')
  } else if (data.receiver.trim().length < 3) {
    errors.push('Nome deve ter pelo menos 3 caracteres')
  }

  // Validar endereço
  if (!data.address.description || !data.address.description.trim()) {
    errors.push('Endereço é obrigatório')
  }

  // Validar cidade
  if (!data.address.city || !data.address.city.trim()) {
    errors.push('Cidade é obrigatório')
  }

  // Validar CEP
  if (!data.address.zipCode) {
    errors.push('CEP é obrigatório')
  } else if (data.address.zipCode.toString().replace(/\D/g, '').length !== 8) {
    errors.push('CEP deve ter 8 dígitos')
  }

  // Validar número
  if (!data.address.number || data.address.number <= 0) {
    errors.push('Número é obrigatório')
  }

  return errors
}

export const validatePayment = (data: PaymentData): string[] => {
  const errors: string[] = []
  const currentYear = new Date().getFullYear()
  const currentMonth = new Date().getMonth() + 1

  // Validar nome no cartão
  if (!data.card.name || !data.card.name.trim()) {
    errors.push('Nome no cartão é obrigatório')
  } else if (data.card.name.trim().length < 3) {
    errors.push('Nome no cartão deve ter pelo menos 3 caracteres')
  } else if (data.card.name.trim().split(' ').length < 2) {
    errors.push('Nome no cartão deve ter nome e sobrenome')
  }

  // Validar número do cartão
  if (!data.card.number) {
    errors.push('Número do cartão é obrigatório')
  } else {
    const cardNumber = data.card.number.toString().replace(/\D/g, '')
    if (cardNumber.length !== 16) {
      errors.push('Número do cartão deve ter 16 dígitos')
    }
  }

  // Validar CVV
  if (!data.card.code) {
    errors.push('CVV é obrigatório')
  } else {
    const cvv = data.card.code.toString().replace(/\D/g, '')
    if (cvv.length < 3 || cvv.length > 4) {
      errors.push('CVV deve ter 3 ou 4 dígitos')
    }
  }

  // Validar mês de vencimento
  if (!data.card.expires.month) {
    errors.push('Mês de vencimento é obrigatório')
  } else if (data.card.expires.month < 1 || data.card.expires.month > 12) {
    errors.push('Mês de vencimento deve estar entre 01 e 12')
  }

  // Validar ano de vencimento
  if (!data.card.expires.year) {
    errors.push('Ano de vencimento é obrigatório')
  } else if (data.card.expires.year < currentYear) {
    errors.push('Cartão expirado')
  } else if (data.card.expires.year === currentYear && data.card.expires.month < currentMonth) {
    errors.push('Cartão expirado')
  }

  return errors
}
