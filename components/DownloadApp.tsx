import React from 'react'
import { tw, styled } from '@twind/react'
import mockupImageSrc from '@/assets/images/app-mockup.png'
// import { ReactComponent as SvgDecoratorBlob1 } from 'images/svg-decorator-blob-9.svg'
import {
	ContentWithPaddingXl,
	Container as ContainerBase,
} from '@/components/Layouts'
import {
	SectionHeading,
	Subheading as SubheadingBase,
} from '@/components/Headings'

import appleIconImageSrc from '@/assets/images/apple-icon.png'
import googlePlayIconImageSrc from '@/assets/images/google-play-icon.png'

const SvgDecoratorBlob1 = (props: any) => {
	return (
		<svg viewBox="0 0 600 600" {...props}>
			<g transform="translate(300,300)">
				<path
					d="M153.6,-239C199.1,-209.8,236,-167.2,258.4,-118C280.9,-68.9,288.9,-13.1,281.2,40.4C273.5,93.9,250.1,145.2,214.7,186.1C179.3,226.9,131.9,257.4,80,272.6C28.2,287.8,-28.2,287.8,-80,272.6C-131.9,257.4,-179.3,226.9,-214.7,186.1C-250.1,145.2,-273.5,93.9,-281.2,40.4C-288.9,-13.1,-280.9,-68.9,-258.4,-118C-236,-167.2,-199.1,-209.8,-153.6,-239C-108.1,-268.3,-54.1,-284.1,0,-284.1C54.1,-284.1,108.1,-268.3,153.6,-239Z"
					fill="currentColor"
				/>
			</g>
		</svg>
	)
}

const Container = styled(ContainerBase, { base: `bg-gray-900 -mx-8` })
const Content = styled(ContentWithPaddingXl, { base: `` })
const Row = styled('div', {
	base: `px-8 flex items-center relative z-10 flex-col lg:flex-row text-center lg:text-left justify-center`,
})

const ColumnContainer = styled('div', { base: `max-w-2xl` })
const TextContainer = styled(ColumnContainer, { base: `` })
const Text = styled(SectionHeading, {
	base: `text-gray-100 lg:text-left max-w-none text-3xl leading-snug`,
})
const Subheading = styled(SubheadingBase, {
	base: `override:(text-yellow-500) mb-4 tracking-wider`,
})

const LinksContainer = styled('div', {
	base: `mt-8 lg:mt-16 flex flex-col items-center sm:block`,
})
const Link = styled('a', {
	base: `w-56 p-3 sm:p-4 text-sm sm:text-base font-bold uppercase tracking-wider rounded-full inline-flex justify-center items-center mt-6 first:mt-0 sm:mt-0 sm:ml-8 first:ml-0 bg-gray-100 hover:bg-gray-300 text-gray-900 hover:text-gray-900 shadow hover:shadow-lg focus:shadow-outline focus:outline-none transition duration-300`,
})
const linkImgCls = tw`inline-block h-8 mr-3`
const linkSpanCls = tw`leading-none inline-block`

const ImageContainer = styled(ColumnContainer, {
	base: `mt-16 lg:mt-0 lg:ml-16 flex justify-end`,
})

const DecoratorBlobContainer = styled('div', {
	base: `absolute inset-0 overflow-hidden rounded-lg`,
})
const DecoratorBlob1 = styled(SvgDecoratorBlob1, {
	base: `absolute bottom-0 left-0 w-80 h-80 transform -translate-x-20 translate-y-32 text-gray-800 opacity-50`,
})
const DecoratorBlob2 = styled(SvgDecoratorBlob1, {
	base: `absolute top-0 right-0 w-80 h-80 transform  translate-x-20 -translate-y-64 text-gray-800 opacity-50`,
})

interface DownloadAppProps {
	subheading?: React.ReactNode
	text?: React.ReactNode
	link1Text?: string
	link1Url?: string
	link1IconSrc?: string
	link2Text?: string
	link2Url?: string
	link2IconSrc?: string
	pushDownFooter?: boolean
	imageSrc?: string
}

const DownloadApp: React.FC<DownloadAppProps> = ({
	subheading = 'Download App',
	text = 'Developers all over the world are happily using Treact.',
	link1Text = 'App Store',
	link1Url = 'http://apple.com',
	link1IconSrc = appleIconImageSrc,
	link2Text = 'Google Play',
	link2Url = 'http://play.google.com',
	link2IconSrc = googlePlayIconImageSrc,
	pushDownFooter = false,
	imageSrc = mockupImageSrc,
}) => {
	return (
		<Container className={tw`${pushDownFooter && 'mb-20 lg:mb-24'}`}>
			<Content>
				<Row>
					<TextContainer>
						{subheading && <Subheading>{subheading}</Subheading>}
						<Text>{text}</Text>
						<LinksContainer>
							<Link href={link1Url}>
								<img className={linkImgCls} src={link1IconSrc} alt="" />
								<span className={linkSpanCls}>{link1Text}</span>
							</Link>
							<Link href={link2Url}>
								<img className={linkImgCls} src={link2IconSrc} alt="" />
								<span className={linkSpanCls}>{link2Text}</span>
							</Link>
						</LinksContainer>
					</TextContainer>
					<ImageContainer>
						<img src={imageSrc} alt="" className={tw`w-64`} />
					</ImageContainer>
				</Row>
				<DecoratorBlobContainer>
					<DecoratorBlob1 />
					<DecoratorBlob2 />
				</DecoratorBlobContainer>
			</Content>
		</Container>
	)
}
export default DownloadApp
