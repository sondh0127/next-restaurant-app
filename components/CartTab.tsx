import { useCart } from '@/hooks/useMenu'
import React from 'react'

export const CartTab: React.FC = (props) => {
	const orderDishes = useCart((state) => state.orderDishes)

	return <div>{JSON.stringify(orderDishes)}</div>
}
