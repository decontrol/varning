import Carousel from './components/Carousel'
import Nav from './components/Nav'
import { useEffect, useState } from 'react'

function App() {
	const [windowSize, setWindowSize] = useState(0)
	const [navMinimize, setNavMinimize] = useState(true)

	window.onresize = () => {
		setWindowSize(window.innerWidth)
	}

	useEffect(() => {
		document.title = '15 Years of Varning!!!'
		setWindowSize(window.innerWidth)
		windowSize > 1200 ? setNavMinimize(false) : setNavMinimize(true)
	}, [windowSize])

	return (
		<div className='w-full lg:w-[958px] mx-auto'>
			<Nav navMinimize={navMinimize} />
			{/* <h3 className='text-zinc-100 text-3xl'>
				{windowSize}{' '}
				{navMinimize ? 'NavMinimize is true' : 'NavMinimize is false'}
			</h3> */}
			<h1 className='header-big text-zinc-100 text-xl sm:text-4xl md:text-5xl lg:text-6xl font-["Special Elite"] my-4'>
				Varning From Montreal 2023
			</h1>
			{/* <h2 className='text-white text-5xl'>windowSize: {windowSize}</h2> */}
			<Carousel windowSize={windowSize} />
		</div>
	)
}

export default App
