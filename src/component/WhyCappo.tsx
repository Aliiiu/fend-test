const WhyCappo = () => {
	return (
		<section className='container relative px-4 md:px-[40px] overflow-hidden lg:px-[60px] lg:pt-[60px] xl:px-[120px] xl:pt-[100px]'>
			<img
				src='/images/rect.png'
				alt=''
				className='absolute hidden xl:block top-[-250px] left-[-155px] rotate-180'
			/>
			<img
				src='/images/rect.png'
				alt=''
				className='absolute hidden xl:block bottom-[-200px] left-[-440px]'
			/>
			<img
				src='/images/semiCircle.png'
				alt=''
				className='absolute hidden xl:block top-[100px] right-[-100px]'
			/>
			<img
				src='/images/uCircle.png'
				alt=''
				className='absolute hidden xl:block bottom-[40px] right-[-100px]'
			/>
			<div className='flex flex-col flex-1 items-center justify-start  lg:w-full md:flex-row gap-[45px] md:gap-[30px] lg:gap-[99px]'>
				<div
					data-aos='fade-up'
					data-aos-offset='120'
					className='flex gap-[24px]'
				>
					<img src='/images/totalFX.svg' alt='' />
					<div className='flex flex-col gap-[4px]'>
						<h3 className=''>$30B</h3>
						<p className='text-[#E0E0E0]'>Digital Currency Exchanged</p>
					</div>
				</div>
				<div
					data-aos='fade-up'
					data-aos-offset='130'
					className='flex gap-[24px]'
				>
					<img src='/images/totalWallet.svg' alt='' />
					<div className='flex flex-col gap-[4px]'>
						<h3 className=''>10M+</h3>
						<p className='text-[#E0E0E0]'>Trusted Wallets Investor</p>
					</div>
				</div>
				<div
					data-aos='fade-up'
					data-aos-offset='150'
					className='flex gap-[24px]'
				>
					<img src='/images/countries.svg' alt='' />
					<div className='flex flex-col gap-[4px]'>
						<h3 className=''>195</h3>
						<p className='text-[#E0E0E0]'>Countries Supported</p>
					</div>
				</div>
			</div>
			<div className='flex flex-col lg:flex-row gap-[70px] items-center py-[50px] lg:py-[100px]'>
				<div
					data-aos='zoom-in'
					data-aos-offset='200'
					className='lg:w-[50%] w-full'
				>
					<img
						src='/images/illustrations2.png'
						alt=''
						width={650}
						height='473px'
					/>
				</div>
				<div
					data-aos='fade-up'
					data-aos-offset='180'
					className='lg:w-[45%] w-full'
				>
					<h2 className=''>Why you should choose CRAPPO</h2>
					<p className='mt-[24px] max-w-[440px]'>
						Experience the next generation cryptocurrency platform. No financial
						borders, extra fees, and fake reviews.
					</p>
					<button className='rounded-[32px] mt-[32px] bg-[#3671E9] py-[16px] px-[24px]'>
						Learn More
					</button>
				</div>
			</div>
		</section>
	);
};

export default WhyCappo;
