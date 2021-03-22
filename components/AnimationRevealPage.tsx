import { tw } from 'twind'

/* framer-motion and useInView here are used to animate the sections in when we reach them in the viewport
 */
import { motion } from 'framer-motion'
// import useInView from 'use-in-view'
import React from 'react'


function AnimationReveal({ disabled, children } : {disabled: boolean, children: React.ReactNode[]}) {
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
	direction = 'left' ,
	offset = 30,
	children,
}: {
	direction: 'left' | 'right',
	offset?: number,
	children: React.ReactNode,
}) {
	// const [ref, inView] = useInView(30)

	const x: {initial: string, target: string} = { initial: '', target: '0%' }

	if (direction === 'left') x.initial = '-150%'
	else x.initial = '150%'

	return (
		<motion.section
			initial={{ x: x.initial }}
			animate={{
				// x: inView && x.target,
				// transitionEnd: {
				// 	x: inView && 0,
				// },
				x: true && x.target,
				transitionEnd: {
					x: true && 0,
				},
			}}
			transition={{ type: 'spring', damping: 100 }}
			// ref={ref}
		>
			{children}
		</motion.section>
	)
}

const AnimationRevealPage: React.FC<any> = (props) => (
	<div className={`App ${tw`font-display min-h-screen text-secondary-500 p-8 overflow-hidden`}`}>
		<AnimationReveal {...props} />
	</div>
)

export default AnimationRevealPage
