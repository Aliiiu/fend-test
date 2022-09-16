import { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import Button from '../UI/Button';

const Header = () => {
	const [showMenu, setShowMenu] = useState(false);
	return (
		<div className='container px-4 py-4 md:px-[40px] md:py-[20px] lg:px-[60px] xl:px-[120px] xl:pt-[30px]'>
			<header className='flex items-center justify-between'>
				<a href="'">
					<img src='/svgs/Logo.svg' alt='' />
				</a>
				<nav>
					<div className='hidden lg:flex lg:visible gap-[40px]'>
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
							<Button styles='bg-buttonBlue'>Register</Button>
						</div>
					</div>
				</nav>
				<Button onClick={() => setShowMenu(true)} styles='lg:hidden px-0 py-0'>
					<HiMenu className='text-[30px]' />
				</Button>
			</header>
			<div
				className={`fixed ${
					showMenu ? '-right-0' : '-right-full'
				} h-screen bg-[#0d0d2b] w-full top-0 z-30 transition-all ease-in duration-500`}
			>
				<nav className='flex items-center justify-center w-full px-[20px] h-full'>
					<IoMdClose
						className='absolute top-7 right-7 text-[30px]'
						onClick={() => setShowMenu(false)}
					/>
					<ul className='flex flex-col items-center justify-center w-full space-y-8'>
						<li className='text-[20px]'>Products</li>
						<li className='text-[20px]'>Features</li>
						<li className='text-[20px]'>About</li>
						<li className='text-[20px]'>Contact</li>
						<div className='flex gap-[15px] w-full justify-center items-center'>
							<a href='/' className='my-0'>
								Login
							</a>
							<div className='w-[24px] h-[1px] bg-[#F2F2F2] bg-opacity-30 rotate-90'></div>
							<Button styles='bg-buttonBlue'>Register</Button>
						</div>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Header;
