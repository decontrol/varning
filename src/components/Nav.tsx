import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Hamburger from 'hamburger-react'

type NavProps = {
	navMinimize: boolean
}

const Nav = ({ navMinimize }: NavProps) => {
	const [classes, setClasses] = useState('')
	const [isOpen, setOpen] = useState(false)

	useEffect(() => {
		setClasses(
			`nav fixed top-0 right-0 z-10 bg-red-600 bg-opacity-60 px-3 py-1 transition-all duration-500 ease-in-out
      ${navMinimize ? 'mini-nav' : 'full-nav'} ${
				isOpen ? 'bg-opacity-95 w-full' : ''
			}`
		)
	}, [isOpen])

	const navClasses = 'text-zinc-100 text-lg'

	return (
		<nav className={classes}>
			<Hamburger color='#fff' toggled={isOpen} toggle={setOpen} size={24} />
			{isOpen && (
				<ul className='flex justify-evenly mb-2 mt-[-37px] mx-6'>
					<li className={navClasses}>
						<Link onClick={() => setOpen(false)} to='/'>
							Program
						</Link>
					</li>

					<li className={navClasses}>
						<Link onClick={() => setOpen(false)} to='/posters'>
							Posters
						</Link>
					</li>

					<li className={navClasses}>
						<Link onClick={() => setOpen(false)} to='/things'>
							Things
						</Link>
					</li>
				</ul>
			)}
		</nav>
	)
}
export default Nav
