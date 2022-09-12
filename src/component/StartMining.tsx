import React from 'react';

const StartMining = () => {
	return (
		<div className='container px-4 py-[40px] md:px-[40px] lg:px-[60px] xl:px-[120px] lg:py-[80px]'>
			<div
				data-aos='zoom-in'
				data-aos-offset='330'
				className='rounded-[16px] bg-[#3671E9] flex flex-col lg:flex-row gap-y-[32px] justify-between items-center bg-vector p-[24px] lg:p-[48px]'
			>
				<div className='flex-1 w-full'>
					<h3 className='mb-[10px]'>Start mining now</h3>
					<p className='max-w-[348px] lg:max-w-[300px]'>
						Join now with CRAPPO to get the latest news and start mining now
					</p>
				</div>
				<form className='flex flex-col flex-1 w-full lg:flex-row gap-[20px]'>
					<input
						className='text-white xl:max-w-[350px] text-[18px] w-full placeholder-white bg-transparent border-b  border-[#E0E0E0] outline-none'
						type='text'
						placeholder='Enter your mail'
					/>
					<button className='bg-white text-[#0D0D2B] max-w-[150px] mx-auto font-medium py-[8px] px-[32px] rounded-[32px]'>
						Subscribe
					</button>
				</form>
			</div>
		</div>
	);
};

export default StartMining;
