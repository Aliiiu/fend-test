import { useState } from 'react';

const OPTIONS = ['TH/s', 'H/s', 'KH/s', 'MH/s', 'GH/s'];
const CustomSelect = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [item, setItem] = useState(0);
	const toggling = () => setIsOpen(!isOpen);

	return (
		<div className='relative custom-select'>
			<div
				aria-haspopup='menu'
				onClick={toggling}
				className='flex items-center justify-between cursor-pointer pt-[6px] h-[38px] text-[#0D0D2B] w-full'
			>
				{OPTIONS[item] || 'TH/s'}
				<div className='bg-orange-100'>
					<img src='/svgs/ArrowDown.svg' alt='' width={16} height='16px' />
				</div>
			</div>
			{isOpen && (
				<div className='absolute top-16 max-w-[200px] w-full text-[#0D0D2B]'>
					<ul
						role={'menu'}
						aria-activedescendant={OPTIONS[item]}
						className={`options ${isOpen ? 'show' : ''}`}
						tabIndex={-1}
					>
						{OPTIONS.map((option, index) => (
							<li
								role={option}
								onClick={() => {
									setItem(index);
									setIsOpen(false);
								}}
								aria-selected={item === index}
								key={option}
								tabIndex={0}
							>
								{option}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default CustomSelect;
