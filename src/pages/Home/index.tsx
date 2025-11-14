import { useEffect, useState } from "react"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import RestaurantsList from "../../components/RestaurantsList"
import { RestaurantsApi } from "../../types"


const Home = () => {
    const [restaurantState, setRestaurantState] = useState<RestaurantsApi[]>([])

    useEffect(() => {
        fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
        .then(res => res.json())
        .then(res => setRestaurantState(res))
    }, [])
    return(
    <>
        <Header page='home' text="Viva experiências gastronômicas no conforto da sua casa" />
        <RestaurantsList restaurant={restaurantState} />
        <Footer />
    </>
)
}

export default Home