'use client';

import TopBar from '../components/TopBar';
import Header from '../components/Header';
import CategoryBoxes from '../components/CategorySection';
import BestSellersSection from '../components/BestSellersSection';
import WhyUsSection from "@/components/WhyUsSection";
import ContactBanner from "@/components/ContactBanner";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div className="w-full scroll-smooth">
            <TopBar />
            <Header />
            <CategoryBoxes />
            <BestSellersSection />
            <WhyUsSection />
            <TestimonialsSection />
            <BlogSection />
            <ContactBanner />
            <Footer />
        </div>
    );
}
