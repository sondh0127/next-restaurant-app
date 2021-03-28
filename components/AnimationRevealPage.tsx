import { tw } from 'twind'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import React from 'react'

function AnimationReveal({
	disabled,
	children,
}: {
	disabled: boolean
	children: React.ReactNode[]
}) {
	if (disabled) {
		return <>{children}</>
	}

	if (!Array.isArray(children)) children = [children]

	const directions = ['left', 'right'] as const
	const childrenWithAnimation = children.map((child, i) => {
		return (
			<AnimatedSlideInComponent
				key={i}
				direction={directions[i % directions.length]}
			>
				{child}
			</AnimatedSlideInComponent>
		)
	})
	return <>{childrenWithAnimation}</>
}

function AnimatedSlideInComponent({
	direction = 'left',
	// offset = 30,
	children,
}: {
	direction: 'left' | 'right'
	offset?: number
	children: React.ReactNode
}) {
	const { ref, inView, entry } = useInView({
		threshold: 0,
	})
	const x: { initial: string; target: string } = { initial: '', target: '0%' }

	if (direction === 'left') x.initial = '-150%'
	else x.initial = '150%'

	return (
		<motion.section
			ref={ref}
			initial={{ x: x.initial }}
			animate={{
				x: x.target,
				transitionEnd: {
					x: 0,
				},
			}}
			transition={{ type: 'spring', duration: 2 }}
		>
			{children}
		</motion.section>
	)
}

const AnimationRevealPage: React.FC<any> = (props) => (
	<div
		className={tw`font-display min-h-screen text-secondary-500 p-8 overflow-hidden`}
	>
		<AnimationReveal {...props} />
	</div>
)

export default AnimationRevealPage
