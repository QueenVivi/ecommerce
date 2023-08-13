import { Link } from "react-router-dom"
import { getAllProducts } from "../../lib/client"
import formatPrice from "../../lib/formatPrice"

const products = getAllProducts()

const ProductListPage = () => (
  <ol>
    {products.map((product) => {
      const { id, images, name, price, metadata } = product
      return (
        <li key={id}>
          <Link to={id}>
            <h3>{name}</h3>
            <img alt={name} src={images[0]} />
            {formatPrice(price)}
          </Link>
        </li>
      )
    })}
  </ol>
)

export default ProductListPage
