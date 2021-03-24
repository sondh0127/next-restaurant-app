import React from 'react'
import { tw, styled } from '@twind/react'
import {
	SectionHeading,
	Subheading as SubheadingBase,
} from '@/components/Headings'
import { PrimaryButton as PrimaryButtonBase } from '@/components/Buttons'
import TeamIllustrationSrc from '@/assets/images/team-illustration-2.svg'
import DotPattern from '@/components/DotPattern'
// import SvgDotPattern from "@/assets/images/dot-pattern.svg"

const Container = styled('div', { base: `relative` })
const TwoColumn = styled('div', {
	base: `flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`,
})
const Column = styled('div', {
	base: `w-full max-w-md mx-auto md:max-w-none md:mx-0`,
})
const ImageColumn = styled(Column, { base: `md:w-6/12 flex-shrink-0 relative` })

const TextColumn = styled(Column, {
	base: `md:w-6/12 mt-16 md:mt-0`,
	variants: {
		textPosition: {
			left: `md:mr-12 lg:mr-16 md:order-first`,
			right: `md:ml-12 lg:ml-16 md:order-last`,
		},
	},
	// defaults: {
	//   textPosition: "left",
	// }
})

const Image = styled('img', {
	variants: {
		imageRounded: {
			true: `rounded`,
		},
		imageBorder: {
			true: `border`,
		},
		imageShadow: {
			true: `shadow`,
		},
	},
})

const TextContent = styled('div', { base: `lg:py-8 text-center md:text-left` })

const Subheading = styled(SubheadingBase, { base: `text-center md:text-left` })
const Heading = styled(SectionHeading, {
	base: `mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`,
})
const Description = styled('p', {
	base: `mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`,
})

const PrimaryButton = styled(PrimaryButtonBase, {
	base: `mt-8 md:mt-8 text-sm inline-block mx-auto md:mx-0`,
	variants: {
		rounded: {
			true: `rounded-full`,
		},
	},
})

interface MainFeatureProps {
	subheading?: React.ReactNode
	heading?: React.ReactNode
	description?: React.ReactNode
	primaryButtonText?: string
	primaryButtonUrl?: string
	imageSrc?: string
	buttonRounded?: boolean
	imageRounded?: boolean
	imageBorder?: boolean
	imageShadow?: boolean
	imageDecoratorBlob?: boolean
	imageClass?: string
	imageDecoratorBlobClass?: string
	textOnLeft?: boolean
}

const MainFeature: React.FC<MainFeatureProps> = ({
	subheading = 'Our Expertise',
	heading = (
		<>
			Designed & Developed by{' '}
			<span className={tw`text-primary-500`}>Professionals.</span>
		</>
	),
	description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
	primaryButtonText = 'Learn More',
	primaryButtonUrl = 'https://timerse.com',
	imageSrc = TeamIllustrationSrc,
	buttonRounded = true,
	imageRounded = true,
	imageBorder = false,
	imageShadow = false,
	imageClass = '',
	imageDecoratorBlob = false,
	imageDecoratorBlobClass = '',
	textOnLeft = true,
}) => {
	// The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

	return (
		<Container>
			<TwoColumn>
				<ImageColumn>
					<Image
						className={imageClass}
						src={imageSrc}
						imageBorder={imageBorder}
						imageShadow={imageShadow}
						imageRounded={imageRounded}
					/>
					{/* FIXME: image does not work */}
					{imageDecoratorBlob && (
						<DotPattern
							className={tw`${imageDecoratorBlobClass} w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`}
						/>
					)}
				</ImageColumn>
				<TextColumn textPosition={textOnLeft ? 'left' : 'right'}>
					<TextContent>
						<Subheading>{subheading}</Subheading>
						<Heading>{heading}</Heading>
						<Description>{description}</Description>
						<PrimaryButton rounded={buttonRounded} href={primaryButtonUrl}>
							{primaryButtonText}
						</PrimaryButton>
					</TextContent>
				</TextColumn>
			</TwoColumn>
		</Container>
	)
}

export default MainFeature
