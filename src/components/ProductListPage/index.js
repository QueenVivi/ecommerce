import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllProducts } from "../../lib/client"
import formatPrice from "../../lib/formatPrice"

const ProductListPage = () => {
  const [ products, setProducts ] = useState(null)
  const [ category, setCategory ] = useState("")

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

  const filteredProducts = category 
    ? products.filter((product) => category === product.metadata.category)
    : products

  return (
    <section>
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="">All</option>
        <option value="crystal">Crystals</option>
        <option value="earring">Earrings</option>
        <option value="necklace">Necklaces</option>
      </select>
      {
        filteredProducts.length > 0
        ? (
          <ol className="grid grid-rows-3 gap-4" >
            {filteredProducts.map((product) => {
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
        ) : (
          <p>Sorry, no match</p>
        )
      }
    </section>
  )
}

export default ProductListPage
