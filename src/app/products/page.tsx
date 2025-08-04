import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from "@/components/Footer";
import { Suspense } from 'react';
import ProductsClient from './ProductsClient';

export default function ProductsPage() {
    return (
        <>
            <TopBar />
            <Header />
            <main className="bg-white max-w-6xl mx-auto px-4 sm:px-6 mt-6">
                <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-right text-gray-800">
                    لیست محصولات
                </h1>

                <Suspense fallback={<div className="text-center py-6 text-gray-600">در حال بارگذاری محصولات...</div>}>
                    <ProductsClient/>
                </Suspense>
            </main>
            <Footer/>
        </>
    );
}
