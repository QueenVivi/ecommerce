import Stripe from 'stripe'

const stripe = new Stripe(process.env.REACT_APP_API_KEY)

const getPrice = async (price_id) => {
  const priceData = await stripe.prices.retrieve(price_id)
  return priceData.unit_amount / 100
}

export const getAllProducts = async () => {
  const { data: productsData } = await stripe.products.list({ limit: 12 })
  
  const products = await Promise.all(productsData.map(async (productData) => {
    const {
      id,
      name,
      description,
      default_price,
      images,
      metadata,
    } = productData

    const price = await getPrice(default_price)

    return {
      id,
      name,
      price,
      description,
      images,
      metadata,
    }
  }))

  return products
}

export const getProductById = async (productId) => {
  const { 
    id,
    name,
    description,
    default_price,
    images,
    metadata,
  } = await stripe.products.retrieve(productId)

  const price = await getPrice(default_price)

  return {
    id,
    name,
    description,
    price,
    images,
    metadata
  }
}
