import { useEffect, useState } from 'react'

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
			<h1>This is the Nav</h1>
			<ul>
				<li className='text-zinc-100'>Posters</li>
				<li className='text-zinc-100'>Program</li>
				<li className='text-zinc-100'>Contact</li>
			</ul>
		</nav>
	)
}
export default Nav
