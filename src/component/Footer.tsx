const Footer = () => {
	return (
		<footer className=' bg-[#0D0D2B]'>
			<div className='container bg-[#0D0D2B] px-4 md:px-[40px] lg:px-[60px] py-[40px] xl:px-[120px] xl:pt-[80px]'>
				<div className='flex flex-col justify-between lg:flex-row'>
					<div className='mx-auto lg:mx-0'>
						<img src='/images/Logo.svg' alt='' width={135} height='40px' />
					</div>
					<div className='flex flex-col md:flex-row mt-[18px] lg:mt-0 gap-[50px] xl:gap-[125px]'>
						<div className='flex justify-center gap-[20px] xl:gap-[80px]'>
							<div className='flex-1'>
								<h5 className='text-[18px] sm:text-[20px] mb-[12px] lg:mb-[24px] font-medium'>
									Quick Link
								</h5>
								<div className='flex flex-col w-full gap-[10px]'>
									<p>Home</p>
									<p>Product</p>
									<p>About</p>
									<p>Features</p>
									<p>Contact</p>
								</div>
							</div>
							<div>
								<h5 className='text-[18px] sm:text-[20px]  mb-[12px] lg:mb-[24px] font-medium'>
									Resources
								</h5>
								<div className='flex flex-col gap-[10px]'>
									<p>Download Whitepapper</p>
									<p> Smart Token</p>
									<p> Blockchain Explorer</p>
									<p> Crypto API</p>
									<p> Interest</p>
								</div>
							</div>
						</div>
						<div>
							<h3 className='mb-[40px] text-[15px] max-w-[352px] text-center mx-auto lg:text-[30px] font-medium'>
								We accept following payment systems
							</h3>
							<div className='flex items-center justify-center gap-2 overflow-clip md:gap-6'>
								<img src='/images/Visa.svg' alt='' />
								<img src='/images/Mastercard.svg' alt='' />
								<img src='/images/Bitcoin.svg' alt='' />
							</div>
						</div>
					</div>
				</div>
				<div className='flex flex-col md:flex-row justify-between items-center mt-[40px] lg:mt-[60px] xl:mt-[100px]'>
					<p className='text-[16px] mb-[15px] lg:text-[18px]'>
						©2021 CRAPPO. All rights reserved
					</p>
					<div className='flex gap-[32px]'>
						<img src='/images/facebook.svg' alt='' width={24} height='24px' />
						<img src='/images/instagram.svg' alt='' width={24} height='24px' />
						<img src='/images/youtube.svg' alt='' width={24} height='24px' />
						<img src='/images/twitter.svg' alt='' width={24} height='24px' />
						<img src='/images/linkedin.svg' alt='' width={24} height='24px' />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
