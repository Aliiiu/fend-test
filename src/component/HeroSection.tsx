const HeroSection = () => {
	return (
		<div className='flex flex-col lg:flex-row w-[100%] container px-4 py-4 md:px-[40px] lg:px-[60px] overflow-hidden xl:px-[120px] xl:pt-[60px] relative'>
			<img
				src='./images/rect.png'
				alt=''
				className='absolute bottom-[-150px] right-[-260px] hidden xl:block'
			/>
			<img
				src='./images/rect.png'
				alt=''
				className='absolute bottom-[-120px] left-[250px] hidden xl:block'
			/>
			<div className='lg:w-[50%] w-full lg:pt-[30px] xl:pt-[53px] xl:pb-[89px]'>
				<div className='rounded-[32px] bg-[#FFFFFF] bg-opacity-10 text-[10px] sm:text-[16px] w-max py-[4px] pr-[11px]'>
					<span
						data-aos='zoom-in'
						data-aos-offset='50'
						className='rounded-[32px] bg-[#FFFFFF] w-max text-[#0D0D2B] py-[4px] px-[16px] mr-[16px]'
					>
						75% SAVE
					</span>
					For the Black Friday weekend
				</div>
				<h1
					data-aos='fade-up'
					data-aos-offset='80'
					className='my-[24px] text-white max-w-[580px] xl:leading-[70px]'
				>
					Fastest & secure platform to invest in crypto
				</h1>
				<p
					data-aos='fade-up'
					data-aos-offset='100'
					className='text-[16px] max-w-[435px] text-[#E0E0E0]'
				>
					Buy and sell cryptocurrencies, trusted by 10M wallets with over $30
					billion in transactions.
				</p>
				<button
					data-aos='fade-up'
					data-aos-offset='100'
					className='bg-[#3671E9] mt-[32px] flex items-center gap-[24px] py-[16px] pr-[16px] pl-[24px] rounded-[32px]'
				>
					Try for FREE <img src='./images/ArrowRight.svg' alt='' />
				</button>
			</div>
			<div
				data-aos='fade-up'
				data-aos-offset='110'
				className='lg:w-[50%] w-full  xl:pt-[0px] xl:pb-[61px]'
			>
				<img src='./images/illustration.png' alt='' />
			</div>
		</div>
	);
};

export default HeroSection;
