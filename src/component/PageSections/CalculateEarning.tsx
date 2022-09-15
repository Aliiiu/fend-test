import React from 'react';
import Calculate from '../UI/Calculate';

const CalculateEarning = () => {
	return (
		<>
			<div className='container px-4 md:px-[40px] lg:px-[60px] xl:px-[350px] xl:pt-[100px] pb-[120px] xl:pb-[219px] '>
				<h2 data-aos='fade-up' data-aos-offset='220' className='text-center'>
					Check how much you can earn
				</h2>
				<p
					data-aos='fade-down'
					data-aos-offset='230'
					className='lg:mt-[24px] mt-[16px] max-w-[622px] mx-auto text-center'
				>
					Let’s check your hash rate to see how much you will earn today,
					Exercitation veniam consequat sunt nostrud amet.
				</p>
			</div>
			<Calculate />
		</>
	);
};

export default CalculateEarning;
