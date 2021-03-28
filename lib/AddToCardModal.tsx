import { useDish } from '@/hooks/useMenu'
import { DishOption } from '@/hooks/useDishes'
import React from 'react'
import ReactModal from 'react-modal'
import { tw } from '@twind/react'
import { Icon } from '@iconify/react-with-api'
import { motion } from 'framer-motion'
import { PrimaryButton } from '@/components/Buttons'
import { useForm, Controller } from 'react-hook-form'

interface AddToCardModalProps {
	isOpen: boolean
	closeModal: () => void
}
interface OrderFormData {
	options: DishOption[]
	instruction: string
	quantity: number
}

export const AddToCardModal: React.FC<AddToCardModalProps> = ({
	isOpen,
	closeModal,
}) => {
	const selectedDish = useDish((state) => state.selectedDish)
	const imageSrc =
		'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80'
	const {
		register,
		handleSubmit,
		watch,
		errors,
		control,
	} = useForm<OrderFormData>()

	const onSubmit = handleSubmit((data) => {
		console.log('data', data)
	})

	// console.log(watch('example')) // watch input value by passing the name of it

	const handleAddToCard = () => {}

	const options = [
		{ title: 'Süß-Sauer-Dip', price: 0.2 },
		{ title: 'Erdnuss-Dip', price: 1.1 },
		{ title: 'Mango-Dip', price: 1.1 },
		{ title: 'Limetten-Chili-Fischsauce', price: 1.1 },
	]

	return (
		<ReactModal
			isOpen={isOpen}
			onRequestClose={closeModal}
			contentLabel="Example Modal"
			parentSelector={() =>
				document.getElementById('order-menu') || document.body
			}
			shouldCloseOnOverlayClick={true}
			className={tw`absolute inset-16 mx-auto w-1/2 flex flex-col rounded-lg bg-white bg-opacity-95 outline-none border border-gray-500`}
			overlayClassName={tw`absolute inset-0`}
		>
			<button
				className={tw`rounded-full p-1 border border-gray-500 absolute right-0 top-0 m-2 focus:outline-none z-10 hover:bg-secondary-100`}
				onClick={closeModal}
			>
				<Icon icon="ant-design:close-outlined" />
			</button>
			<form
				onSubmit={onSubmit}
				className={tw`flex-1 overflow-y-auto mb-16 forms`}
			>
				<div className={tw`flex flex-col h-full`}>
					<div
						className={tw`h-44 xl:h-52 bg-center bg-cover relative rounded-t`}
						style={{ backgroundImage: `url(${imageSrc})` }}
					></div>
					<p>{selectedDish?.description}</p>

					{/* Form from here */}
					<div>
						<h5>Extra Dip</h5>
						<ul>
							{options.map((option, index) => {
								return (
									<li key={index}>
										<label className={tw`flex items-center space-x-2 mb-3`}>
											<input
												type="checkbox"
												className={tw`appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-primary-500 checked:border-transparent focus:outline-none`}
												value={option.title}
												name={`options.${index}`}
												ref={register}
											/>
											<span
												className={tw`text-gray-700 dark:text-white font-normal`}
											>
												{option.title}
											</span>

											<span>{option.price}</span>
										</label>
									</li>
								)
							})}
						</ul>
					</div>

					<div>
						<h5>Note</h5>
						<label className={tw`text-gray-700`}>
							<textarea
								name="instruction"
								ref={register}
								className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
								placeholder="Enter your instructions"
								rows={3}
								cols={40}
							></textarea>
						</label>
					</div>

					<div>
						<h5>Quantity</h5>
						<div
							className={tw`flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1`}
						>
							<button
								className={tw`bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none`}
							>
								<span className="m-auto text-2xl font-thin">−</span>
							</button>
							<input
								type="number"
								className={tw(
									`outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-lg hover:text-black focus:text-black md:text-base cursor-default flex items-center text-gray-700 outline-none`,
								)}
								name="quantity"
								ref={register}
							></input>
							<button className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
								<span className="m-auto text-2xl font-thin">+</span>
							</button>
						</div>

						<div>{JSON.stringify(selectedDish)}</div>
					</div>

					{/* Footer */}
					<div
						className={tw`absolute bottom-0 h-16 w-full px-2 py-2 flex justify-center bg-gray-300`}
					>
						<PrimaryButton
							type="submit"
							tw="text-sm flex"
							onClick={handleAddToCard}
						>
							<span>Total $</span>
							<span className={tw`w-8`}></span>
							<span>Check out</span>
						</PrimaryButton>
					</div>
				</div>
			</form>
		</ReactModal>
	)
}
