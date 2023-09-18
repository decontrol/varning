import PageTitle from './PageTitle'

const ThingsToDo = () => {
	const headerClasses = 'text-xl text-red-400 mt-4 mb-1 font-header'
	return (
		<>
			<PageTitle text='Here are things to do in Montreal' size={5} />
			<h3 className={headerClasses}>Alcohol</h3>
			<ul className='text-white'>
				<li>Cheval Blanc (809 Ontario St E)</li>
				<li>L'Espace Public (3632 Ontario E)</li>
				<li>Dieu du ciel (29 Avenue Laurier)</li>
				<li>L'Amère A Boire (2049 St-Denis)</li>
			</ul>

			<h3 className={headerClasses}>Food/Poutine</h3>
			<ul className='text-white'>
				<li>Lafleuer (2620 St-denis / 2120 Ontario E)</li>
				<li>Boustan (19 Ste-Catherine E / 3417 Ontario St E)</li>
				<li>Aux vivres (4631 St Laurent)</li>
				<li>La Panthère Verte (1735 St-Denis)</li>
				<li>Yuan (2115 St-Denis)</li>
			</ul>

			<h3 className={headerClasses}>Records</h3>
			<ul className='text-white'>
				<li>Sonik (4050 Berri)</li>
				<li>Cheap Thrills (2044 Metcalfe)</li>
				<li>Le Pick-up (169 Pins Ave E)</li>
				<li>Pump Up the Volume (1359 Ontario E)</li>
				<li>Aux 33 tours (1373 Mont-Royal Ave E)</li>
				<li>Sound Central (486 Coloniale Ave)</li>
			</ul>
		</>
	)
}
export default ThingsToDo
