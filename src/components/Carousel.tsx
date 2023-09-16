import { useEffect, useState } from 'react'
import { banners } from '../data/images.ts'
import { carouselData } from '../data/index.ts'
import CarouselButton from './CarouselButton'

type CarouselProps = {
	windowSize: number
}

const Carousel = ({ windowSize }: CarouselProps) => {
	const [slideCount, setSlideCount] = useState(1)
	const [distanceToMove, setDistanceToMove] = useState(0)
	const [moveStyle, setMoveStyle] = useState(0)

	const slideLength = 7

	useEffect(() => {
		setDistanceToMove(windowSize >= 1024 ? 958 : windowSize)
		// console.log('window size:', windowSize)
	}, [windowSize])

	const handleClickNext = () => {
		if (slideCount < slideLength) {
			setSlideCount(slideCount + 1)
			const currentXOffset = Number(moveStyle)
			const distance = currentXOffset + distanceToMove
			setMoveStyle(distance)
		}
	}

	const handleClickPrev = () => {
		if (slideCount > 1) {
			setSlideCount(slideCount - 1)
			const currentXOffset = Number(moveStyle)
			const distance = currentXOffset - distanceToMove
			setMoveStyle(distance)
		}
	}

	return (
		<>
			<h2 className='hidden text-white text-5xl'>
				distanceToMove: {distanceToMove}
			</h2>
			<div className='carousel-container bg-slate-600 overflow-hidden'>
				<div
					className='relative image-container text-zinc-400 flex flex-row'
					style={{ right: `${moveStyle}px` }}
				>
					{/* h-full sm:h-[600px] md:h-[800px] lg:h-[1200px] xl:h-[1500px] */}
					{carouselData.map((item, i) => {
						return (
							<div key={item._id} className='w-full shrink-0 inline-block'>
								<img
									src={banners[i]}
									alt={item.description}
									className='w-full shrink-0 h-full object-cover'
								/>
							</div>
						)
					})}
				</div>
				{/* <div>
					Current Slide: {slideCount} moveStyle.right: {moveStyle}
				</div> */}
				<div className='flex justify-between items-center'>
					<CarouselButton
						onClickFunc={handleClickPrev}
						text='Prev'
					></CarouselButton>

					<CarouselButton
						onClickFunc={handleClickNext}
						text='Next'
					></CarouselButton>
				</div>
			</div>
		</>
	)
}

export default Carousel
