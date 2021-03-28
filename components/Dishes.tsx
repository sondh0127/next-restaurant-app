import { Dish, useDishes } from '@/hooks/useDishes'
import {
	ActiveTab,
	useHeaderMenu,
	useCategory,
	CategoryKeys,
	useCartModal,
	useDish,
} from '@/hooks/useMenu'
import { Icon } from '@iconify/react-with-api'
import { styled, tw } from '@twind/react'
import { useState, Fragment } from 'react'
import { motion } from 'framer-motion'
import ReactModal from 'react-modal'
import { DishItem } from '@/lib/DishItem'
import { AddToCardModal } from '@/lib/AddToCardModal'

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
	const activeCategoryTab = useCategory((state) => state.activeCategoryTab)
	const setActiveCategoryTab = useCategory(
		(state) => state.setActiveCategoryTab,
	)

	const isOpen = useCartModal((state) => state.isOpen)
	const setIsOpen = useCartModal((state) => state.setIsOpen)

	const tabsKeys = Object.keys(tabs) as CategoryKeys[]

	if (isLoading) return <div>Loading</div>

	return (
		<div className={tw`relative`}>
			<img
				className={tw`h-60 object-cover w-full object-center`}
				src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
				alt="Restaurent Image"
			/>
			<div
				className={tw`flex justify-between items-center flex-col xl:flex-row`}
			>
				<h2
					className={tw`text-2xl sm:text-5xl font-black tracking-wide text-center`}
				>
					Categories
				</h2>
				<div
					className={tw`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`}
				>
					{tabsKeys.map((tabName, index) => (
						<TabControl
							key={index}
							active={activeCategoryTab === tabName}
							onClick={() => setActiveCategoryTab(tabName)}
						>
							{tabName}
						</TabControl>
					))}
				</div>
			</div>

			<div>
				<ul className={tw`flex`}>
					{data?.map((dish) => (
						<DishItem dish={dish} key={dish._id} />
					))}
				</ul>
			</div>

			{/* {dishCount <= 90 && (
				<button
					onClick={() => setDishCount(dishCount + 10)}
					disabled={isFetching}
				>
					{isFetching ? 'Loading...' : 'Show More'}
				</button>
			)} */}
			<AddToCardModal isOpen={isOpen} closeModal={() => setIsOpen(false)} />
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

const getRandomCards = () => {
	const cards = [
		{
			imageSrc:
				'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
			title: 'Chicken Chilled',
			content: 'Chicken Main Course',
			price: '$5.99',
			rating: '5.0',
			reviews: '87',
			url: '#',
		},
		{
			imageSrc:
				'https://images.unsplash.com/photo-1582254465498-6bc70419b607?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
			title: 'Samsa Beef',
			content: 'Fried Mexican Beef',
			price: '$3.99',
			rating: '4.5',
			reviews: '34',
			url: '#',
		},
		{
			imageSrc:
				'https://images.unsplash.com/photo-1565310022184-f23a884f29da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
			title: 'Carnet Nachos',
			content: 'Chilli Crispy Nachos',
			price: '$3.99',
			rating: '3.9',
			reviews: '26',
			url: '#',
		},
		{
			imageSrc:
				'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
			title: 'Guacamole Mex',
			content: 'Mexican Chilli',
			price: '$3.99',
			rating: '4.2',
			reviews: '95',
			url: '#',
		},
		{
			imageSrc:
				'https://images.unsplash.com/photo-1550461716-dbf266b2a8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
			title: 'Chillie Cake',
			content: 'Deepfried Chicken',
			price: '$2.99',
			rating: '5.0',
			reviews: '61',
			url: '#',
		},
		{
			imageSrc:
				'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327??ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
			title: 'Nelli',
			content: 'Hamburger & Fries',
			price: '$7.99',
			rating: '4.9',
			reviews: '89',
			url: '#',
		},
		{
			imageSrc:
				'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
			title: 'Jalapeno Poppers',
			content: 'Crispy Soyabeans',
			price: '$8.99',
			rating: '4.6',
			reviews: '12',
			url: '#',
		},
		{
			imageSrc:
				'https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
			title: 'Cajun Chicken',
			content: 'Roasted Chicken & Egg',
			price: '$7.99',
			rating: '4.2',
			reviews: '19',
			url: '#',
		},
	]

	// Shuffle array
	return cards.sort(() => Math.random() - 0.5)
}

const tabs: Record<CategoryKeys, any> = {
	Starters: [
		{
			imageSrc:
				'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
			title: 'Veg Mixer',
			content: 'Tomato Salad & Carrot',
			price: '$5.99',
			rating: '5.0',
			reviews: '87',
			url: '#',
		},
		{
			imageSrc:
				'https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
			title: 'Macaroni',
			content: 'Cheese Pizza',
			price: '$2.99',
			rating: '4.8',
			reviews: '32',
			url: '#',
		},
		{
			imageSrc:
				'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327??ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
			title: 'Nelli',
			content: 'Hamburger & Fries',
			price: '$7.99',
			rating: '4.9',
			reviews: '89',
			url: '#',
		},
		{
			imageSrc:
				'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
			title: 'Jalapeno Poppers',
			content: 'Crispy Soyabeans',
			price: '$8.99',
			rating: '4.6',
			reviews: '12',
			url: '#',
		},
		{
			imageSrc:
				'https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
			title: 'Cajun Chicken',
			content: 'Roasted Chicken & Egg',
			price: '$7.99',
			rating: '4.2',
			reviews: '19',
			url: '#',
		},
		{
			imageSrc:
				'https://images.unsplash.com/photo-1550461716-dbf266b2a8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
			title: 'Chillie Cake',
			content: 'Deepfried Chicken',
			price: '$2.99',
			rating: '5.0',
			reviews: '61',
			url: '#',
		},
		{
			imageSrc:
				'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
			title: 'Guacamole Mex',
			content: 'Mexican Chilli',
			price: '$3.99',
			rating: '4.2',
			reviews: '95',
			url: '#',
		},
		{
			imageSrc:
				'https://images.unsplash.com/photo-1565310022184-f23a884f29da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
			title: 'Carnet Nachos',
			content: 'Chilli Crispy Nachos',
			price: '$3.99',
			rating: '3.9',
			reviews: '26',
			url: '#',
		},
	],
	Main: getRandomCards(),
	Soup: getRandomCards(),
	Desserts: getRandomCards(),
}

const TabControl = styled('div', {
	base: `cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center hover:(bg-gray-300 text-gray-700)`,
	variants: {
		active: {
			true: `bg-primary-500! text-gray-100!`,
		},
	},
})

const Dishes: React.FC<{}> = () => {
	const activeTab = useHeaderMenu((state) => state.activeTab)

	const TabContent = TabContentMap[activeTab]

	return (
		<div className={tw`w-full h-full`}>
			<DishesHeader />

			<div id="order-menu">
				{/* refer tabcontent from TabCardGrid to make the motion*/}
				<TabContent />
			</div>
		</div>
	)
}

export default Dishes
