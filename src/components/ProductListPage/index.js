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
          <ol className="grid md:grid-cols-3 gap-6" >
            {filteredProducts.map((product) => {
              const { id, images, name, price, metadata } = product

              return (
                <li key={id}>
                  <Link to={`/product/${id}`}>
                    <header
                      aria-label={`Product image of ${name}`}
                      className="mb-2 pt-[100%] bg-cover bg-center"
                      role="img"
                      style={{ backgroundImage: `url(${images[0]})` }}
                    ></header>
                  </Link>
                  <h3 className="font-bold">
                    <Link to={`/product/${id}`}>{name}</Link>
                  </h3>
                  <p>{formatPrice(price)}</p>
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
