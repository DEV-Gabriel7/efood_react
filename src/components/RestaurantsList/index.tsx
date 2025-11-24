import { useGetRestaurantesQuery } from "../../services/api"
import Restaurants from "../Restaurants"
import { RestaurantsContainer } from "./styles"

const RestaurantsList = () => {
    const { data: restaurants, isLoading } = useGetRestaurantesQuery()

    if (!restaurants) return null 
    return (
    <RestaurantsContainer>
        {restaurants.map((restaurant) => (
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
}
    

export default RestaurantsList