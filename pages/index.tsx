import Link from 'next/link'
import Layout from '../layouts/Layout'
import { tw, styled } from '@twind/react'
import AnimationRevealPage from '@/components/AnimationRevealPage'
import Hero from '@/components/Hero'
import MainFeature from '@/components/MainFeature'
import TabCardGrid from '@/components/TabCardGrid'
import Features from '@/components/Features'
import MainFeature2 from '@/components/MainFeature2'
import Testimonial from '@/components/Testimonial'
import DownloadApp from '@/components/DownloadApp'
import Footer from '@/components/Footer'
import { useInView } from 'react-intersection-observer'

import chefIconImageSrc from '@/assets/images/chef-icon.svg'
import celebrationIconImageSrc from '@/assets/images/celebration-icon.svg'
import shopIconImageSrc from '@/assets/images/shop-icon.svg'
import { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { QueryClient, useQuery } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import { fetchDishes } from '@/hooks/useDishes'

export async function getStaticProps() {
	const queryClient = new QueryClient()

	await queryClient.prefetchQuery(['dishes', 10], () => fetchDishes(10))

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	}
}

const Subheading = styled('span', {
	base: `tracking-wider text-sm font-medium`,
})
const HighlightedText = styled('span', {
	base: `bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`,
})
const HighlightedTextInverse = styled('span', {
	base: `bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`,
})
const Description = styled('span', { base: `inline-block mt-8` })
const imageClass = tw`rounded-4xl`

const IndexPage = () => {
	return (
		<AnimationRevealPage>
			<Hero
				heading={
					<>
						Delicious & Affordable{' '}
						<HighlightedText>Meals Near You.</HighlightedText>
					</>
				}
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				imageSrc="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
				imageCss={imageClass}
				imageDecoratorBlob={true}
				primaryButtonText="Order Now"
				watchVideoButtonText="Meet The Chefs"
			/>
			{/* <MainFeature
				subheading={<Subheading>Established Since 2014</Subheading>}
				heading={
					<>
						We've been serving for
						<wbr /> <HighlightedText>over 5 years.</HighlightedText>
					</>
				}
				description={
					<Description>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
						<br />
						<br />
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
						nisi ut aliquip ex ea commodo consequat.
					</Description>
				}
				buttonRounded={false}
				textOnLeft={false}
				primaryButtonText="Latest Offers"
				imageSrc={
					'https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80'
				}
				imageClass={imageClass}
				imageDecoratorBlob={true}
				imageDecoratorBlobClass={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
			/> */}
			{/* <TabCardGrid
				heading={
					<>
						Checkout our <HighlightedText>menu.</HighlightedText>
					</>
				}
			/> */}
			{/* <Features
				heading={
					<>
						Amazing <HighlightedText>Services.</HighlightedText>
					</>
				}
				cards={[
					{
						imageSrc: shopIconImageSrc,
						title: '230+ Locations',
						description: 'Lorem ipsum donor amet siti ceali placeholder text',
						url: 'https://google.com',
					},
					{
						imageSrc: chefIconImageSrc,
						title: 'Professional Chefs',
						description: 'Lorem ipsum donor amet siti ceali placeholder text',
						url: 'https://timerse.com',
					},
					{
						imageSrc: celebrationIconImageSrc,
						title: 'Birthday Catering',
						description: 'Lorem ipsum donor amet siti ceali placeholder text',
						url: 'https://reddit.com',
					},
				]}
				imageContainerCss={tw`p-2!`}
				imageCss={tw`w-20! h-20!`}
			/> */}
			{/* <MainFeature2
				subheading={<Subheading>A Reputed Brand</Subheading>}
				heading={
					<>
						Why <HighlightedText>Choose Us ?</HighlightedText>
					</>
				}
				statistics={[
					{
						key: 'Orders',
						value: '94000+',
					},
					{
						key: 'Customers',
						value: '11000+',
					},
					{
						key: 'Chefs',
						value: '1500+',
					},
				]}
				primaryButtonText="Order Now"
				primaryButtonUrl="https://order.now.com"
				imageInsideDiv={false}
				imageSrc="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEzNzI2fQ&auto=format&fit=crop&w=768&q=80"
				imageCss={tw`bg-cover ${imageClass}`}
				imageContainerCss={tw`md:w-1/2 h-auto`}
				imageDecoratorBlob={true}
				imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
				textOnLeft={true}
			/> */}
			{/* <Testimonial
				subheading=""
				heading={
					<>
						Customers <HighlightedText>Love Us.</HighlightedText>
					</>
				}
			/> */}
			{/* <DownloadApp
				text={
					<>
						People around you are ordering delicious meals using the{' '}
						<HighlightedTextInverse>Treact App.</HighlightedTextInverse>
					</>
				}
			/> */}
			{/* <Footer /> */}
		</AnimationRevealPage>
	)
}

export default IndexPage
