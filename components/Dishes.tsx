import { useDishes } from '@/hooks/useDishes'
import { useState } from 'react'
import { tw, styled } from '@twind/react'
import { Icon } from '@iconify/react-with-api'
import { useHeaderMenu, ActiveTab } from '@/hooks/useHeaderMenu'

const HeaderButton = styled('button', {
	base: `p-6 text-2xl focus:outline-none`,
	variants: {
		active: {
			true: `bg-gray-200`,
		},
	},
})

const HeaderButtonIconMap = {
	Menu: 'whh:restaurantmenu',
	Info: 'whh:infosign',
	Cart: 'whh:shoppingcartalt',
}

const HeaderButtonRender = ({ type }: { type: ActiveTab }) => {
	const activeTab = useHeaderMenu((state) => state.activeTab)
	const setActiveTab = useHeaderMenu((state) => state.setActiveTab)
	return (
		<HeaderButton
			active={activeTab === type}
			onClick={() => setActiveTab(type)}
		>
			<Icon icon={HeaderButtonIconMap[type]} />
		</HeaderButton>
	)
}

const DishesHeader = () => {
	return (
		<div
			className={tw`flex text-gray-500 shadow-md h-16 border-b-1 border-gray-500`}
		>
			<div className={tw`flex-1 flex items-center mx-4`}>
				<span className={tw`text-lg font-semibold`}>Restaurant Name</span>
			</div>
			<div className={tw`flex divide-x divide-gray-500 border-opacity-50`}>
				<span></span>
				<HeaderButtonRender type="Menu" />
				<HeaderButtonRender type="Info" />
				<HeaderButtonRender type="Cart" />
			</div>
		</div>
	)
}

const MenuTab = () => {
	const [dishCount, setDishCount] = useState(10)
	const { data, isLoading, isFetching } = useDishes(dishCount)
	if (isLoading) return <div>Loading</div>

	return (
		<div>
			<ul>
				{data?.map((dish, index) => (
					<li key={dish._id}>
						<div>
							<span>{index + 1}. </span>
							<a href="#">{dish.name}</a>
						</div>
					</li>
				))}
			</ul>
			{dishCount <= 90 && (
				<button
					onClick={() => setDishCount(dishCount + 10)}
					disabled={isFetching}
				>
					{isFetching ? 'Loading...' : 'Show More'}
				</button>
			)}
		</div>
	)
}

const InfoTab = () => {
	return <div>InfoTab</div>
}

const CartTab = () => {
	return <div>CartTab</div>
}

const TabContentMap = {
	Menu: MenuTab,
	Info: InfoTab,
	Cart: CartTab,
}

const Dishes: React.FC<{}> = () => {
	const activeTab = useHeaderMenu((state) => state.activeTab)

	const TabContent = TabContentMap[activeTab]

	return (
		<div className={tw`w-full h-full`}>
			<DishesHeader />
			<TabContent />
		</div>
	)
}

export default Dishes
