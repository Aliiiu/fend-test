import { useEffect, useState } from 'react';

const WhyCappo = () => {
	let [currency, setCurrency] = useState(0);
	const [countries, setCountries] = useState(0);
	let [wallets, setWallets] = useState(0);

	// function counter(item, type, digit, time) {
	// 	counts = item;
	// 	item = setInterval(updated, time);
	// 	let start = 0;

	// 	function updated() {
	// 		type.innerHTML = ++start;
	// 		if (start === digit) {
	// 			clearInterval(item);
	// 		}
	// 	}
	// }
	// function callCounter() {
	// 	counter(counts, currency, 30, 60);
	// 	counter(counts, wallets, 10, 200);
	// 	counter(counts, countries, 195, 15);
	// }

	const startCounter = () => {
		setInterval(() => {
			if (currency <= 30) setCurrency((prevState) => prevState + 1);
			if (wallets <= 10) setWallets((prevState) => prevState + 1);
			if (countries <= 195) setCountries((prevState) => prevState + 1);
		}, 0.1);
	};
	const stopCounter = () => {
		if (currency >= 30) {
			clearInterval(currency);
		}
		if (wallets >= 10) clearInterval(wallets);
		if (countries >= 10) clearInterval(wallets);
	};

	useEffect(() => {
		let start = 0;
		window.addEventListener('load', () => {
			const timer = setInterval(() => {
				// if (currency <= 30) setCurrency(currency++);
				setWallets(start++);
				if (start === 10) {
					console.log('yes', start);
					clearInterval(timer);
				}
				// if (countries <= 195) setWallets((prevState) => prevState + 1);
			}, 0.1);
		});
	}, []);
	// useEffect(() => {
	// 	window.addEventListener('load', () => {
	// 		setInterval(() => {
	// 			if (currency <= 30) setCurrency(currency++);
	// 			if (wallets <= 10) setWallets((prevState) => prevState + 1);
	// 			if (countries <= 195) setWallets((prevState) => prevState + 1);
	// 		}, 0.1);
	// 	});

	// 	return () =>
	// 		window.removeEventListener('load', () => {
	// 			if (currency >= 30) {
	// 				clearInterval(currency);
	// 			}
	// 			if (wallets >= 10) clearInterval(wallets);
	// 			if (countries >= 195) clearInterval(countries);
	// 		});
	// }, []);
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
			<div className='flex flex-col flex-1 items-center justify-center lg:w-full md:flex-row gap-[45px] md:gap-[30px] lg:gap-[99px]'>
				<div
					data-aos='fade-up'
					data-aos-offset='120'
					className='flex gap-[24px] max-w-[330px] w-full'
				>
					<img src='/svgs/totalFX.svg' alt='' />
					<div className='flex flex-col gap-[4px]'>
						<h3 className=''>30B</h3>
						<p className='text-[#E0E0E0]'>Digital Currency Exchanged</p>
					</div>
				</div>
				<div
					data-aos='fade-up'
					data-aos-offset='130'
					className='flex gap-[24px] max-w-[330px] w-full'
				>
					<img src='/svgs/totalWallet.svg' alt='' />
					<div className='flex flex-col gap-[4px]'>
						<h3 className=''>10M+</h3>
						<p className='text-[#E0E0E0]'>Trusted Wallets Investor</p>
					</div>
				</div>
				<div
					data-aos='fade-up'
					data-aos-offset='150'
					className='flex gap-[24px] max-w-[330px] w-full'
				>
					<img src='/svgs/countries.svg' alt='' />
					<div className='flex flex-col gap-[4px]'>
						<h3 className=''>193</h3>
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
					<img src='./images/Illustrations2.png' alt='' />
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
					<button className='rounded-[32px] mt-[32px] bg-[#3671E9] py-[10px] px-[24px]'>
						Learn More
					</button>
				</div>
			</div>
		</section>
	);
};

export default WhyCappo;
