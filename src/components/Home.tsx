import PageTitle from './PageTitle';
import { banners } from '../data/images';

const Home = () => {
	return (
		<>
			<PageTitle>Welcome to A Varning From Montreal 2024</PageTitle>
			<div className='card-container'>
				<p className='text-white text-center'>
					Tickets/passes are available &nbsp;
					<a
						className='underline'
						href='https://thepointofsale.com/tickets/varningfestival2024'
						target='_blank'>
						here
					</a>
				</p>
				<img className='w-full max-w-3xl mx-auto' src={banners[0]} alt='' />
			</div>
		</>
	);
};
export default Home;
