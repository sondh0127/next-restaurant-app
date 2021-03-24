import React from 'react'
import { tw, styled } from '@twind/react'
import {
	SectionHeading,
	Subheading as SubheadingBase,
} from '@/components/Headings'
import { PrimaryButton as PrimaryButtonBase } from '@/components/Buttons'
import StatsIllustrationSrc from '@/assets/images/stats-illustration.svg'
// import { ReactComponent as SvgDotPattern } from 'images/dot-pattern.svg'
import SvgDotPattern from '@/components/DotPattern'

const Container = styled('div', { base: `relative` })
const TwoColumn = styled('div', {
	base: `flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`,
})
const Column = styled('div', {
	base: `w-full max-w-md mx-auto md:max-w-none md:mx-0`,
})
const ImageColumn = styled(Column, {
	base: `md:w-5/12 flex-shrink-0 h-80 md:h-auto relative`,
})
const TextColumn = styled(Column, {
	base: `md:w-7/12 mt-16 md:mt-0`,
	variants: {
		position: {
			left: `md:mr-12 lg:mr-16 md:order-first`,
			right: `md:ml-12 lg:ml-16 md:order-last`,
		},
	},
})

const Image = styled('div', {
	base: `rounded bg-contain bg-no-repeat bg-center h-full`,
})

const TextContent = styled('div', { base: `lg:py-8 text-center md:text-left` })

const Subheading = styled(SubheadingBase, { base: `text-center md:text-left` })
const Heading = styled(SectionHeading, {
	base: `mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`,
})
const Description = styled('p', {
	base: `mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`,
})

const Statistics = styled('div', {
	base: `flex flex-col items-center sm:block text-center md:text-left mt-4`,
})
const Statistic = styled('div', {
	base: `text-left sm:inline-block sm:mr-12 last:mr-0 mt-4`,
})
const Value = styled('div', {
	base: `font-bold text-lg sm:text-xl lg:text-2xl text-secondary-500 tracking-wide`,
})
const Key = styled('div', { base: `font-medium text-primary-700` })

const PrimaryButton = styled(PrimaryButtonBase, {
	base: `mt-8 md:mt-10 text-sm inline-block mx-auto md:mx-0`,
})

const DecoratorBlob = styled(SvgDotPattern, {
	base: `w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`,
})

interface MainFeature2Props {
	subheading?: React.ReactNode
	heading?: React.ReactNode
	description?: string
	primaryButtonText?: string
	primaryButtonUrl?: string
	imageSrc?: string
	imageCss?: string
	imageContainerCss?: string
	imageDecoratorBlob?: boolean
	imageDecoratorBlobCss?: string
	imageInsideDiv?: boolean
	statistics?: { key: string; value: string }[]
	textOnLeft?: boolean
}

const MainFeature2: React.FC<MainFeature2Props> = ({
	subheading = 'Our Track Record',
	heading = (
		<>
			We have been doing this <wbr /> since{' '}
			<span className={tw`text-primary-500`}>1999.</span>
		</>
	),
	description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
	primaryButtonText = 'Learn More',
	primaryButtonUrl = 'https://timerse.com',
	imageSrc = StatsIllustrationSrc,
	imageCss = '',
	imageContainerCss = '',
	imageDecoratorBlob = false,
	imageDecoratorBlobCss = '',
	imageInsideDiv = true,
	statistics = null,
	textOnLeft = false,
}) => {
	// The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
	//Change the statistics variable as you like, add or delete objects
	const defaultStatistics = [
		{
			key: 'Clients',
			value: '2282+',
		},
		{
			key: 'Projects',
			value: '3891+',
		},
		{
			key: 'Awards',
			value: '1000+',
		},
	]

	if (!statistics) statistics = defaultStatistics

	return (
		<Container>
			<TwoColumn className={tw`${!imageInsideDiv && 'md:items-center'}`}>
				<ImageColumn className={imageContainerCss}>
					{imageInsideDiv ? (
						<Image
							className={imageCss}
							css={{ backgroundImage: `url(${imageSrc})` }}
						/>
					) : (
						<img src={imageSrc} className={imageCss} alt="" />
					)}
					{imageDecoratorBlob && (
						<DecoratorBlob className={imageDecoratorBlobCss} />
					)}
				</ImageColumn>
				<TextColumn position={textOnLeft ? 'left' : 'right'}>
					<TextContent>
						{subheading && <Subheading>{subheading}</Subheading>}
						<Heading>{heading}</Heading>
						<Description>{description}</Description>
						<Statistics>
							{statistics.map((statistic, index) => (
								<Statistic key={index}>
									<Value>{statistic.value}</Value>
									<Key>{statistic.key}</Key>
								</Statistic>
							))}
						</Statistics>
						<PrimaryButton href={primaryButtonUrl}>
							{primaryButtonText}
						</PrimaryButton>
					</TextContent>
				</TextColumn>
			</TwoColumn>
		</Container>
	)
}
export default MainFeature2
