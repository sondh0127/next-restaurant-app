import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { tw, styled } from '@twind/react'
import { Container, ContentWithPaddingXl } from '@/components/Layouts'
import { SectionHeading } from '@/components/Headings'
import { PrimaryButton as PrimaryButtonBase } from '@/components/Buttons'
// TODO: Import svg as component
// import StarIcon from "@/assets/images/star-icon.svg";
// import SvgDecoratorBlob1 from "@/assets/images/svg-decorator-blob-5.svg";
// import SvgDecoratorBlob2 from "@/assets/images/svg-decorator-blob-7.svg";

const StarIcon = (props: any) => {
	return (
		<svg viewBox="0 0 1792 1792" {...props}>
			<path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5T1385 1619q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5T365 1569q0-6 2-20l86-500L89 695q-25-27-25-48 0-37 56-46l502-73L847 73q19-41 49-41t49 41l225 455 502 73q56 9 56 46z" />
		</svg>
	)
}

const SvgDecoratorBlob1 = (props: any) => {
	return (
		<svg viewBox="0 0 600 600" {...props}>
			<g transform="translate(300,300)">
				<path
					d="M86.4,-125.7C108.9,-102.5,122,-73.2,149.6,-37.1C177.2,-0.9,219.4,42,223.6,86.1C227.8,130.3,194.2,175.6,150.6,200.7C107,225.9,53.5,231,5.2,223.8C-43.1,216.7,-86.2,197.3,-109.5,165.6C-132.8,133.8,-136.3,89.6,-138.8,52.1C-141.4,14.6,-143,-16.2,-147,-61.4C-151,-106.6,-157.5,-166.1,-133.4,-188.8C-109.3,-211.5,-54.7,-197.2,-11.4,-181.6C31.9,-166,63.9,-148.9,86.4,-125.7Z"
					fill="currentColor"
				/>
			</g>
		</svg>
	)
}

const SvgDecoratorBlob2 = (props: any) => {
	return (
		<svg viewBox="0 0 600 600" {...props}>
			<g transform="translate(300,300)">
				<path
					d="M103.9,-95.2C140.4,-67.4,179.7,-33.7,191.6,11.9C203.5,57.5,188,115,151.5,150.2C115,185.4,57.5,198.2,-5.4,203.6C-68.4,209,-136.7,207,-183.4,171.9C-230,136.7,-255,68.4,-233.5,21.6C-211.9,-25.2,-143.8,-50.4,-97.1,-78.3C-50.4,-106.1,-25.2,-136.6,4.2,-140.8C33.7,-145,67.4,-123.1,103.9,-95.2Z"
					fill="currentColor"
				/>
			</g>
		</svg>
	)
}

const HeaderRow = styled('div', {
	base: `flex justify-between items-center flex-col xl:flex-row`,
})
const Header = styled(SectionHeading, { base: `` })
const TabsControl = styled('div', {
	base: `flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`,
})

const TabControl = styled('div', {
	base: `cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center hover:(bg-gray-300 text-gray-700)`,
	variants: {
		active: {
			true: `bg-primary-500! text-gray-100!`,
		},
	},
})
// ${props => css`background-image: url("${props.imageSrc}");`}
const TabContent = styled(motion.div, {
	base: `mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`,
})
const CardContainer = styled('div', {
	base: `mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`,
})
const Card = styled(motion.a, {
	base: `bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`,
})
const CardImageContainer = styled('div', {
	base: `h-56 xl:h-64 bg-center bg-cover relative rounded-t`,
})

const CardRatingContainer = styled('div', {
	base: `leading-none absolute inline-flex bg-gray-100 bottom-0 left-0 ml-4 mb-4 rounded-full px-5 py-2 items-end`,
})
const CardRating = styled('div', {
	base: `mr-1 text-sm font-bold flex items-end`,
})

const CardHoverOverlay = styled(motion.div, {
	base: `absolute inset-0 flex justify-center items-center bg-white bg-opacity-50`,
})

