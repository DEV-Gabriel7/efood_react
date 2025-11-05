import BannerProduct from '../../assets/images/BannerProduct.png'
import { ProductCard, MenuTitle, MenuDescription, ButtonAddCart } from './styles'

import ProductItem from '../../models/Products'

const menuCard: ProductItem[] = [
    {
        id: 1,
        image: BannerProduct,
        title: 'Pizza Marguerita',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
        id: 2,
        image: BannerProduct,
        title: 'Pizza Marguerita',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
        id: 3,
        image: BannerProduct,
        title: 'Pizza Marguerita',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
        id: 4,
        image: BannerProduct,
        title: 'Pizza Marguerita',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
        id: 5,
        image: BannerProduct,
        title: 'Pizza Marguerita',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
        id: 6,
        image: BannerProduct,
        title: 'Pizza Marguerita',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    }
]

const Product = () => (
    <>
        {menuCard.map((item) => (
            <ProductCard key={item.id}>
                <img src={item.image} alt="" />
                <MenuTitle>{item.title}</MenuTitle>
                <MenuDescription>{item.description}</MenuDescription>
                <ButtonAddCart>Adicionar ao carrinho</ButtonAddCart>
            </ProductCard>
        ))}
    </>
)

export default Product