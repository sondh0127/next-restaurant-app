import create from 'zustand'

export type ActiveTab = 'Menu' | 'Info' | 'Cart'

type State = {
	activeTab: ActiveTab
	setActiveTab: (activeTab: ActiveTab) => void
}

export const useHeaderMenu = create<State>((set) => ({
	activeTab: 'Menu',
	setActiveTab: (activeTab: ActiveTab) => set({ activeTab }),
}))
