'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // ✅ این جواب می‌ده توی نسخه 11
import 'swiper/css';

const bestSellers = {
    kia: [
        { id: 1, name: 'لنت ترمز جلو کیا', price: 850000, image: '/images/products/kia-brake-pad.jpg' },
        { id: 2, name: 'فیلتر روغن کیا', price: 250000, image: '/images/products/kia-oil-filter.jpg' },
        { id: 3, name: 'شمع موتور کیا', price: 450000, image: '/images/products/kia-spark-plug.jpg' },
        { id: 4, name: 'فیلتر هوا کیا', price: 300000, image: '/images/products/kia-air-filter.jpg' },
        { id: 5, name: 'کیت تسمه تایم کیا', price: 1200000, image: '/images/products/kia-timing-belt.jpg' },
        { id: 6, name: 'رینگ چرخ کیا', price: 2200000, image: '/images/products/kia-wheel-rim.jpg' },
    ],
    hyundai: [
        { id: 1, name: 'لنت ترمز جلو هیوندای', price: 900000, image: '/images/products/hyundai-brake-pad.jpg' },
        { id: 2, name: 'فیلتر هوا هیوندای', price: 300000, image: '/images/products/hyundai-air-filter.jpg' },
        { id: 3, name: 'باتری هیوندای', price: 1500000, image: '/images/products/hyundai-battery.jpg' },
        { id: 4, name: 'کیت تسمه تایم هیوندای', price: 1300000, image: '/images/products/hyundai-timing-belt.jpg' },
        { id: 5, name: 'رینگ چرخ هیوندای', price: 2100000, image: '/images/products/hyundai-wheel-rim.jpg' },
        { id: 6, name: 'شمع موتور هیوندای', price: 400000, image: '/images/products/hyundai-spark-plug.jpg' },
    ],
};

function formatPrice(price: number) {
    return price.toLocaleString('fa-IR') + ' تومان';
}

export default function BestSellersSection() {
    const [activeBrand, setActiveBrand] = useState<'kia' | 'hyundai'>('kia');

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
                    {bestSellers[activeBrand].map((product) => (
                        <SwiperSlide key={product.id}>
                            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-shadow duration-300 cursor-pointer hover:shadow-2xl hover:scale-[1.03] transform">
                                <div className="relative w-full h-48">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                </div>
                                <div className="p-4 text-center">
                                    <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                                    <p className="mt-2 text-red-600 font-bold">{formatPrice(product.price)}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
