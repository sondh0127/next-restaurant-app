import React from 'react'
import { styled, tw } from '@twind/react'
import { PrimaryButton as PrimaryButtonBase } from '@/components/Buttons'

import LogoImage from '@/assets/images/logo.svg'
// import { ReactComponent as FacebookIcon } from 'images/facebook-icon.svg'
// import { ReactComponent as TwitterIcon } from 'images/twitter-icon.svg'
// import { ReactComponent as YoutubeIcon } from 'images/youtube-icon.svg'

const FacebookIcon = (props: any) => {
	return (
		<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
			<path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
		</svg>
	)
}
const TwitterIcon = (props: any) => {
	return (
		<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
			<path d="M22.162 5.656a8.384 8.384 0 01-2.402.658A4.196 4.196 0 0021.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814 11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 01-1.894-.523v.052a4.185 4.185 0 003.355 4.101 4.21 4.21 0 01-1.89.072A4.185 4.185 0 007.97 16.65a8.394 8.394 0 01-6.191 1.732 11.83 11.83 0 006.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 002.087-2.165z" />
		</svg>
	)
}
const YoutubeIcon = (props: any) => {
	return (
		<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
			<path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z" />
		</svg>
	)
}

const Container = styled('div', {
	base: `relative bg-gray-200 text-gray-700 -mb-8 -mx-8 px-8 py-20 lg:py-24`,
})
const Content = styled('div', { base: `max-w-screen-xl mx-auto relative z-10` })
const SixColumns = styled('div', {
	base: `flex flex-wrap text-center sm:text-left justify-center sm:justify-start md:justify-between -mt-12`,
})

const Column = styled('div', { base: `px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12` })

const ColumnHeading = styled('h5', { base: `uppercase font-bold` })

const LinkList = styled('ul', { base: `mt-6 text-sm font-medium` })
const LinkListItem = styled('li', { base: `mt-3` })
const Link = styled('a', {
	base: `border-b-2 border-transparent hover:border-gray-700 pb-1 transition duration-300`,
})

const SubscribeNewsletterColumn = styled(Column, {
	base: `text-center lg:text-left w-full! lg:w-auto! mt-20 lg:mt-12`,
})
const SubscribeNewsletterContainer = styled('div', {
	base: `max-w-sm mx-auto lg:mx-0 `,
})
const SubscribeText = styled('p', {
	base: `mt-2 lg:mt-6 text-sm font-medium text-gray-600`,
})
const SubscribeForm = styled('form', {
	base: `mt-4 lg:mt-6 text-sm sm:flex max-w-xs sm:max-w-none mx-auto sm:mx-0`,
})
const Input = styled('input', {
	base: `bg-gray-300 px-6 py-3 rounded sm:rounded-r-none border-2 sm:border-r-0 border-gray-400 hover:border-primary-500 focus:outline-none transition duration-300 w-full`,
})
const SubscribeButton = styled(PrimaryButtonBase, {
	base: `mt-4 sm:mt-0 w-full sm:w-auto rounded sm:rounded-l-none px-8 py-3`,
})

const Divider = styled('div', {
	base: `my-16 border-b-2 border-gray-300 w-full`,
})

const ThreeColRow = styled('div', {
	base: `flex flex-col md:flex-row items-center justify-between`,
})

const LogoContainer = styled('div', {
	base: `flex items-center justify-center md:justify-start`,
})
const LogoImg = styled('img', { base: `w-8` })
const LogoText = styled('h5', {
	base: `ml-2 text-xl font-black tracking-wider text-gray-800`,
})

const CopywrightNotice = styled('p', {
	base: `text-center text-sm sm:text-base mt-8 md:mt-0 font-medium text-gray-500`,
})

const SocialLinksContainer = styled('div', { base: `mt-8 md:mt-0 flex` })
const SocialLink = styled('a', {
	base: `cursor-pointer p-2 rounded-full bg-gray-900 text-gray-100 hover:bg-gray-700 transition duration-300 mr-4 last:mr-0`,
})

const SocialLinkSvgCls = tw`w-4 h-4`

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
	return (
		<Container>
			<Content>
				<SixColumns>
					<Column>
						<ColumnHeading>Main</ColumnHeading>
						<LinkList>
							<LinkListItem>
								<Link href="#">Blog</Link>
							</LinkListItem>
							<LinkListItem>
								<Link href="#">FAQs</Link>
							</LinkListItem>
							<LinkListItem>
								<Link href="#">Support</Link>
							</LinkListItem>
							<LinkListItem>
								<Link href="#">About Us</Link>
							</LinkListItem>
						</LinkList>
					</Column>
					<Column>
						<ColumnHeading>Product</ColumnHeading>
						<LinkList>
							<LinkListItem>
								<Link href="#">Log In</Link>
							</LinkListItem>
							<LinkListItem>
								<Link href="#">Personal</Link>
							</LinkListItem>
							<LinkListItem>
								<Link href="#">Business</Link>
							</LinkListItem>
							<LinkListItem>
								<Link href="#">Team</Link>
							</LinkListItem>
						</LinkList>
					</Column>
					<Column>
						<ColumnHeading>Press</ColumnHeading>
						<LinkList>
							<LinkListItem>
								<Link href="#">Logos</Link>
							</LinkListItem>
							<LinkListItem>
								<Link href="#">Events</Link>
							</LinkListItem>
							<LinkListItem>
								<Link href="#">Stories</Link>
							</LinkListItem>
							<LinkListItem>
								<Link href="#">Office</Link>
							</LinkListItem>
						</LinkList>
					</Column>
					<Column>
						<ColumnHeading>Legal</ColumnHeading>
						<LinkList>
							<LinkListItem>
								<Link href="#">GDPR</Link>
							</LinkListItem>
							<LinkListItem>
								<Link href="#">Privacy Policy</Link>
							</LinkListItem>
							<LinkListItem>
								<Link href="#">Terms of Service</Link>
							</LinkListItem>
							<LinkListItem>
								<Link href="#">Disclaimer</Link>
							</LinkListItem>
						</LinkList>
					</Column>
					<SubscribeNewsletterColumn>
						<SubscribeNewsletterContainer>
							<ColumnHeading>Subscribe to our Newsletter</ColumnHeading>
							<SubscribeText>
								We deliver high quality blog posts written by professionals
								weekly. And we promise no spam.
							</SubscribeText>
							<SubscribeForm method="get" action="#">
								<Input type="email" placeholder="Your Email Address" />
								<SubscribeButton type="submit">Subscribe</SubscribeButton>
							</SubscribeForm>
						</SubscribeNewsletterContainer>
					</SubscribeNewsletterColumn>
				</SixColumns>
				<Divider />
				<ThreeColRow>
					<LogoContainer>
						<LogoImg src={LogoImage} />
						<LogoText>Treact Inc.</LogoText>
					</LogoContainer>
					<CopywrightNotice>
						&copy; 2018 Treact Inc. All Rights Reserved.
					</CopywrightNotice>
					<SocialLinksContainer>
						<SocialLink href="https://facebook.com">
							<FacebookIcon className={SocialLinkSvgCls} />
						</SocialLink>
						<SocialLink href="https://twitter.com">
							<TwitterIcon className={SocialLinkSvgCls} />
						</SocialLink>
						<SocialLink href="https://youtube.com">
							<YoutubeIcon className={SocialLinkSvgCls} />
						</SocialLink>
					</SocialLinksContainer>
				</ThreeColRow>
			</Content>
		</Container>
	)
}

export default Footer
