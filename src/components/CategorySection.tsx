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
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-800">
                    دسته‌بندی محصولات
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {categories.map((cat) => (
                        <Link
                            key={cat.slug}
                            href={`/products?brand=${cat.slug}`}
                            className="group relative block rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300"
                        >
                            <div className="relative w-full aspect-[4/3] sm:aspect-[3/2]">
                                <Image
                                    src={cat.image}
                                    alt={cat.name}
                                    fill
                                    sizes="(max-width: 640px) 100vw, 50vw"
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white text-center py-3 sm:py-4">
                                    <span className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-wide drop-shadow-md transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-2xl">
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
