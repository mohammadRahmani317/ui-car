'use client';

import TopBar from '../components/TopBar';
import Header from '../components/Header';
import CategoryBoxes from '../components/CategorySection';
import BestSellersSection from '../components/BestSellersSection';
import SearchAndWhyUsSection from '../components/SearchAndWhyUsSection';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div className="w-full scroll-smooth">
            <TopBar />
            <Header />
            <CategoryBoxes />
            <BestSellersSection />
            <SearchAndWhyUsSection />
            <Footer />
        </div>
    );
}
