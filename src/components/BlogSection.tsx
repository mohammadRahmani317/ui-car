'use client';

import Image from 'next/image';
import Link from 'next/link';

const posts = [
    {
        title: 'چطور قطعه‌ی مناسب خودرو را پیدا کنیم؟',
        image: '/images/blog1.jpg',
        link: '/blog/how-to-find-parts',
    },
    {
        title: 'فرق بین قطعه اورجینال و طرح اصلی چیست؟',
        image: '/images/blog2.jpg',
        link: '/blog/original-vs-copy',
    },
    {
        title: 'بهترین زمان برای تعویض لوازم مصرفی خودرو',
        image: '/images/blog3.jpg',
        link: '/blog/best-time-to-change-parts',
    },
];

export default function BlogSection() {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
                    از بلاگ ما بخوانید
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {posts.map((post, index) => (
                        <Link
                            href={post.link}
                            key={index}
                            className="group rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300"
                        >
                            <div className="relative w-full h-48">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-4 bg-white">
                                <h3 className="text-gray-800 font-semibold text-lg group-hover:text-red-600 transition">
                                    {post.title}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
