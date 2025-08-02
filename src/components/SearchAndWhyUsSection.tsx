'use client';
import { useState } from 'react';
import {
    ChatBubbleLeftRightIcon,
    MagnifyingGlassIcon,
    ShoppingBagIcon,
    PhoneIcon,
} from '@heroicons/react/24/outline';

interface WhyUsCardProps {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
}

function WhyUsCard({ icon: Icon, title, description }: WhyUsCardProps) {
    return (
        <div className="bg-blue-50 p-6 rounded-xl shadow">
            <Icon className="w-10 h-10 text-blue-500 mx-auto mb-4"/>
            <h4 className="font-semibold text-blue-800 mb-2">{title}</h4>
            <p className="text-gray-600 text-sm">{description}</p>
        </div>
    );
}

export default function SearchAndWhyUsSection() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        if (searchQuery.trim()) {
            alert(`جستجو: ${searchQuery}`);
        }
    };

    const whyUsData = [
        {
            icon: ChatBubbleLeftRightIcon,
            title: 'پشتیبانی حرفه‌ای',
            description: 'تیم ما همیشه آماده پاسخگویی به سوالات شماست.'
        },
        {
            icon: ShoppingBagIcon,
            title: 'تنوع قطعات',
            description: 'دسترسی به گستره وسیعی از قطعات اورجینال هیوندای و کیا.'
        },
        {
            icon: PhoneIcon,
            title: 'ارسال سریع',
            description: 'تحویل فوری به سراسر کشور با کمترین هزینه.'
        }
    ];

    return (
        <section className="h-screen px-4 md:px-10 bg-white text-center snap-start flex flex-col justify-center flex-shrink-0 space-y-16">
            <div>
                <h2 className="text-2xl font-bold mb-6 text-blue-900">جستجوی سریع قطعه</h2>
                <p className="text-gray-600 mb-8">بر اساس کد فنی یا مدل خودرو جستجو کنید</p>
                <div className="max-w-xl mx-auto flex items-center border border-blue-300 rounded-xl overflow-hidden shadow-lg">
                    <input 
                        type="text" 
                        placeholder="کد فنی یا مدل خودرو..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                        className="flex-1 px-5 py-4 focus:outline-none text-lg"
                    />
                    <button
                        onClick={handleSearch}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 flex items-center gap-2 transition text-lg"
                    >
                        <MagnifyingGlassIcon className="w-5 h-5"/> جستجو
                    </button>
                </div>
            </div>

            <div>
                <h3 className="text-xl font-bold mb-6 text-blue-900">چرا از ما بخرید؟</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {whyUsData.map((item, index) => (
                        <WhyUsCard
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
} 