import { useState } from 'react'
import fechar from '../../assets/images/fechar.png'
import {
  ProductsContainer,
  ProductCard,
  MenuTitle,
  MenuDescription,
  ButtonAddCart,
  AddCartButton,
  CloseButton,
  BannerProduct,
  ModalContainer,
  ModalContent,
  ModalDescription,
  ModalTitle
} from './styles'
import { Product } from '../../types'
import { getDescription } from '../Restaurants'

type CardProps = {
  cardMenu: Product[]
}

type Modal = {
  isVisible: boolean
  product?: Product
}

const ProductsList = ({ cardMenu }: CardProps) => {
  const [modal, setModal] = useState<Modal>({ isVisible: false })

  const closeModal = () => setModal({ isVisible: false })

  return (
    <div className="container">
      <ProductsContainer>
        {cardMenu.map((item) => (
          <ProductCard key={item.id}>
            <img src={item.foto} alt={item.nome} />
            <MenuTitle>{item.nome}</MenuTitle>
            <MenuDescription>{getDescription(item.descricao)}</MenuDescription>
            <ButtonAddCart
              onClick={() => setModal({ isVisible: true, product: item })}
            >
              Adicionar ao carrinho
            </ButtonAddCart>
          </ProductCard>
        ))}

        {modal.isVisible && modal.product && (
          <ModalContainer className="visible" onClick={closeModal}>
            <ModalContent onClick={(e: { stopPropagation: () => any }) => e.stopPropagation()}>
              <BannerProduct
                src={modal.product.foto}
                alt={modal.product.nome}
              />
              <div>
                <ModalTitle>{modal.product.nome}</ModalTitle>
                <ModalDescription>
                  {modal.product.descricao}<br/><br/><br/><br/>
                  Serve de: {modal.product.porcao}
                </ModalDescription>
                <AddCartButton>
                  Adicionar ao carrinho - R${' '}
                  {modal.product.preco.toFixed(2)}
                </AddCartButton>
              </div>
              <CloseButton src={fechar} onClick={closeModal} />
            </ModalContent>
          </ModalContainer>
        )}
      </ProductsContainer>
    </div>
  )
}

export default ProductsList