const CardButton = styled(PrimaryButtonBase, { base: `text-sm` })

const CardReview = styled('div', { base: `font-medium text-xs text-gray-600` })

const CardText = styled('div', { base: `p-4 text-gray-900` })
const CardTitle = styled('h5', {
	base: `text-lg font-semibold group-hover:text-primary-500`,
})
const CardContent = styled('p', {
	base: `mt-1 text-sm font-medium text-gray-600`,
})
const CardPrice = styled('p', { base: `mt-4 text-xl font-bold` })

const DecoratorBlob1 = styled(SvgDecoratorBlob1, {
	base: `pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-20 transform translate-x-2/3 -translate-y-12 text-pink-400`,
})
const DecoratorBlob2 = styled(SvgDecoratorBlob2, {
	base: `pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-20 transform -translate-x-2/3 text-primary-500`,
})

interface TabCardGridProps {
	heading?: React.ReactNode
	tabs?: {
		Starters: Record<string, string>[]
		Main: Record<string, string>[]
		Soup: Record<string, string>[]
		Desserts: Record<string, string>[]
	}
}

type TabsKeys = 'Starters' | 'Main' | 'Soup' | 'Desserts'

const TabCardGrid: React.FC<TabCardGridProps> = ({
	heading = 'Checkout the Menu',
	tabs = {
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
	},
}) => {
	/*
	 * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
	 * as the key and value of the key will be its content (as an array of objects).
	 * To see what attributes are configurable of each object inside this array see the example above for "Starters".
	 */
	const tabsKeys: TabsKeys[] = Object.keys(tabs) as TabsKeys[]
	const [activeTab, setActiveTab] = useState<TabsKeys>(tabsKeys[0])

	return (
		<Container>
			<ContentWithPaddingXl>
				<HeaderRow>
					<Header>{heading}</Header>
					<TabsControl>
						{tabsKeys.map((tabName, index) => (
							<TabControl
								key={index}
								active={activeTab === tabName}
								onClick={() => setActiveTab(tabName)}
							>
								{tabName}
							</TabControl>
						))}
					</TabsControl>
				</HeaderRow>

				{tabsKeys.map((tabKey, index) => (
					<TabContent
						key={index}
						variants={{
							current: {
								opacity: 1,
								scale: 1,
								display: 'flex',
							},
							hidden: {
								opacity: 0,
								scale: 0.8,
								display: 'none',
							},
						}}
						transition={{ duration: 0.4 }}
						initial={activeTab === tabKey ? 'current' : 'hidden'}
						animate={activeTab === tabKey ? 'current' : 'hidden'}
					>
						{tabs[tabKey].map((card, index) => (
							<CardContainer key={index}>
								<Card
									className="group"
									href={card.url}
									initial="rest"
									whileHover="hover"
									animate="rest"
								>
									<CardImageContainer
										css={{ backgroundImage: `url(${card.imageSrc})` }}
									>
										<CardRatingContainer>
											<CardRating>
												<StarIcon
													className={tw`w-4 h-4 fill-current text-orange-400 mr-1`}
												/>
												{card.rating}
											</CardRating>
											<CardReview>({card.reviews})</CardReview>
										</CardRatingContainer>
										<CardHoverOverlay
											variants={{
												hover: {
													opacity: 1,
													height: 'auto',
												},
												rest: {
													opacity: 0,
													height: 0,
												},
											}}
											transition={{ duration: 0.3 }}
										>
											<CardButton>Buy Now</CardButton>
										</CardHoverOverlay>
									</CardImageContainer>
									<CardText>
										<CardTitle>{card.title}</CardTitle>
										<CardContent>{card.content}</CardContent>
										<CardPrice>{card.price}</CardPrice>
									</CardText>
								</Card>
							</CardContainer>
						))}
					</TabContent>
				))}
			</ContentWithPaddingXl>
			<DecoratorBlob1 />
			<DecoratorBlob2 />
		</Container>
	)
}

export default TabCardGrid

/* This function is only there for demo purposes. It populates placeholder cards */
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
