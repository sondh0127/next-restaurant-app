import create from 'zustand'

export type ActiveTab = 'Menu' | 'Info' | 'Cart'

type HeaderMenuState = {
	activeTab: ActiveTab
	setActiveTab: (activeTab: ActiveTab) => void
}

export const useHeaderMenu = create<HeaderMenuState>((set) => ({
	activeTab: 'Menu',
	setActiveTab: (activeTab: ActiveTab) => set({ activeTab }),
}))

/*  */

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

/*  */

type CartModalState = {
	isOpen: boolean
	setIsOpen: (isOpen: boolean) => void
}

export const useCartModal = create<CartModalState>((set) => ({
	isOpen: false,
	setIsOpen: (isOpen: boolean) => set({ isOpen }),
}))
