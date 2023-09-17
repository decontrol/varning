import { programData } from '../data/index.ts'
import Card from './Card.tsx'
import PageTitle from './PageTitle'

const Program = () => {
	return (
		<>
			<PageTitle text='Varning 2023 Program' size={4} />
			<div className='card-container'>
				{programData.map((show) => {
					return <Card key={show._id} show={show} />
				})}
			</div>
		</>
	)
}
export default Program
