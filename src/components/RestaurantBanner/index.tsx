import { RestaurantsApi } from "../../types"
import { Hero } from "./styles"


type BannerHeader = {
  menu: RestaurantsApi   
}

const RestaurantBanner = ({ menu }: BannerHeader) => {

  if (!menu) return null // caso o array esteja vazio

  return (
    <Hero>
      <img src={menu.capa} alt={`Imagem do restaurante ${menu.titulo}`} />
      <div className="container">
        <h1>{menu.tipo}</h1>
        <h2>{menu.titulo}</h2>
      </div>
    </Hero>
  )
}

export default RestaurantBanner