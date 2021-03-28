import { Dish } from '@/hooks/useDishes'
import { useCartModal, useDish } from '@/hooks/useMenu'
import { motion } from 'framer-motion'
import React, { Fragment } from 'react'
import { tw } from '@twind/react'
import { PrimaryButton } from '@/components/Buttons'

export const DishItem: React.FC<{ dish: Dish }> = ({ dish }) => {
	const setIsOpen = useCartModal((state) => state.setIsOpen)
	const setSelectedDish = useDish((state) => state.setSelectedDish)

	const handleAddToCard: React.MouseEventHandler<HTMLButtonElement> = (e) => {
		setIsOpen(true)
		setSelectedDish(dish)
	}

	const imageSrc =
		'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80'

	return (
		<Fragment>
			<li
				className={tw`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`}
			>
				<motion.a
					className={tw`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`}
					// href={dish.url}
					initial="rest"
					whileHover="hover"
					animate="rest"
				>
					<div
						className={tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
						style={{ backgroundImage: `url(${imageSrc})` }}
					>
						{/* TODO: When we have rating */}
						{/* <CardRatingContainer>
						<CardRating>
							<StarIcon
								className={tw`w-4 h-4 fill-current text-orange-400 mr-1`}
							/>
							{dish.rating}
						</CardRating>
						<CardReview>({dish.reviews})</CardReview>
					</CardRatingContainer> */}
						<motion.div
							className={tw`absolute inset-0 flex justify-center items-center bg-white bg-opacity-50`}
							variants={{
								hover: {
									opacity: 1,
									height: 'auto',
								},
								rest: {
									opacity: 0,
									height: 0,
								},
							}}
							transition={{ duration: 0.3 }}
						>
							<PrimaryButton tw="text-sm" onClick={handleAddToCard}>
								Add to card
							</PrimaryButton>
						</motion.div>
					</div>
					<div className={tw`p-4 text-gray-900`}>
						<h5
							className={tw`text-lg font-semibold group-hover:text-primary-500`}
						>
							{dish.name}
						</h5>
						<p className={tw`mt-1 text-sm font-medium text-gray-600`}>
							{dish.description}
						</p>
						<p className={tw`mt-4 text-xl font-bold`}>{dish.price} $</p>

						{/* <p className={tw`mt-4 text-xl font-bold`}>{dish._id}</p>
					<p className={tw`mt-4 text-xl font-bold`}>{dish.categories}</p>
					<p className={tw`mt-4 text-xl font-bold`}>{dish.created_at}</p>
					<p className={tw`mt-4 text-xl font-bold`}>{dish.updated_at}</p>
					<p className={tw`mt-4 text-xl font-bold`}>{dish.options}</p>
					<p className={tw`mt-4 text-xl font-bold`}>{dish.pictures}</p> */}
					</div>
				</motion.a>
			</li>
		</Fragment>
	)
}
