import Restaurants from "../Restaurants"
import { RestaurantsContainer } from "./styles"

import { RestaurantsApi } from "../../pages/Home"
  

export type restaurants = {
    restaurant: RestaurantsApi[]
}

const RestaurantsList = ({ restaurant }: restaurants) => (
    <RestaurantsContainer>
        {restaurant.map((restaurant) => (
            <Restaurants 
                id={restaurant.id}
                capa={restaurant.capa}
                destacado={restaurant.destacado}
                key={restaurant.id}
                titulo={restaurant.titulo}
                tipo={restaurant.tipo}
                avaliacao={restaurant.avaliacao}
                descricao={restaurant.descricao} 
                cardapio={[]}            
            />
        ))}
        
    </RestaurantsContainer>
)

export default RestaurantsList