import { useState } from 'react';

const OPTIONS = ['TH/s', 'H/s', 'KH/s', 'MH/s', 'GH/s'];
const CustomSelect = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [item, setItem] = useState(0);
	const toggling = () => setIsOpen(!isOpen);

	const handleListKeyDown = (e: any) => {
		switch (e.key) {
			case 'Escape':
				e.preventDefault();
				setIsOpen(false);
				break;
			case 'ArrowUp':
				e.preventDefault();
				setItem(item - 1 >= 0 ? item - 1 : OPTIONS.length - 1);
				break;
			case 'ArrowDown':
				e.preventDefault();
				setItem(item === OPTIONS.length - 1 ? 0 : item + 1);
				break;
			default:
				break;
		}
	};

	const handleKeyDown = (index: any) => (e: any) => {
		switch (e.key) {
			case ' ':
			case 'SpaceBar':
			case 'Enter':
				e.preventDefault();
				setItem(index);
				setIsOpen(false);
				break;
			default:
				break;
		}
	};
	return (
		<div className='custom-select relative'>
			<div
				aria-haspopup='menu'
				onClick={toggling}
				onKeyDown={handleListKeyDown}
				className='flex items-center justify-between cursor-pointer pt-[6px] h-[38px] text-[#0D0D2B] w-full'
			>
				{OPTIONS[item] || 'TH/s'}
				<div className='bg-orange-100'>
					<img src='/images/ArrowDown.svg' alt='' width={16} height='16px' />
				</div>
			</div>
			{isOpen && (
				<div className='absolute top-16 max-w-[200px] w-full text-[#0D0D2B]'>
					<ul
						role={'menu'}
						aria-activedescendant={OPTIONS[item]}
						onKeyDown={handleListKeyDown}
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
								onKeyDown={handleKeyDown(index)}
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
