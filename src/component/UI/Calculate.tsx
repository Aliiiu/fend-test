import CustomSelect from './CustomSelect';

const Calculate = () => {
	return (
		<section className='container px-4 md:px-[40px] lg:px-[60px] xl:px-[120px] bg-[#FFFFFF]'>
			<div
				data-aos='zoom-in'
				data-aos-offset='240'
				className='rounded-[16px] relative mx-auto p-[24px] lg:p-[48px] top-[-100px] xl:top-[-145px] bg-[#FBFCFE] card_shadow border max-w-[942px]'
			>
				<div className='flex flex-col lg:flex-row gap-y-[32px] lg:gap-y-0 justify-between'>
					<input
						className='text-[#0D0D2B] placeholder-[#0D0D2B] w-full lg:w-auto pr-[200px] text-[20px] bg-transparent py-0 border-b  border-[#E0E0E0] outline-none'
						type='text'
						placeholder='Enter your hash rate'
					/>
					<CustomSelect />
					<button className='bg-[#3671E9] py-[10px] px-[32px]'>
						Calculate
					</button>
				</div>
				<p className='text-[#3671E9] mt-[40px] lg:mt-[80px] mb-[10px]'>
					ESTIMATED 24 HOUR REVENUE:
				</p>
				<h3 className='text-[#0D0D2B]'>
					0.055 130 59 ETH <span className='text-[#3671E9]'>($1275)</span>
				</h3>
				<p className='text-[#828282]'>
					Revenue will change based on mining difficulty and Ethereum price.
				</p>
			</div>
		</section>
	);
};

export default Calculate;
