import { Route, Routes } from 'react-router-dom'
import Carousel from './components/Carousel'
import Nav from './components/Nav'
import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import Program from './components/Program'
import { banners } from './data/images.ts'

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
		<div className='container px-[16px] w-full font-body lg:w-[958px] mx-auto'>
			<Nav navMinimize={navMinimize} />
			{/* <h1 className='header-lg font-header text-zinc-100 text-xl sm:text-4xl md:text-5xl lg:text-6xl mb-4'>
				Varning From Montreal 2023
			</h1> */}

			<img src={banners[banners.length - 2]} alt='Varning from Montreal 2023' />
			<ToastContainer
				position='top-center'
				autoClose={2000}
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
				<Route index element={<Carousel windowSize={windowSize} />}></Route>
				<Route path='/program' element={<Program />}></Route>
				{/* <Route path='/edit/:id' element={<EditPage />}></Route> */}
			</Routes>
		</div>
	)
}

export default App
