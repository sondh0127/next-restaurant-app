import Link from 'next/link'
import Layout from '../components/Layout'
import { tw, styled } from '@twind/react'
import AnimationRevealPage from '@/components/AnimationRevealPage'
import Hero from '@/components/Hero'
import MainFeature from '@/components/MainFeature'

const Subheading = styled("span", { base: `tracking-wider text-sm font-medium` });
const HighlightedText = styled("span", { base: `bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block` });
const HighlightedTextInverse = styled("span", { base: `bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block` });
const Description = styled("span", { base: `inline-block mt-8` });
const imageClass = tw`rounded-4xl`;


const IndexPageOld = () => {
	return (
		<Layout title="Home | Next.js + TypeScript Example">
			<main
				className={tw`h-screen bg-purple-400 flex flex-col items-center justify-center`}
			>
				<h1
					className={tw`font-bold text(center 5xl white sm:gray-800 md:pink-700)`}
				>
					Hello Next.js 👋This is Twind!
				</h1>
				<p>
					<Link href="/about">
						<a>About</a>
					</Link>
				</p>
			</main>
		</Layout>
	)
}

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
				imageClass={imageClass}
				imageDecoratorBlob={true}
				primaryButtonText="Order Now"
				watchVideoButtonText="Meet The Chefs"
			/>
			<MainFeature
				subheading={<Subheading>Established Since 2014</Subheading>}
				heading={
					<>
						We've been serving for
						<wbr /> <HighlightedText>over 5 years.</HighlightedText>
					</>
				}
				description={
					<Description>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua.
            <br />
						<br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Description>
				}
				buttonRounded={false}
				textOnLeft={false}
				primaryButtonText="Latest Offers"
				imageSrc={
					"https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
				}
				imageClass={imageClass}
				imageDecoratorBlob={true}
				imageDecoratorBlobClass={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
			/>
		</AnimationRevealPage>
	)
}

export default IndexPage
