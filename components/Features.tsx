import React from 'react'
import { tw, styled } from '@twind/react'
import {
	SectionHeading,
	Subheading as SubheadingBase,
} from '@/components/Headings'
import { SectionDescription } from '@/components/Typography'
import { Container, ContentWithPaddingXl } from '@/components/Layouts'
// import { ReactComponent as ArrowRightIcon } from 'images/arrow-right-icon.svg'
import SupportIconImage from '@/assets/images/support-icon.svg'
import ShieldIconImage from '@/assets/images/shield-icon.svg'
import CustomizeIconImage from '@/assets/images/customize-icon.svg'
// import { ReactComponent as SvgDecoratorBlob3 } from 'images/svg-decorator-blob-3.svg'

const ArrowRightIcon = (props: any) => {
	return (
		<svg viewBox="0 0 31.49 31.49" {...props}>
			<path
				fill="currentColor"
				d="M21.205 5.007c-.429-.444-1.143-.444-1.587 0-.429.429-.429 1.143 0 1.571l8.047 8.047H1.111C.492 14.626 0 15.118 0 15.737c0 .619.492 1.127 1.111 1.127h26.554l-8.047 8.032c-.429.444-.429 1.159 0 1.587.444.444 1.159.444 1.587 0l9.952-9.952c.444-.429.444-1.143 0-1.571l-9.952-9.953z"
			/>
		</svg>
	)
}

const SvgDecoratorBlob3 = (props: any) => {
	return (
		<svg
			width="600"
			height="600"
			viewBox="0 0 600 600"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<g transform="translate(300,300)">
				<path
					d="M125,-160.4C159.9,-146.7,184.6,-107.3,178.8,-70.9C173.1,-34.4,137,-0.8,128.8,47.3C120.7,95.5,140.6,158.2,123.8,198.4C107,238.6,53.5,256.3,5.4,248.9C-42.7,241.5,-85.4,208.9,-112.7,172.1C-140,135.3,-151.8,94.2,-146.3,59.7C-140.8,25.1,-117.9,-2.9,-104,-30.1C-90.1,-57.3,-85,-83.7,-69.1,-103.5C-53.3,-123.4,-26.6,-136.7,9.2,-149.4C45.1,-162,90.1,-174,125,-160.4Z"
					fill="#FFB4BC"
				/>
			</g>
		</svg>
	)
}

const Heading = styled(SectionHeading, { base: `` })
const Subheading = styled(SubheadingBase, { base: `text-center mb-3` })
const Description = styled(SectionDescription, { base: `text-center mx-auto` })
const ThreeColumnContainer = styled('div', {
	base: `mt-10 flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap lg:justify-center max-w-screen-lg mx-auto`,
})

const Column = styled('div', {
	base: `lg:w-1/3 max-w-xs`,
})

const Card = styled('a', {
	base: `flex flex-col items-center text-center h-full mx-4 px-4 py-8 rounded transition-transform duration-300 hover:cursor-pointer transform hover:scale-105`,
})

const DecoratorBlob = styled(SvgDecoratorBlob3, {
	base: `pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-40`,
})

interface FeaturesProps {
	cards?: any[]
	linkText?: string
	heading?: React.ReactNode
	subheading?: string
	description?: string
	imageContainerCss?: string
	imageCss?: string
}

const Features: React.FC<FeaturesProps> = ({
	cards = [
		{
			imageSrc: ShieldIconImage,
			title: 'Secure',
			description:
				'We strictly only deal with vendors that provide top notch security.',
			url: 'https://timerse.com',
		},
		{
			imageSrc: SupportIconImage,
			title: '24/7 Support',
			description: 'Lorem ipsum donor amet siti ceali placeholder text',
			url: 'https://google.com',
		},
		{
			imageSrc: CustomizeIconImage,
			title: 'Customizable',
			description: 'Lorem ipsum donor amet siti ceali placeholder text',
			url: 'https://reddit.com',
		},
	],
	linkText = 'Learn More',
	heading = '',
	subheading = '',
	description = '',
	imageContainerCss = null,
	imageCss = null,
}) => {
	/*
	 * This componets accepts a prop - `cards` which is an array of object denoting the cards. Each object in the cards array can have the following keys (Change it according to your need, you can also add more objects to have more cards in this feature component):
	 *  1) imageSrc - the image shown at the top of the card
	 *  2) title - the title of the card
	 *  3) description - the description of the card
	 *  4) url - the url that the card should goto on click
	 */
	return (
		<Container>
			<ContentWithPaddingXl>
				{subheading && <Subheading>{subheading}</Subheading>}
				{heading && <Heading>{heading}</Heading>}
				{description && <Description>{description}</Description>}
				<ThreeColumnContainer>
					{cards.map((card, i) => (
						<Column key={i}>
							<Card href={card.url}>
								<span
									className={tw`text-center rounded-full p-4 bg-gray-100 ${imageContainerCss}`}
								>
									<img
										className={tw`w-8 h-8 ${imageCss}`}
										src={card.imageSrc}
										alt=""
									/>
								</span>
								<span className={tw`mt-4 font-bold text-xl leading-none`}>
									{card.title}
								</span>
								<p className={tw`mt-4 text-sm font-medium text-secondary-300`}>
									{card.description}
								</p>
								{linkText && (
									<span
										className={tw`mt-auto inline-flex items-center pt-5 text-sm font-bold text-primary-300 leading-none hocus:text-primary-900 transition duration-300`}
									>
										<span>{linkText}</span>
										<ArrowRightIcon className={tw`ml-2 w-4`} />
									</span>
								)}
							</Card>
						</Column>
					))}
				</ThreeColumnContainer>
			</ContentWithPaddingXl>
			<DecoratorBlob />
		</Container>
	)
}

export default Features
