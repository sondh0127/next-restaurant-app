import Link from 'next/link'
import Layout from '../components/Layout'
import { tw } from 'twind'
import AnimationRevealPage from '@/components/AnimationRevealPage'
import Hero from '@/components/Hero'

const subheading = tw`tracking-wider text-sm font-medium`
const highlightedText = tw`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`
const highlightedTextInverse = tw`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`
const description = tw`inline-block mt-8`
const imageClass = tw`rounded-4xl`

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
						<span className={highlightedText}>Meals Near You.</span>
					</>
				}
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				imageSrc="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
				imageCss={imageClass}
				imageDecoratorBlob={true}
				primaryButtonText="Order Now"
				watchVideoButtonText="Meet The Chefs"
			/>
		</AnimationRevealPage>
	)
}

export default IndexPage
