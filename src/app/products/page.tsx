'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { productsMock } from '@/data/productsMock';
import ProductCard from '@/components/ProductCard';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import ProductModal from '@/components/ProductModal';
import { Product } from '@/types/product';
import { ChevronDown } from 'lucide-react';

function BrandDropdown({
                           selected,
                           onChange,
                       }: {
    selected: string;
    onChange: (value: string) => void;
}) {
    const [open, setOpen] = useState(false);
    const options = ['all', 'kia', 'hyundai'];

    const getLabel = (val: string) => {
        if (val === 'all') return 'همه برندها';
        if (val === 'kia') return 'کیا';
        if (val === 'hyundai') return 'هیوندای';
        return val;
    };

    return (
        <div className="relative w-full max-w-xs mx-auto">
            <div
                className="flex items-center justify-between border border-gray-300 rounded-md px-3 py-2 bg-white shadow-sm cursor-pointer hover:border-gray-400"
                onClick={() => setOpen(!open)}
            >
                <span className="text-gray-700 font-medium">{getLabel(selected)}</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>

            {open && (
                <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-y-auto shadow-lg animate-fade-in">
                    {options.map((opt) => (
                        <li
                            key={opt}
                            onClick={() => {
                                onChange(opt);
                                setOpen(false);
                            }}
                            className={`cursor-pointer px-3 py-2 hover:bg-red-100 ${
                                selected === opt ? 'bg-red-200 font-bold' : ''
                            }`}
                        >
                            {getLabel(opt)}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default function ProductsPage() {
    const searchParams = useSearchParams();
    const brandFromURL = searchParams.get('brand');

    const initialBrand: 'all' | 'kia' | 'hyundai' =
        brandFromURL === 'kia' || brandFromURL === 'hyundai' ? brandFromURL : 'all';

    const [filterBrand, setFilterBrand] = useState<'all' | 'kia' | 'hyundai'>(initialBrand);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const filteredProducts =
        filterBrand === 'all'
            ? productsMock
            : productsMock.filter((p) => p.brand === filterBrand);

    return (
        <>
            <TopBar />
            <Header />
            <main className="max-w-6xl mx-auto p-4 mt-6">
                <h1 className="text-3xl font-bold mb-6 text-center">لیست محصولات</h1>

                <BrandDropdown
                    selected={filterBrand}
                    onChange={(val) => setFilterBrand(val as 'all' | 'kia' | 'hyundai')}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                    {filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onClick={() => setSelectedProduct(product)}
                        />
                    ))}
                </div>

                {selectedProduct && (
                    <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
                )}
            </main>
        </>
    );
}
