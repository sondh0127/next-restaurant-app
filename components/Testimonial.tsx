import React from 'react'
import { styled } from '@twind/react'
import { ContentWithPaddingXl, Container } from '@/components/Layouts'
import {
	SectionHeading as Heading,
	Subheading as SubheadingBase,
} from '@/components/Headings'
// import { ReactComponent as SvgDecoratorBlob1 } from 'images/svg-decorator-blob-7.svg'
// import { ReactComponent as SvgDecoratorBlob2 } from 'images/svg-decorator-blob-8.svg'

const SvgDecoratorBlob1 = (props: any) => {
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

const SvgDecoratorBlob2 = (props: any) => {
	return (
		<svg viewBox="0 0 600 600" {...props}>
			<g transform="translate(300,300)">
				<path
					d="M134.6,-126.1C171.1,-98.1,195,-49,182.7,-12.4C170.3,24.3,121.6,48.6,85.1,84.6C48.6,120.6,24.3,168.3,-21.9,190.2C-68.1,212.1,-136.2,208.2,-181.1,172.2C-225.9,136.2,-247.5,68.1,-229.7,17.8C-211.9,-32.5,-154.7,-65.1,-109.9,-93.1C-65.1,-121.1,-32.5,-144.5,8.2,-152.8C49,-161,98.1,-154.1,134.6,-126.1Z"
					fill="currentColor"
				/>
			</g>
		</svg>
	)
}

const Subheading = styled(SubheadingBase, { base: `text-center` })
const Testimonials = styled('div', {
	base: `flex flex-col lg:flex-row items-center lg:items-stretch`,
})
const TestimonialContainer = styled('div', { base: `mt-16 lg:w-1/3` })
const TestimonialItem = styled('div', {
	base: `px-4 text-center max-w-xs mx-auto flex flex-col items-center`,
})
const Image = styled('img', { base: `w-20 h-20 rounded-full` })
const Quote = styled('blockquote', {
	base: `mt-5 text-gray-600 font-medium leading-loose`,
})
const CustomerName = styled('p', {
	base: `mt-5 text-gray-900 font-semibold uppercase text-sm tracking-wide`,
})

const DecoratorBlob1 = styled(SvgDecoratorBlob1, {
	base: `pointer-events-none -z-20 absolute left-0 top-0 h-56 w-56 opacity-20 transform -translate-x-2/3 -translate-y-12 text-teal-400`,
})

const DecoratorBlob2 = styled(SvgDecoratorBlob2, {
	base: `pointer-events-none -z-20 absolute right-0 bottom-0 h-64 w-64 opacity-20 transform translate-x-2/3 text-yellow-500`,
})

interface TestimonialProps {
	subheading?: React.ReactNode
	heading?: React.ReactNode
	testimonials?: {
		imageSrc: string
		quote: string
		customerName: string
	}[]
}

const Testimonial: React.FC<TestimonialProps> = ({
	subheading = 'Testimonials',
	heading = "Customer's Review",
	testimonials = [
		{
			imageSrc:
				'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80',
			quote:
				'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
			customerName: 'Charlotte Hale',
		},
		{
			imageSrc:
				'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80',
			quote:
				'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
			customerName: 'Adam Cuppy',
		},
		{
			imageSrc:
				'https://images.unsplash.com/photo-1580852300654-03c803a14e24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4.25&w=512&h=512&q=80',
			quote:
				'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
			customerName: 'Steven Marcetti',
		},
	],
}) => {
	return (
		<Container>
			<ContentWithPaddingXl>
				{subheading && <Subheading>{subheading}</Subheading>}
				<Heading>{heading}</Heading>
				<Testimonials>
					{testimonials.map((testimonial, index) => (
						<TestimonialContainer key={index}>
							<TestimonialItem>
								<Image src={testimonial.imageSrc} />
								<Quote>"{testimonial.quote}"</Quote>
								<CustomerName>- {testimonial.customerName}</CustomerName>
							</TestimonialItem>
						</TestimonialContainer>
					))}
				</Testimonials>
			</ContentWithPaddingXl>

			<DecoratorBlob1 />
			<DecoratorBlob2 />
		</Container>
	)
}
export default Testimonial
