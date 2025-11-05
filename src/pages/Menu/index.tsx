import Header from "../../components/Header"
import RestaurantBanner from "../../components/RestaurantBanner"
import BannerTrattoria from '../../assets/images/BannerTrattoria.png'
import ProductsList from "../../components/ProductsList"
import Footer from "../../components/Footer"

const Menu = () => {
  const restaurant =
    {
        image: BannerTrattoria,
        title: 'Italiana',
        restaurantName: 'La Dolce Vita Trattoria'
    }

  return (
    <>
      <Header page="menu" text="0 produtos no carrinho" button={true}/>
      <RestaurantBanner 
        image={restaurant.image} 
        title={restaurant.title} 
        restaurantName={restaurant.restaurantName} 
      />
      <ProductsList />
      <Footer/>
    </>
  )
}

export default Menu