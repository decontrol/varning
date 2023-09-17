type CarouselButtonProps = {
	text: string
	direction: 'prev' | 'next'
	hide: boolean
	onClickFunc: () => void
}

const CarouselButton = ({
	text,
	onClickFunc,
	direction,
	hide,
}: CarouselButtonProps) => {
	const classes = `carousel-button text-4xl lg:text-7xl text-white opacity-50 xl:opacity-25 bg-black px-4 py-2 absolute top-[50%] translate-y-[-50%] z-2 origin-center hover:bg-black hover:opacity-75 hover:scale-110 active:bg-black active:opacity-75 active:scale-110 active:outline-2 active:outline-white 
	${hide ? 'hidden' : 'block'}
	${direction === 'prev' ? 'left-0' : 'right-0'}`
	return (
		<>
			<button onClick={onClickFunc} className={classes}>
				{text}
			</button>
		</>
	)
}
export default CarouselButton
