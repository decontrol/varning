import { programData } from '../data/index.ts'
import Card from './Card.tsx'
import PageTitle from './PageTitle'

const Program = () => {
	return (
		<>
			<PageTitle text='Varning 2023 Program' size={5} />
			<div className='card-container'>
				<p className='text-white text-sm text-center mb-3'>
					(*Click the name to check out bands)
				</p>
				{programData.map((show) => {
					return <Card key={show._id} show={show} />
				})}
			</div>
		</>
	)
}
export default Program
