export const carouselData = [
	{
		_id: 1,
		description: '',
		img: '../assets/images/carousel/img1.jpg',
	},
	{
		_id: 2,
		description: '',
		img: '../assets/images/carousel/img2.jpg',
	},
	{
		_id: 3,
		description: '',
		img: '../assets/images/carousel/img3.jpg',
	},
	{
		_id: 4,
		description: '',
		img: '../assets/images/carousel/img4.jpg',
	},
	{
		_id: 5,
		description: '',
		img: '../assets/images/carousel/img5.jpg',
	},
	{
		_id: 6,
		description: '',
		img: '../assets/images/carousel/img6.jpg',
	},
	{
		_id: 7,
		description: '',
		img: '../assets/images/carousel/img7.jpg',
	},
]

const addEmptyLinks = () => {
	programData.map(() => {})
}

addEmptyLinks

export const programData = [
	{
		_id: 1,
		date: 'Thursday Main Show September 21st',
		venue: 'Piranha Bar Basement (680 Saint-Catherine St W)',
		price: '$25',
		startTime: 'Doors: 6:30pm - Show: 7:00pm',
		bands: [
			{
				name: 'No Fucker',
				link: 'https://www.maximumrocknroll.com/we-got-ways-2/',
				timeSlot: '11:25pm - 12:10am',
			},
			{
				name: 'N.i.g.h.t.f.e.e.d.e.r',
				link: 'https://nightfeeder.bandcamp.com/album/cut-all-of-your-face-off',
				timeSlot: '10:35pm - 11:10pm',
			},
			{
				name: 'Cartridge',
				link: '',
				timeSlot: '9:50pm - 10:20pm',
			},
			{
				name: 'Uzu',
				link: '',
				timeSlot: '9:15pm - 9:35pm',
			},
			{
				name: 'Lathe of Heaven',
				link: '',
				timeSlot: '8:25pm - 9:00pm',
			},
			{
				name: 'Tenaz',
				link: '',
				timeSlot: '7:40pm - 8:10pm',
			},
			{
				name: 'Street Gloves',
				link: '',
				timeSlot: '7:00pm - 7:25pm',
			},
		],
	},
	{
		_id: 2,
		date: 'Friday Matinee Show September 22nd',
		venue: "L'Achoppe (1800 Letourneux St.)",
		price: '$15',
		startTime: 'Doors: 2:00pm - Show: 2:30pm',
		bands: [
			{
				name: 'Battery March',
				link: '',
				timeSlot: '3:50pm - 4:20pm',
			},
			{
				name: 'Total Nada',
				link: '',
				timeSlot: '3:10pm - 3:35pm',
			},
			{
				name: 'Beef',
				link: '',
				timeSlot: '2:30pm - 2:55pm',
			},
		],
	},
	{
		_id: 3,
		date: 'Friday Main Show September 22nd',
		venue: 'Piranha Bar Basement (680 Saint-Catherine St W)',
		price: '$30',
		startTime: 'Doors: 6:30 - Show: 7:00pm',
		bands: [
			{
				name: 'Cuir',
				link: '',
				timeSlot: '12:15am - 12:55am',
			},
			{
				name: 'Salvaje Punk',
				link: '',
				timeSlot: '11:25pm - 12:00am',
			},
			{
				name: 'Perestroika',
				link: '',
				timeSlot: '10:35pm - 11:10pm',
			},
			{
				name: 'Hysteric Polemix',
				link: '',
				timeSlot: '9:45pm - 10:20pm',
			},
			{
				name: 'Ultra Razzia',
				link: '',
				timeSlot: '9:00pm - 9:30pm',
			},
			{
				name: 'Ilusión',
				link: '',
				timeSlot: '8:15pm - 8:45pm',
			},
			{
				name: 'Over The Hill',
				link: '',
				timeSlot: '7:30pm - 8:00pm',
			},
		],
	},
	{
		_id: 4,
		date: 'Saturday Matinee Show September 23rd',
		venue: "L'Achoppe (1800 Letourneux St.)",
		price: '$15',
		startTime: 'Doors: 2:00pm - Show: 2:30pm',
		bands: [
			{
				name: 'Vestigio',
				link: '',
				timeSlot: '4:40pm - 5:15pm',
			},
			{
				name: 'Ratpiss',
				link: '',
				timeSlot: '3:55pm - 4:25pm',
			},
			{
				name: 'Leash Aggression',
				link: '',
				timeSlot: '3:10pm - 3:40pm',
			},
			{
				name: 'The Nod',
				link: '',
				timeSlot: '2:30pm - 2:55pm',
			},
		],
	},
	{
		_id: 5,
		date: 'Saturday Main Show September 23rd',
		venue: 'Piranha Bar Basement (680 Saint-Catherine St W)',
		price: '$30',
		startTime: 'Doors: 6:30 - Show: 7:00pm',
		bands: [
			{
				name: '	Meanwhile',
				link: '',
				timeSlot: '12: 25am - 01: 10am',
			},
			{
				name: 'End Of Pollution',
				link: '',
				timeSlot: '11: 25pm - 12: 10am',
			},
			{
				name: 'Decomp',
				link: '',
				timeSlot: '10: 35pm - 11: 10pm',
			},
			{
				name: 'Unknown Liberty',
				link: '',
				timeSlot: '9: 50pm - 10: 20pm',
			},
			{
				name: 'Global Holocaust',
				link: '',
				timeSlot: '9: 15pm - 9: 35pm',
			},
			{
				name: 'The Lousy',
				link: '',
				timeSlot: '8: 25pm - 9:00pm',
			},
			{
				name: 'Fractured',
				link: '',
				timeSlot: '7: 40pm - 8: 10pm',
			},
			{
				name: 'A.T.E.R.',
				link: '',
				timeSlot: '7:00pm - 7: 25pm',
			},
		],
	},
	{
		_id: 6,
		date: 'Saturday After Show September 23rd (Sunday 24th)',
		venue: 'Traxide (Ask A Punk)',
		price: '$15',
		startTime: 'Doors: 1:30am - Show: 1:45am',
		bands: [
			{
				name: 'Last Agony',
				link: '',
				timeSlot: '4:00am - 4:35am',
			},
			{
				name: 'Agravio',
				link: '',
				timeSlot: '3:10am - 3:45am',
			},
			{
				name: 'Zeal',
				link: '',
				timeSlot: '2:25am - 2:55pm',
			},
			{
				name: 'Ordinance',
				link: '',
				timeSlot: '1:45am - 2:10am',
			},
		],
	},
]
