type CarouselButtonProps = {
	text: string
	onClickFunc: () => void
}

const CarouselButton = ({ text, onClickFunc }: CarouselButtonProps) => {
	return (
		<>
			<button onClick={onClickFunc} className='text-zinc-100'>
				{text}
			</button>
		</>
	)
}
export default CarouselButton
