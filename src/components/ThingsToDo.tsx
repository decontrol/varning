import { thingsData } from '../data/index.ts'
import PageTitle from './PageTitle'

const ThingsToDo = () => {
	const headerClasses = 'text-xl text-red-400 mt-4 mb-1 font-header'
	const businessClasses = 'flex justify-between text-md'

	const things = thingsData.map((thing) => {
		return (
			<div key={thing._id} className='mb-10'>
				<h3 className={headerClasses}>{thing.category}</h3>
				<ul>
					{thing.businesses.map((business, i) => {
						return (
							<li
								key={business._id}
								className={`mb-5 px-4 py-2 rounded-md ${
									i % 2 === 0 ? 'bg-[#222]' : 'bg-transparent'
								}`}
							>
								<div className={businessClasses}>
									<strong className='text-lg'>{business.name}</strong>{' '}
									<em className='text-sm'>{business.address}</em>
								</div>
								<p>{business.desc}</p>
							</li>
						)
					})}
				</ul>
			</div>
		)
	})

	return (
		<>
			<PageTitle size={5}>Here are things to do in Montreal</PageTitle>
			<div className='things-container text-white'>{things}</div>
		</>
	)
}
export default ThingsToDo
