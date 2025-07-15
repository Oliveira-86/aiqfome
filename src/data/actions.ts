import productsData from "@/data/data.json"
import { FoodItem, Restaurant, User } from "./types"

interface ProductsData {
  restaurants: Restaurant[]
  user: User
}

const typedProductsData = productsData as ProductsData

export const getUser = (): User => {
  return typedProductsData.user
}

export const getRestaurants = (): Restaurant[] => {
  return typedProductsData.restaurants
}

export const getRestaurantByName = (name: string): Restaurant | undefined => {
  const restaurantNameDecoded = decodeURIComponent(name)

  return typedProductsData.restaurants.find(
    (restaurant) => restaurant.name === restaurantNameDecoded
  )
}

export const getFoodById = (restaurantName: string, foodId: string): FoodItem | undefined => {
  const restaurantNameDecoded = decodeURIComponent(restaurantName)

  return typedProductsData.restaurants
    .find((r) => r.name === restaurantNameDecoded)
    ?.food_list.flatMap((c) => c.items)
    .find((item) => item.id === foodId)
}

export const getDrinkById = (restaurantId: string, foodId: string): FoodItem | undefined => {
  return typedProductsData.restaurants
    .find((r) => r.id === restaurantId)
    ?.drink_list.flatMap((c) => c.items)
    .find((item) => item.id === foodId)
}
