import Restaurants from "../Restaurants"
import { RestaurantsContainer } from "./styles"
import Restaurant from "../../models/Restaurants"

import Japanese from '../../assets/images/sushi.png'
import Italian from '../../assets/images/trattoria.png'

const restaurants: Restaurant[] = [
    {
        id: 1,
        image: Japanese,
        destach: true,
        name: 'Hioki Sushi',
        category: 'Japonesa',
        assessment: '4,9',
        description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
    },
    {
        id: 2,
        destach: false,
        image: Italian,
        name: 'La Doce Vita Trattoria',
        category: 'Italiana',
        assessment: '4.6',
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente a Itália sem sair do lar com nosso delivery!'
    },
    {
        id: 2,
        destach: false,
        image: Italian,
        name: 'La Doce Vita Trattoria',
        category: 'Italiana',
        assessment: '4.6',
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente a Itália sem sair do lar com nosso delivery!'
    },
    {
        id: 2,
        destach: false,
        image: Italian,
        name: 'La Doce Vita Trattoria',
        category: 'Italiana',
        assessment: '4.6',
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente a Itália sem sair do lar com nosso delivery!'
    },
    {
        id: 2,
        destach: false,
        image: Italian,
        name: 'La Doce Vita Trattoria',
        category: 'Italiana',
        assessment: '4.6',
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente a Itália sem sair do lar com nosso delivery!'
    },
    {
        id: 2,
        destach: false,
        image: Italian,
        name: 'La Doce Vita Trattoria',
        category: 'Italiana',
        assessment: '4.6',
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente a Itália sem sair do lar com nosso delivery!'
    },
]  

const RestaurantsList = () => (
    <RestaurantsContainer>
        {restaurants.map((restaurant) => (
            <Restaurants 
                image={restaurant.image}
                destach={restaurant.destach}
                key={restaurant.id}
                name={restaurant.name}
                category={restaurant.category}
                assessment={restaurant.assessment}
                description={restaurant.description}
            />
        ))}
        
    </RestaurantsContainer>
)

export default RestaurantsList