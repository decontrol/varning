import { ReactNode } from 'react'

type CarouselButtonProps = {
	direction: 'prev' | 'next'
	hide: boolean
	children: ReactNode
	onClickFunc: () => void
}

const CarouselButton = ({
	direction,
	hide,
	onClickFunc,
	children,
}: CarouselButtonProps) => {
	const classes = `carousel-button text-4xl lg:text-7xl text-white bg-red-600 bg-opacity-50 px-4 py-2 absolute top-[50%] translate-y-[-50%] z-2 origin-center hover:bg-red-600 hover:opacity-85 hover:scale-110 active:bg-red-600 active:opacity-85 active:scale-110 active:outline-2 active:outline-white 
	${hide ? 'hidden' : 'block'}
	${direction === 'prev' ? 'left-0' : 'right-0'}`
	return (
		<>
			<button onClick={onClickFunc} className={classes}>
				{children}
			</button>
		</>
	)
}
export default CarouselButton
