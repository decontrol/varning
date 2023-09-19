import PageTitle from './PageTitle'

const ThingsToDo = () => {
	const headerClasses = 'text-xl text-red-400 mt-4 mb-1 font-header'
	const liClasses = 'flex justify-between text-sm'
	return (
		<>
			<PageTitle size={5}>Here are things to do in Montreal</PageTitle>
			<div className='things-container w-full mx-auto md:w-[700px]'>
				<h3 className={headerClasses}>Alcohol</h3>
				<ul className='text-white'>
					<li className={liClasses}>
						<strong>Cheval Blanc</strong> (809 Ontario St E)
					</li>
					<li className={liClasses}>
						<strong>L'Espace Public</strong> (3632 Ontario E)
					</li>
					<li className={liClasses}>
						<strong>Dieu du ciel</strong> (29 Avenue Laurier)
					</li>
					<li className={liClasses}>
						<strong>L'Amère A Boire</strong> (2049 St-Denis)
					</li>
				</ul>

				<h3 className={headerClasses}>Food/Poutine</h3>
				<ul className='text-white'>
					<li className={liClasses}>
						<strong>Shawarmaz</strong> (1206 Peel St)
					</li>
					<li className={liClasses}>
						<strong>Le Trèfle Hochelaga</strong> (3971 Ontario E)
					</li>
					<li className={liClasses}>
						<strong>Resto-Bar Le Pick-Up</strong> (3739 Ontario St E)
					</li>
					<li className={liClasses}>
						<strong>Lafleuer</strong> (2620 St-denis / 2120 Ontario E)
					</li>
					<li className={liClasses}>
						<strong>Boustan</strong> (19 Ste-Catherine E / 3417 Ontario St E)
					</li>
					<li className={liClasses}>
						<strong>Aux Vivres</strong> (4631 St Laurent)
					</li>
					<li className={liClasses}>
						<strong>La Panthère Verte</strong> (1735 St-Denis)
					</li>
					<li className={liClasses}>
						<strong>Yuan</strong> (2115 St-Denis)
					</li>
				</ul>

				<h3 className={headerClasses}>Records</h3>
				<ul className='text-white'>
					<li className={liClasses}>
						<strong>Sonik</strong> (4050 Berri)
					</li>
					<li className={liClasses}>
						<strong>Cheap Thrills</strong> (2044 Metcalfe)
					</li>
					<li className={liClasses}>
						<strong>Beatnick Records</strong> (3770 Saint Denis)
					</li>
					<li className={liClasses}>
						<strong>Le Pick-up / LeBackstore</strong> (169 Pins Ave E)
					</li>
					<li className={liClasses}>
						<strong>Pump Up the Volume</strong> (1359 Ontario E)
					</li>
					<li className={liClasses}>
						<strong>Sound Central</strong> (486 Coloniale Ave)
					</li>
					<li className={liClasses}>
						<strong>Aux 33 tours</strong> (1373 Mont-Royal Ave E)
					</li>
				</ul>
			</div>
		</>
	)
}
export default ThingsToDo
