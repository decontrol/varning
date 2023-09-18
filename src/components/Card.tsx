type CardProps = {
	show: {
		date: string
		venue: string
		price: string
		startTime: string
		bands: {
			name: string
			link: string
			timeSlot: string
		}[]
	}
}

const Card = ({ show }: CardProps) => {
	return (
		<div className='card mb-6 text-center'>
			<h3 className='text-lg text-red-400 mb-1 font-header'>{show.date}</h3>
			<p className='text-sm text-bold text-white mb-4'>
				{show.venue}
				<br />
				{show.price} / {show.startTime}
			</p>
			<ul className='day-program'>
				{show.bands.map((band, i) => {
					return (
						<li
							key={band.timeSlot}
							className={`flex px-4 py-2 justify-between mb-1 ${
								i % 2 === 0 ? 'bg-[#111]' : 'bg-transparent'
							}`}
						>
							<strong className='text-white'>
								<a href={band.link}>{band.name}</a>
							</strong>
							<p className='text-white'>{band.timeSlot}</p>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
export default Card
