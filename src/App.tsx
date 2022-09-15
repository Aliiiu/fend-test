import CryptoCurrency from './component/PageSections/CryptoCurrency';
import Features from './component/PageSections/Features';
import Footer from './component/Layout/Footer';
import Header from './component/Layout/Header';
import HeroSection from './component/PageSections/HeroSection';
import StartMining from './component/PageSections/StartMining';
import WhyCappo from './component/PageSections/WhyCappo';
import CalculateEarning from './component/PageSections/CalculateEarning';

function App() {
	return (
		<div>
			<section className=' bg-deepBlue'>
				<Header />
				<HeroSection />
			</section>
			<section className='bg-deepBlue'>
				<WhyCappo />
			</section>
			<section className='bg-deepBlue'>
				<CalculateEarning />
			</section>
			<section className='container px-4 pb-[40px] md:px-[80px] lg:px-[60px] xl:px-[120px] lg:pb-[80px]'>
				<CryptoCurrency />
			</section>
			<section className='bg-paleBlue'>
				<Features />
			</section>
			<section className=' bg-gradient-to-r from-paleBlue to-deepBlue'>
				<StartMining />
			</section>
			<Footer />
		</div>
	);
}

export default App;
