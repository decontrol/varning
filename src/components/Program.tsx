import { programData } from '../data/index.ts';
import Card from './Card.tsx';
import PageTitle from './PageTitle';

const Program = () => {
	return (
		<>
			<PageTitle>2024 Program</PageTitle>
			<div className='card-container'>
				<p className='text-white text-sm text-center mb-3'>(*Click the name to check out bands)</p>
				{programData.map((show) => {
					return (
						<div key={show._id} className='md:flex md:gap-4 mb-4'>
							<img
								src={show.poster.img}
								alt={show.poster.description}
								className='w-full md:w-1/2'
							/>
							<Card show={show} />
						</div>
					);
				})}
			</div>
		</>
	);
};
export default Program;
