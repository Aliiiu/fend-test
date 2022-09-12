import Calculate from './component/Calculate';
import CryptoCurrency from './component/CryptoCurrency';
import Features from './component/Features';
import Footer from './component/Footer';
import Header from './component/Header';
import HeroSection from './component/HeroSection';
import StartMining from './component/StartMining';
import WhyCappo from './component/WhyCappo';

function App() {
	return (
		<div>
			<section className=' bg-[#0d0d2b]'>
				<Header />
				<HeroSection />
			</section>
			<section className='bg-[#0d0d2b]'>
				<WhyCappo />
			</section>
			<section className='bg-[#0d0d2b]'>
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
			</section>
			<section className='container px-4 pb-[40px] md:px-[80px] lg:px-[60px] xl:px-[120px] lg:pb-[80px]'>
				<CryptoCurrency />
			</section>
			<section className='bg-[#2B076E]'>
				<Features />
			</section>
			<section className=' bg-gradient-to-r from-[#2B076E] to-[#0D0D2B]'>
				<StartMining />
			</section>
			<Footer />
		</div>
	);
}

export default App;
