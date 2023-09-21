import { useEffect, useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import { carouselData } from '../data/index.ts'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import PageTitle from './PageTitle.tsx'
import CarouselButton from './CarouselButton'

type CarouselProps = {
	windowSize: number
}

const Carousel = ({ windowSize }: CarouselProps) => {
	const [slideCount, setSlideCount] = useState(1)
	const [distanceToMove, setDistanceToMove] = useState(0)
	const [rightDistance, setRightDistance] = useState(0)

	const slideLength = carouselData.length

	const classes =
		'relative touch-pan-x image-container text-zinc-400 flex flex-row transition-[right] duration-300 ease-in'

	const customId = 'custom-id-yes' // to prevent multiple toasts from appearing

	const notify = () => {
		toast(
			`Swipe or press arrow buttons to check out all ${slideLength} posters!!!`,
			{
				toastId: customId,
			}
		)
	}

	useEffect(() => {
		setDistanceToMove(windowSize >= 1024 ? 718 : windowSize - 32) // '.container' has 16px on both sides so deducted 32 from both widths
		notify()
		// console.log('window size:', windowSize)
	}, [windowSize])

	const handlers = useSwipeable({
		onSwipedLeft: () => handleClickNext(),
		onSwipedRight: () => handleClickPrev(),
		swipeDuration: 750,
		preventScrollOnSwipe: true,
		trackMouse: true,
	})

	const handleClickNext = () => {
		if (slideCount < slideLength) {
			setSlideCount(slideCount + 1)
			const currentXOffset = Number(rightDistance)
			const distance = currentXOffset + distanceToMove
			setRightDistance(distance)
		}
	}

	const handleClickPrev = () => {
		if (slideCount > 1) {
			setSlideCount(slideCount - 1)
			const currentXOffset = Number(rightDistance)
			const distance = currentXOffset - distanceToMove
			setRightDistance(distance)
		}
	}

	return (
		<>
			<PageTitle size={5}>
				15 years of Varning!
				<br />
				Check out Varning Posters
				<br />
				<em>"UP THE PUNX TABARNAC!!!"</em>
			</PageTitle>

			<div
				{...handlers}
				className='carousel-container bg-black overflow-hidden relative'
			>
				<div className={classes} style={{ right: `${rightDistance}px` }}>
					{/* h-full sm:h-[600px] md:h-[800px] lg:h-[1200px] xl:h-[1500px] */}
					{carouselData.map((item) => {
						return (
							<div key={item._id} className='w-full shrink-0 inline-block'>
								<img
									src={item.img}
									alt={item.description}
									className='w-full shrink-0 h-full object-fit'
								/>
							</div>
						)
					})}
				</div>
				{/* <div className='text-5xl text-white'>
					Current Slide: {slideCount} rightDistance.right: {rightDistance}
				</div> */}
				<div className='flex justify-between items-center'>
					<CarouselButton
						onClickFunc={handleClickPrev}
						direction='prev'
						hide={slideCount === 1}
					>
						&#x2190;
					</CarouselButton>

					<CarouselButton
						onClickFunc={handleClickNext}
						direction='next'
						hide={slideCount === slideLength}
					>
						&#x2192;
					</CarouselButton>
				</div>
			</div>
		</>
	)
}

export default Carousel
