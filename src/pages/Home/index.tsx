import Footer from "../../components/Footer"
import Header from "../../components/Header"
import RestaurantsList from "../../components/RestaurantsList"
const Home = () => {
    
    return(
    <>
        <Header page='home' text="Viva experiências gastronômicas no conforto da sua casa" />
        <RestaurantsList />
        <Footer />
    </>
)
}

export default Home