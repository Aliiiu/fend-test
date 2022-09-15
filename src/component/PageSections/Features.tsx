const FEATURES = [
	{
		title: 'Invest Smart',
		content: `Get full statistic information about the behaviour of buyers and sellers will help you to make the decision. `,
		img: '/images/Chart.png',
	},
	{
		title: 'Detailed Statistics',
		content: `View all mining related information in realtime, at any point at any location and decide which polls you want to mine in.`,
		img: '/images/Statistic.png',
	},
	{
		title: 'Grow your profit and track your investments',
		content: `Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments.`,
		img: '/images/Table.png',
	},
];

const Features = () => {
	return (
		<div className='container relative py-[50px] lg:py-[80px]'>
			<img
				src='/images/o.png'
				alt=''
				className='absolute top-[-50px] hidden lg:block left-[50px]'
			/>
			<img
				src='/images/o-1.png'
				alt=''
				className='absolute bottom-[0px] hidden lg:block right-0'
			/>
			<div
				data-aos='zoom-in'
				data-aos-offset='280'
				className='max-w-[758px] mx-auto'
			>
				<h2 className='text-center text-white'>
					Market sentiments, portfolio, and run the infrastructure of your
					choice
				</h2>
			</div>
			{FEATURES.map((item, idx) => (
				<div
					key={idx}
					className={`flex flex-col text-white gap-[80px] mt-[110px] ${
						idx === 1
							? 'xl:pr-[120px] md:px-[40px] lg:px-[60px] px-4 lg:flex-row-reverse'
							: 'px-4 md:px-[40px] lg:px-[60px] lg:flex-row xl:px-[120px]'
					}`}
				>
					<div className='max-w-[500px] lg:w-full'>
						<h3
							data-aos='fade-in'
							data-aos-offset='285'
							className='mb-[16px] capitalize'
						>
							{item.title}
						</h3>
						<p data-aos='fade-in' data-aos-offset='290'>
							{item.content}
						</p>
						<button
							data-aos='zoom-in'
							data-aos-offset='290'
							className='bg-[#3671E9] mt-[32px] py-[16px] px-[32px] rounded-[32px]'
						>
							Learn More
						</button>
					</div>
					<div data-aos='zoom-in' data-aos-offset='300'>
						<img src={item.img} alt='' />
					</div>
				</div>
			))}
		</div>
	);
};

export default Features;
