'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { productsMock, Product } from '@/data/productsMock';
import ProductModal from './ProductModal';

export default function BestSellersSection() {
    const [activeBrand, setActiveBrand] = useState<'kia' | 'hyundai'>('kia');
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const bestSellers = productsMock.filter(
        (product) => product.brand === activeBrand && product.isBestSeller
    );

    return (
        <section className="w-full py-10 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
                    محصولات پرفروش
                </h2>

                <div className="flex justify-center mb-8 space-x-6 rtl">
                    {(['kia', 'hyundai'] as const).map((brand) => (
                        <button
                            key={brand}
                            onClick={() => setActiveBrand(brand)}
                            className={`px-6 py-2 rounded-lg font-semibold transition
                ${
                                activeBrand === brand
                                    ? 'bg-red-600 text-white shadow-xl'
                                    : 'bg-white text-gray-700 hover:bg-red-100'
                            }`}
                        >
                            {brand === 'kia' ? 'کیا' : 'هیوندای'}
                        </button>
                    ))}
                </div>

                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop
                    className="cursor-grab"
                >
                    {bestSellers.map((product) => (
                        <SwiperSlide key={product.id}>
                            <div
                                onClick={() => setSelectedProduct(product)}
                                className="bg-white rounded-xl shadow-md overflow-hidden transition-shadow duration-300 cursor-pointer hover:shadow-2xl hover:scale-[1.03] transform"
                            >
                                <div className="relative w-full h-48">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                </div>
                                <div className="p-4 text-center">
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {product.name}
                                    </h3>
                                    <p className="mt-2 text-red-600 font-bold">
                                        برای تهیه محصول لطفاً تماس بگیرید
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {selectedProduct && (
                    <ProductModal
                        product={selectedProduct}
                        onClose={() => setSelectedProduct(null)}
                    />
                )}
            </div>
        </section>
    );
}
