'use client';
import Image from 'next/image';

interface ProductCardProps {
    id: number;
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
}

export default function ProductCard({ id, title, description, imageSrc, imageAlt }: ProductCardProps) {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-transform transform hover:-translate-y-1">
            <Image
                src={imageSrc}
                alt={imageAlt}
                width={400}
                height={300}
                className="w-full h-56 object-cover"
            />
            <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                    {description}
                </p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition">
                    مشاهده و خرید
                </button>
            </div>
        </div>
    );
} 