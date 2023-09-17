import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

type NavProps = {
	navMinimize: boolean
}

const Nav = ({ navMinimize }: NavProps) => {
	const [classes, setClasses] = useState('')

	useEffect(() => {
		setClasses(`nav ${navMinimize ? 'mini-nav' : 'full-nav'}`)
	}, [navMinimize])

	return (
		<nav className={classes}>
			<ul>
				<li className='text-zinc-100'>
					<Link to='/'>Posters</Link>
				</li>
				<li className='text-zinc-100'>
					<Link to='/program'>Program</Link>
				</li>
			</ul>
		</nav>
	)
}
export default Nav
