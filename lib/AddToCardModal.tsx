import { useDish, OrderForm, useCart } from '@/hooks/useMenu'
import { DishOption } from '@/hooks/useDishes'
import React from 'react'
import ReactModal from 'react-modal'
import { tw } from '@twind/react'
import { Icon } from '@iconify/react-with-api'
import { motion } from 'framer-motion'
import { PrimaryButton } from '@/components/Buttons'
import { useForm, Controller, useWatch } from 'react-hook-form'
import produce from 'immer'

interface AddToCardModalProps {
	isOpen: boolean
	closeModal: () => void
}

export const AddToCardModal: React.FC<AddToCardModalProps> = ({
	isOpen,
	closeModal,
}) => {
	const selectedDish = useDish((state) => state.selectedDish)
	const setSelectedDish = useDish((state) => state.setSelectedDish)
	const addOrder = useCart((state) => state.addOrder)
	const imageSrc =
		'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80'
	const {
		register,
		handleSubmit,
		watch,
		errors,
		control,
		getValues,
		setValue,
	} = useForm<OrderForm>({
		defaultValues: {
			quantity: 1,
		},
	})
	const watchOptions = watch('options', [])

	const watchQuantity = useWatch<string>({
		control,
		name: 'quantity',
		defaultValue: '1',
	})

	const onSubmit = handleSubmit((data) => {
		if (selectedDish) {
			const _data = produce(data, (draftState) => {
				draftState.options = draftState.options.filter((item) => item)
				draftState.quantity = +draftState.quantity
			})

			addOrder({ ..._data, dish: selectedDish })
			// Close form && clear selectedDish
			closeModal()
			setSelectedDish(undefined)
		}
	})

	// console.log(watch('example')) // watch input value by passing the name of it

	const options = [
		{ title: 'Süß-Sauer-Dip', price: 0.2 },
		{ title: 'Erdnuss-Dip', price: 1.1 },
		{ title: 'Mango-Dip', price: 1.1 },
		{ title: 'Limetten-Chili-Fischsauce', price: 1.1 },
	]

	const labelClass = tw`text-base font-medium my-2`

	const handleIncrease = () => {
		setValue('quantity', +watchQuantity + 1)
	}

	const handleDecrease = () => {
		if (+watchQuantity > 1) {
			setValue('quantity', +watchQuantity - 1)
		}
	}

	if (!selectedDish) {
		return null
	}

	return (
		<ReactModal
			isOpen={isOpen}
			onRequestClose={closeModal}
			contentLabel="Example Modal"
			parentSelector={() =>
				document.getElementById('order-menu') || document.body
			}
			shouldCloseOnOverlayClick={true}
			className={tw`absolute inset-16 mx-auto w-5/12 flex flex-col rounded-lg bg-white bg-opacity-95 outline-none border border-gray-500`}
			overlayClassName={tw`absolute inset-0`}
			ariaHideApp={false}
		>
			<button
				className={tw`rounded-full p-1 border border-gray-500 absolute right-0 top-0 m-2 focus:outline-none z-10 hover:bg-secondary-100`}
				onClick={closeModal}
			>
				<Icon icon="ant-design:close-outlined" />
			</button>
			<form onSubmit={onSubmit} className={tw`flex-1 overflow-y-auto mb-16`}>
				<div className={tw`flex flex-col h-full`}>
					<div
						className={tw`h-44 xl:h-52 bg-center bg-cover relative rounded-t`}
						style={{ backgroundImage: `url(${imageSrc})` }}
					></div>

					<p className={tw`px-6 py-2`}>{selectedDish.description}</p>

					{/* Form from here */}
					<section className={tw`px-6 py-4`}>
						<div>
							<h5 className={labelClass}>Extra Dip</h5>
							<ul
								className={tw`border(& gray-300) rounded flex flex-col divide(y-1 gray-300)`}
							>
								{options.map((option, index) => {
									return (
										<li
											key={index}
											className={
												watchOptions[index] && tw(`bg(primary-300 opacity-30)`)
											}
										>
											<label
												className={tw(`flex items-center space-x-2 my-2 mx-2`)}
											>
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
							<h5 className={labelClass}>Note</h5>
							<label className={tw`text-gray-700`}>
								<textarea
									name="instruction"
									ref={register}
									className={tw`focus:(ring(& purple-300 opacity-50) border-transparent) flex-1 appearance-none border border-gray-300 w-full px-2 py-2 bg-white text-gray-700 placeholder-gray-400 rounded text-base focus:outline-none`}
									placeholder="Enter your instructions"
									rows={3}
									cols={40}
								></textarea>
							</label>
						</div>

						<div>
							<h5 className={labelClass}>Quantity</h5>
							<div
								className={tw`flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1`}
							>
								<button
									type="button"
									onClick={handleDecrease}
									className={tw`focus:outline-none bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none`}
								>
									<span className={tw`m-auto text-2xl font-thin`}>−</span>
								</button>
								<input
									type="number"
									className={tw(
										`outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-lg hover:text-black focus:text-black md:text-base cursor-default flex items-center text-gray-700 outline-none`,
									)}
									name="quantity"
									ref={register}
									min={1}
								></input>
								<button
									type="button"
									onClick={handleIncrease}
									className={tw`focus:outline-none bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer`}
								>
									<span className={tw`m-auto text-2xl font-thin`}>+</span>
								</button>
							</div>
						</div>
					</section>

					{/* Footer */}
					<section
						className={tw`absolute bottom-0 h-16 w-full px-2 py-2 flex justify-center bg-gray-300`}
					>
						<button
							className={tw`px-4 py-3 font-bold rounded bg-primary-500 text-gray-100 hover:bg-primary-700 hover:text-gray-200 focus:(outline-none ring(& primary-500)) transition duration-300 text-sm flex justify-between w-6/12`}
							type="submit"
						>
							<span className={tw`font-sans`}>
								Total {selectedDish.price * +watchQuantity} $
							</span>
							<span className={tw`font-mono`}>Check out</span>
						</button>
					</section>
				</div>
			</form>
		</ReactModal>
	)
}
