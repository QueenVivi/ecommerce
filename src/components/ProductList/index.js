import Stripe from "stripe"
import formatPrice from "../../lib/formatPrice"

const stripe = new Stripe(process.env.REACT_APP_API_KEY)

const { data: productsData } = await stripe.products.list({
  limit: 10,
})

const { data: pricesData } = await stripe.prices.list({
  limit: 10,
})

const products = productsData.map((productData) => {
  const {
    id,
    name,
    description,
    default_price,
    images,
    metadata,
  } = productData

  const { unit_amount } = pricesData.find((priceData) => priceData.id === default_price)

  const price = unit_amount / 100

  return {
    id,
    name,
    price,
    description,
    images,
    metadata,
  }
})

const ProductList = () => {
  return (
    <ol>
      {products.map((product) => {
        const { id, images, name, price, metadata } = product
        return (
          <li key={id}>
            <h3>{name}</h3>
            <img alt={name} src={images[0]} />
            {formatPrice(price)}
          </li>
        )
      })}
    </ol>
  )
}

export default ProductList 
