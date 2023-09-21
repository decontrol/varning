import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { banners } from './data/images.ts'

import Program from './components/Program'
import Carousel from './components/Carousel'
import Nav from './components/Nav'
import NotFound from './components/NotFound.tsx'
import ThingsToDo from './components/ThingsToDo.tsx'

function App() {
	const [windowSize, setWindowSize] = useState(0)
	const [navMinimize, setNavMinimize] = useState(true)

	window.onresize = () => {
		setWindowSize(window.innerWidth)
	}

	useEffect(() => {
		document.title = '15 Years of Varning!!! Up The Punx Tabarnac!!!'
		setWindowSize(window.innerWidth)
		windowSize > 1200 ? setNavMinimize(false) : setNavMinimize(true)
	}, [windowSize])

	return (
		<div className='container px-[16px] w-full font-body lg:w-[750px] mx-auto'>
			<Nav navMinimize={navMinimize} />
			{/* <h1 className='header-lg font-header text-zinc-100 text-xl sm:text-4xl md:text-5xl lg:text-6xl mb-4'>
				Varning From Montreal 2023
			</h1> */}

			<img
				src={banners[banners.length - 1]}
				alt='Varning from Montreal 2023'
				className='w-[350px] h-[170px] md:w-[600px] md:h-[300px] lg:w-[750px] lg:h-[350px] object-top object-cover mx-auto my-4 lg:my-6'
			/>
			<ToastContainer
				position='top-center'
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='dark'
			/>
			{/* <h2 className='text-white text-5xl'>windowSize: {windowSize}</h2> */}
			<Routes>
				<Route index element={<Program />}></Route>
				<Route
					path='/posters'
					element={<Carousel windowSize={windowSize} />}
				></Route>
				<Route path='/things' element={<ThingsToDo />}></Route>
				<Route path='*' element={<NotFound />} />
			</Routes>
			<footer>
				<p className='text-sm md:text-md lg:text-lg text-red-400 text-center my-3'>
					&copy; Varning Productions {new Date().getFullYear()}&nbsp;{' '}
					<em>
						Nothing ever burns down by itself every fire needs a little bit of
						help
					</em>
				</p>
			</footer>
		</div>
	)
}

export default App
