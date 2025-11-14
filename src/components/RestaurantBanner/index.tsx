import { Hero } from "./styles"
import { RestaurantsApi } from "../../pages/Home"


type BannerHeader = {
  menu: RestaurantsApi[]
}

const RestaurantBanner = ({ menu }: BannerHeader) => {
  // Pega o primeiro restaurante do array
  const restaurante = menu[0]

  if (!restaurante) return null // caso o array esteja vazio

  return (
    <Hero>
      <img src={restaurante.capa} alt={`Imagem do restaurante ${restaurante.titulo}`} />
      <div className="container">
        <h1>{restaurante.tipo}</h1>
        <h2>{restaurante.titulo}</h2>
      </div>
    </Hero>
  )
}

export default RestaurantBanner