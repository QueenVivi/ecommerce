import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllProducts } from "../../lib/client"
import formatPrice from "../../lib/formatPrice"

const ProductListPage = () => {
  const [ products, setProducts ] = useState(null)

  useEffect(() => {
    const fetchAllProducts = async () => {
      const products = await getAllProducts()
      setProducts(products)
    }

    fetchAllProducts()
  }, [])

  if (!products) {
    return (
      <article>
        Loading…
      </article>
    )
  }

  return (
    <ol className="grid grid-rows-3 gap-4" >
      {products.map((product) => {
        const { id, images, name, price, metadata } = product

        return (
          <li key={id}>
            <Link to={`/product/${id}`}>
              <h3>{name}</h3>
              <img alt={name} src={images[0]} />
              {formatPrice(price)}
            </Link>
          </li>
        )
      })}
    </ol>
  )
}

export default ProductListPage
