type CardProps = {
	show: {
		date: string
		venue: string
		price: string
		startTime: string
		bands: {
			name: string
			timeSlot: string
		}[]
	}
}

const Card = ({ show }: CardProps) => {
	return (
		<div className='card my-6'>
			<h3 className='text-lg text-red-400 mb-1 font-display'>{show.date}</h3>
			<p className='text-sm text-bold text-red-200 mb-4'>
				{show.venue}
				<br />
				{show.price} {show.startTime}
			</p>
			<ul>
				{show.bands.map((band, i) => {
					return (
						<li
							key={band.timeSlot}
							className={`flex px-4 py-2 justify-between mb-1 ${
								i % 2 === 0 ? 'bg-gray-900' : 'bg-transparent'
							}`}
						>
							<strong className='text-white'>{band.name}</strong>
							<p className='text-white'>{band.timeSlot}</p>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
export default Card
