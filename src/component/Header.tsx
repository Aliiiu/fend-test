import { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';

const Header = () => {
	const [showMenu, setShowMenu] = useState(false);
	return (
		<div className='container px-4 py-4 md:px-[40px] md:py-[20px] lg:px-[60px] xl:px-[120px] xl:pt-[30px]'>
			<header className='flex items-center justify-between'>
				<img src='/images/Logo.svg' alt='' width={135} height='40px' />
				<nav className='hidden lg:block'>
					<div className='flex gap-[40px]'>
						<ul className='flex font-normal items-center gap-[32px]'>
							<li>Products</li>
							<li>Features</li>
							<li>About</li>
							<li>Contact</li>
						</ul>
						<div className='flex gap-[10px] items-center'>
							<a href='/' className='my-0'>
								Login
							</a>
							<div className='w-[24px] h-[1px] bg-[#F2F2F2] bg-opacity-30 rotate-90'></div>
							<button className='bg-[#3671E9] py-[14px] px-[32px]'>
								Register
							</button>
						</div>
					</div>
				</nav>
				<button onClick={() => setShowMenu(true)} className='lg:hidden'>
					{/* <img src='/images/Mastercard.svg' alt='' /> */}
					<HiMenu className='text-[30px]' />
				</button>
			</header>
			{showMenu && (
				<div className='fixed h-screen bg-[#0d0d2b] w-full top-0 z-30 transition-all ease-in duration-500'>
					<nav className='flex items-center justify-center h-full'>
						<IoMdClose
							className='absolute top-7 right-10 text-[30px]'
							onClick={() => setShowMenu(false)}
						/>
						<ul className='flex flex-col items-center justify-center space-y-8'>
							<li className='text-[20px]'>Products</li>
							<li className='text-[20px]'>Features</li>
							<li className='text-[20px]'>About</li>
							<li className='text-[20px]'>Contact</li>
							<div className='flex gap-[5px] items-center'>
								<a href='/' className='my-0'>
									Login
								</a>
								<div className='w-[24px] h-[1px] bg-[#F2F2F2] bg-opacity-30 rotate-90'></div>
								<button className='bg-[#3671E9] py-[10px] px-[24px]'>
									Register
								</button>
							</div>
						</ul>
					</nav>
				</div>
			)}
		</div>
	);
};

export default Header;
