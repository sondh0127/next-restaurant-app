import create from 'zustand'
import { Dish, DishOption } from './useDishes'
import produce from 'immer'

/* useHeaderMenu */

export type ActiveTab = 'Menu' | 'Info' | 'Cart'

type HeaderMenuState = {
	activeTab: ActiveTab
	setActiveTab: (activeTab: ActiveTab) => void
}

export const useHeaderMenu = create<HeaderMenuState>((set) => ({
	activeTab: 'Menu',
	setActiveTab: (activeTab: ActiveTab) => set({ activeTab }),
}))

/* useCategory */

export type CategoryKeys = 'Starters' | 'Main' | 'Soup' | 'Desserts'

type CategoryState = {
	activeCategoryTab: CategoryKeys
	setActiveCategoryTab: (activeTab: CategoryKeys) => void
}

export const useCategory = create<CategoryState>((set) => ({
	activeCategoryTab: 'Starters',
	setActiveCategoryTab: (activeCategoryTab: CategoryKeys) =>
		set({ activeCategoryTab }),
}))

/* useCartModal */
type CartModalState = {
	isOpen: boolean
	setIsOpen: (isOpen: boolean) => void
}

export const useCartModal = create<CartModalState>((set) => ({
	isOpen: false,
	setIsOpen: (isOpen: boolean) => set({ isOpen }),
}))

/* useDish */

type DishState = {
	selectedDish?: Dish
	setSelectedDish: (selectedDish?: Dish) => void
}

export const useDish = create<DishState>((set) => ({
	selectedDish: undefined,
	setSelectedDish: (selectedDish?: Dish) => set({ selectedDish }),
}))

/* useCart */

export interface OrderForm {
	options: DishOption[]
	instruction: string
	quantity: number
}

export interface OrderDish extends OrderForm {
	dish: Dish
}

type CartState = {
	orderDishes: OrderDish[]
	addOrder: (selectedDish: OrderDish) => void
}

export const useCart = create<CartState>((set) => ({
	orderDishes: [],
	addOrder: (selectedDish: OrderDish) => {
		set((state) =>
			produce(state, (draftState) => {
				draftState.orderDishes.push(selectedDish)
			}),
		)
	},
}))
