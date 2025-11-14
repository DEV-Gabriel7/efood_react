import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import ProductsList from "../../components/ProductsList"
import RestaurantBanner from "../../components/RestaurantBanner"
import { RestaurantsApi } from "../../types"

const Menu = () => {
  const { id } = useParams<{ id: string }>()
  const [menu, setMenu] = useState<RestaurantsApi[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://api-ebac.vercel.app/api/efood/restaurantes")
      .then((res) => res.json())
      .then((res) => {
        setMenu(res)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Carregando...</p>

  const restaurante = menu.find((r) => String(r.id) === String(id))

  if (!restaurante) return <p>Restaurante não encontrado</p>

  return (
    <>
      <Header page="menu" text="0 produtos no carrinho" button={true} />
      <RestaurantBanner menu={[restaurante]} />
      <ProductsList cardMenu={restaurante.cardapio} />
      <Footer />
    </>
  )
}

export default Menu
