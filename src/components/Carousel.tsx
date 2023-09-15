import { useState } from 'react'
import { banners } from '../data/images.ts'
import { carouselData } from '../data/index.ts'
import CarouselButton from './CarouselButton'

const Carousel = () => {
	const [slideCount, setSlideCount] = useState(0)

	const slideLength = 7

	const handleClickNext = () => {
		if (slideCount < slideLength) setSlideCount(slideCount + 1)
	}

	const handleClickPrev = () => {
		if (slideCount > 0) setSlideCount(slideCount - 1)
	}

	return (
		<div className='carousel-container bg-slate-600'>
			<div className='image-container h-full text-zinc-400 max-h-[500px] flex flex-row overflow-hidden'>
				{carouselData.map((item, i) => {
					return (
						<div key={item._id} className='w-full shrink-0 inline-block'>
							<img
								src={banners[i]}
								alt={item.description}
								className='w-full shrink-0 h-[500px] object-cover'
							/>
						</div>
					)
				})}
				{/* <img
					src={banners[0]}
					alt=''
					className='w-full h-[500px] object-cover'
				/> */}
			</div>
			<div>Current Slide: {slideCount}</div>
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
	)
}

export default Carousel
