import { Hero } from "./styles"

type Props = {
  image: string
  title: string
  restaurantName: string
}

const RestaurantBanner = ({ image, title, restaurantName }: Props) => (
  <Hero>
    <img src={image} alt={restaurantName} />
    <div className="container">
      <h1>{title}</h1>
      <h2>{restaurantName}</h2>
    </div>
  </Hero>
)

export default RestaurantBanner