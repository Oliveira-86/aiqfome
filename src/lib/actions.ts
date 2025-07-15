import productsData from "./data.json"
import { Restaurant, User } from "./types"

interface ProductsData {
  restaurants: Restaurant[]
  user: User
}

const typedProductsData = productsData as ProductsData

export function getUser(): User {
  return typedProductsData.user
}

export function getRestaurants(): Restaurant[] {
  return typedProductsData.restaurants
}