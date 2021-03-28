import axios from 'axios'
import { useQuery } from 'react-query'

export type Category = 'salate' & string & {}
export type DishOption = { title: string; price: number }
export type Picture = string

export interface Dish {
	_id: string
	name: string
	categories: Category[]
	price: number
	description: string
	options: DishOption[]
	pictures: Picture[]
	created_at: string
	updated_at: string
}

export const DOMAIN = 'https://vg-reor.herokuapp.com'

const fetchDishes = async (limit = 10) => {
	const { data } = await axios.get<{ dishes: Dish[] }>(
		`${DOMAIN}/api/v1/dishes`,
	)
	return data.dishes
}

const useDishes = (limit: number) => {
	return useQuery(['posts', limit], () => fetchDishes(limit))
}

export { useDishes, fetchDishes }
