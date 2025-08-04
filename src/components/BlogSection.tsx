'use client';

import Image from 'next/image';
import Link from 'next/link';

const posts = [
    {
        title: 'چطور قطعه‌ی مناسب خودرو را پیدا کنیم؟',
        image: '/images/blog.jpg',
        link: 'https://virgool.io/@m_13719445/%D9%86%D8%AD%D9%88%D9%87-%D8%A7%D9%86%D8%AA%D8%AE%D8%A7%D8%A8-%D9%82%D8%B7%D8%B9%D8%A7%D8%AA-%D8%AE%D9%88%D8%AF%D8%B1%D9%88-%D9%85%D9%86%D8%A7%D8%B3%D8%A8-%D8%B1%D8%A7%D9%87%D9%86%D9%85%D8%A7%DB%8C-%D8%AC%D8%A7%D9%85%D8%B9-w9qcged50amg',
    },
    {
        title: 'فرق بین قطعه اورجینال و طرح اصلی چیست؟',
        image: '/images/blog.jpg',
        link: 'https://www.khabaronline.ir/news/1796495/%D8%AA%D9%81%D8%A7%D9%88%D8%AA-%D9%82%D8%B7%D8%B9%D8%A7%D8%AA-%D8%A7%D8%B5%D9%84%DB%8C-%D9%88-%D8%BA%DB%8C%D8%B1%D8%A7%D8%B5%D9%84%DB%8C-%D9%84%D9%88%D8%A7%D8%B2%D9%85-%DB%8C%D8%AF%DA%A9%DB%8C-%D8%AE%D9%88%D8%AF%D8%B1%D9%88',
    },
    {
        title: 'بهترین زمان برای تعویض لوازم مصرفی خودرو',
        image: '/images/blog.jpg',
        link: 'https://www.hamrah-mechanic.com/mag/car-consumables-change-time/',
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
                            target="_blank"
                            rel="noopener noreferrer"
                            href={post.link}
                            key={index}
                            className="group rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300">
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
