import React, { useState } from 'react';

const CryptoCurrency = () => {
	const [selected, setSelected] = useState(0);

	const CRYPTOCURRENCIES = [
		{
			img: '/svgs/btc.svg',
			name: 'bitcoin',
			tag: 'BTC',
			desc: 'Digital currency in which a record of transactions is maintained.',
		},
		{
			img: '/svgs/eth.svg',
			name: 'ethereum',
			tag: 'eth',
			desc: 'Blockchain technology to create and run decentralized digital applications.',
		},
		{
			img: '/svgs/ltc.svg',
			name: 'litecoin',
			tag: 'ltc',
			desc: 'Cryptocurrency that enables instant payments to anyone in the world.',
		},
	];
	return (
		<div>
			<h2
				data-aos='zoom-in'
				data-aos-offset='260'
				className='text-center text-[#0D0D2B]'
			>
				Trade securely and market the high growth cryptocurrencies.
			</h2>
			<div className='flex flex-col lg:flex-row mt-[64px] gap-[45px]'>
				{CRYPTOCURRENCIES.map((coin, idx) => (
					<div
						key={idx}
						onClick={() => setSelected(idx)}
						className={`card_shadow cursor-pointer w-full overflow-hidden rounded-[16px]`}
					>
						<div
							className={`${
								selected === idx
									? 'bg-[#2B076E] text-[#FFFF]'
									: 'bg-white text-[#0D0D2B]'
							}  card_shadow cursor-pointer w-full h-full py-[48px] px-[24px]`}
						>
							<div
								className={`${
									selected === idx ? 'flip' : ''
								} mx-auto w-max mb-[48px]`}
							>
								<img src={coin.img} alt='' />
							</div>
							<h3
								className={`${
									selected === idx ? 'flip' : ''
								} text-center capitalize`}
							>
								{coin.name}
								<span
									className={`${
										selected === idx ? 'flip' : ''
									} font-normal uppercase ml-2 text-[18px] text-[#BDBDBD]`}
								>
									{coin.tag}
								</span>
							</h3>
							<p
								className={`${
									selected === idx ? 'flip' : ''
								} text-center text-[#BDBDBD] mt-[12px]`}
							>
								{coin.desc}
							</p>
							{selected === idx ? (
								<button className='bg-[#3671E9] mx-auto mt-[24px] flex gap-[24px] py-[16px] pr-[16px] pl-[24px] rounded-[32px]'>
									Start mining
									<img
										src='/svgs/ArrowRight.svg'
										alt=''
										width={24}
										height='24px'
									/>
								</button>
							) : (
								<div className='mx-auto mt-[24px] w-max'>
									<img src='/svgs/right.svg' alt='' />
								</div>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default CryptoCurrency;
