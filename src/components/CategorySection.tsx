'use client';

import Image from 'next/image';
import Link from 'next/link';

const categories = [
    {
        name: 'قطعات کیا',
        slug: 'kia',
        image: '/images/kia.jpg',
    },
    {
        name: 'قطعات هیوندای',
        slug: 'hyundai',
        image: '/images/hyundai.jpg',
    },
];

export default function CategorySection() {
    return (
        <section className="w-full py-10 bg-white">
            <div className="w-full max-w-[95%] mx-auto px-2 md:px-4">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
                    دسته‌بندی محصولات
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {categories.map((cat) => (
                        <Link
                            key={cat.slug}
                            href={`/products?brand=${cat.slug}`}
                            className="group relative block rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
                        >
                            <div className="relative w-full h-72 md:h-96">
                                <Image
                                    src={cat.image}
                                    alt={cat.name}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white text-center py-4">
                  <span className="text-xl md:text-2xl font-extrabold tracking-wide drop-shadow-md transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-2xl group-hover:text-white/90 inline-block">
                    {cat.name}
                  </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
