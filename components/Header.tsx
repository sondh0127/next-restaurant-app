import React from 'react'
import { tw } from 'twind'
import { styled } from '@twind/react'
import useAnimatedNavToggler from '../hooks/useAnimatedNavToggler'

import logo from '../assets/images/logo.svg'
import { Menu as MenuIcon, X as CloseIcon } from 'react-feather'

const HeaderContainer = styled('header', {
	base: `flex justify-between items-center max-w-screen-xl mx-auto`,
})

export const NavLinks = styled('div', { base: `inline-block` })

export const NavLink = styled('a', {
	base: `text-lg my-2 lg:text-sm text-2xl! lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-primary-500 hover:text-primary-500
`,
	variants: {
		rounded: {
			true: `rounded-full`,
		},
	},
})

export const PrimaryLink = styled(NavLink, {
	base: `lg:mx-0
  px-8 py-3 rounded bg-primary-500 text-gray-100
  hover:bg-primary-700 hover:text-gray-200 focus:shadow-outline
  border-b-0
`,
})

export const LogoLink = styled(NavLink, {
	base: `flex items-center font-black border-b-0 text-2xl! ml-0!`,
})

export const MobileNavLinksContainer = styled('nav', {
	base: `flex flex-1 items-center justify-between`,
})
export const NavToggle = styled('button', {
	base: `lg:hidden z-20 focus:outline-none hover:text-primary-500 transition duration-300
`,
})
// TODO:
// export const MobileNavLinks = motion.custom(styled("div", {base: `
// ${tw`lg:hidden z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white`}
// ${NavLinks} {
//   ${tw`flex flex-col items-center`}
// }
// `}))

export const DesktopNavLinks = styled('nav', {
	base: `hidden lg:flex flex-1 justify-between items-center`,
	variants: {
		breakpoint: {
			sm: `sm:flex`,
			md: `md:flex`,
			lg: `lg:flex`,
			xl: `lg:flex`,
		},
	},
})

/* The below code is for generating dynamic break points for navbar.
 * Using this you can specify if you want to switch
 * to the toggleable mobile navbar at "sm", "md" or "lg" or "xl" above using the collapseBreakpointClass prop
 * Its written like this because we are using macros and we can not insert dynamic variables in macros
 */

const collapseBreakPointCssMap = {
	sm: {
		mobileNavLinks: tw`sm:hidden`,
		mobileNavLinksContainer: tw`sm:hidden`,
	},
	md: {
		mobileNavLinks: tw`md:hidden`,
		mobileNavLinksContainer: tw`md:hidden`,
	},
	lg: {
		mobileNavLinks: tw`lg:hidden`,
		mobileNavLinksContainer: tw`lg:hidden`,
	},
	xl: {
		mobileNavLinks: tw`lg:hidden`,
		mobileNavLinksContainer: tw`lg:hidden`,
	},
}

type CollapseBreakpointClass = keyof typeof collapseBreakPointCssMap

const Header: React.FC<{
	roundedHeaderButton?: boolean
	logoLink?: any
	links?: any[]
	className?: string
	collapseBreakpointClass?: CollapseBreakpointClass
}> = ({
	roundedHeaderButton = false,
	logoLink,
	links,
	className,
	collapseBreakpointClass = 'lg',
}) => {
	/*
	 * This header component accepts an optionals "links" prop that specifies the links to render in the navbar.
	 * This links props should be an array of "NavLinks" components which is exported from this file.
	 * Each "NavLinks" component can contain any amount of "NavLink" component, also exported from this file.
	 * This allows this Header to be multi column.
	 * So If you pass only a single item in the array with only one NavLinks component as root, you will get 2 column header.
	 * Left part will be LogoLink, and the right part will be the the NavLinks component you
	 * supplied.
	 * Similarly if you pass 2 items in the links array, then you will get 3 columns, the left will be "LogoLink", the center will be the first "NavLinks" component in the array and the right will be the second "NavLinks" component in the links array.
	 * You can also choose to directly modify the links here by not passing any links from the parent component and
	 * changing the defaultLinks variable below below.
	 * If you manipulate links here, all the styling on the links is already done for you. If you pass links yourself though, you are responsible for styling the links or use the helper styled components that are defined here (NavLink)
	 */
	const defaultLinks = [
		<NavLinks key={1}>
			<NavLink href="/#">About</NavLink>
			<NavLink href="/#">Blog</NavLink>
			<NavLink href="/#">Pricing</NavLink>
			<NavLink href="/#">Contact Us</NavLink>
			<span className={tw`lg:ml-12`}></span>
			<NavLink href="/#">Login</NavLink>
			<PrimaryLink rounded={roundedHeaderButton} href="/#">
				Sign Up
			</PrimaryLink>
		</NavLinks>,
	]

	const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler()
	const collapseBreakpointCss =
		collapseBreakPointCssMap[collapseBreakpointClass]

	const defaultLogoLink = (
		<LogoLink href="/">
			<img className={tw`w-10 mr-3`} src={logo} alt="logo" />
			Treact
		</LogoLink>
	)

	logoLink = logoLink || defaultLogoLink
	links = links || defaultLinks

	return (
		<HeaderContainer className={className || 'header-light'}>
			<DesktopNavLinks breakpoint={collapseBreakpointClass}>
				{/* {logoLink} */}
				{links}
			</DesktopNavLinks>

			{/*  */}

			{/* <MobileNavLinksContainer
				className={collapseBreakpointCss.mobileNavLinksContainer}
			>
				{logoLink}
				<MobileNavLinks
					initial={{ x: '150%', display: 'none' }}
					animate={animation}
					css={collapseBreakpointCss.mobileNavLinks}
				>
					{links}
				</MobileNavLinks>
				<NavToggle
					onClick={toggleNavbar}
					className={showNavLinks ? 'open' : 'closed'}
				>
					{showNavLinks ? (
						<CloseIcon className={tw`w-6 h-6`} />
					) : (
						<MenuIcon className={tw`w-6 h-6`} />
					)}
				</NavToggle>
			</MobileNavLinksContainer> */}
		</HeaderContainer>
	)
}

export default Header
