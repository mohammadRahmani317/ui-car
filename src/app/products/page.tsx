import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import { Suspense } from 'react';
import ProductsClient from './ProductsClient';

export default function ProductsPage() {
    return (
        <>
            <TopBar />
            <Header />
            <main className="max-w-6xl mx-auto p-4 mt-6">
                <h1 className="text-3xl font-bold mb-6 text-center">لیست محصولات</h1>

                <Suspense fallback={<div>در حال بارگذاری محصولات...</div>}>
                    <ProductsClient />
                </Suspense>
            </main>
        </>
    );
}
