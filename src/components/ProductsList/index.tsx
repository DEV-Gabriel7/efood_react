import Product from "../Product"
import { ProductsContainer } from "./styles"

const ProductsList = () => (
    <div className="container">
        <ProductsContainer>
            <Product />
        </ProductsContainer>
    </div>
)

export default ProductsList