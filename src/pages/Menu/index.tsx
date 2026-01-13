import { useParams } from "react-router-dom"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import ProductsList from "../../components/ProductsList"
import RestaurantBanner from "../../components/RestaurantBanner"
import Cart from "../../components/Cart"
import { useGetRestaurantesQuery } from "../../services/api"

const Menu = () => {
  const { id } = useParams<{ id: string }>()
  const { data: restaurantes, isLoading, isError } = useGetRestaurantesQuery()

  console.log("API retornou:", restaurantes)

  if (isLoading) return <p>Carregando...</p>
  if (isError) return <p>Erro ao carregar dados.</p>
  if (!restaurantes) return null

  const restaurante = restaurantes.find(
    (r) => String(r.id) === String(id)
  )

  if (!restaurante) return <p>Restaurante não encontrado</p>

  return (
    <>
      <Header page="menu" text="0 produtos no carrinho" button={true} />
      <RestaurantBanner menu={restaurante} />
      <ProductsList cardMenu={restaurante.cardapio || []} />
      <Footer />
      <Cart />
    </>
  )
}

export default Menu
