import React, { useState } from 'react';

const CryptoCurrency = () => {
	const [selected, setSelected] = useState(0);

	const CRYPTOCURRENCIES = [
		{
			img: '/images/btc.svg',
			name: 'bitcoin',
			tag: 'BTC',
			desc: 'Digital currency in which a record of transactions is maintained.',
		},
		{
			img: '/images/eth.svg',
			name: 'ethereum',
			tag: 'eth',
			desc: 'Blockchain technology to create and run decentralized digital applications.',
		},
		{
			img: '/images/ltc.svg',
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
						data-aos='flip-left'
						data-aos-offset='270'
						key={idx}
						onClick={() => setSelected(idx)}
						className={`${
							selected === idx
								? 'bg-[#2B076E] text-[#FFFF]'
								: 'bg-white text-[#0D0D2B]'
						}  card_shadow cursor-pointer w-full py-[48px] px-[24px] rounded-[16px]`}
					>
						<div className='mx-auto w-max mb-[48px]'>
							<img src={coin.img} alt='' width={80} height='80px' />
						</div>
						<h3 className='text-center capitalize'>
							{coin.name}
							<span className='font-normal uppercase ml-2 text-[18px] text-[#BDBDBD]'>
								{coin.tag}
							</span>
						</h3>
						<p className='text-center text-[#BDBDBD] mt-[12px]'>{coin.desc}</p>
						{selected === idx ? (
							<button className='bg-[#3671E9] mx-auto mt-[24px] flex gap-[24px] py-[16px] pr-[16px] pl-[24px] rounded-[32px]'>
								Start mining
								<img
									src='/images/ArrowRight.svg'
									alt=''
									width={24}
									height='24px'
								/>
							</button>
						) : (
							<div className='mx-auto mt-[24px] w-max'>
								<img src='/images/right.svg' alt='' width={64} height='64px' />
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default CryptoCurrency;