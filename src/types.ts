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
