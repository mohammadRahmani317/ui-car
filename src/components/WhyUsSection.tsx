'use client';
import { ShieldCheck, Truck, Phone, BadgeCheck } from 'lucide-react';

const features = [
    {
        icon: <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 text-red-600" />,
        title: 'ضمانت اصالت کالا',
        description: 'تمامی محصولات با ضمانت اصل بودن ارائه می‌شوند.',
    },
    {
        icon: <Truck className="w-7 h-7 sm:w-8 sm:h-8 text-red-600" />,
        title: 'ارسال سریع',
        description: 'سفارش‌ها در سریع‌ترین زمان ممکن ارسال می‌شوند.',
    },
    {
        icon: <Phone className="w-7 h-7 sm:w-8 sm:h-8 text-red-600" />,
        title: 'پشتیبانی تلفنی',
        description: 'پشتیبانی و پاسخگویی سریع به سوالات شما.',
    },
    {
        icon: <BadgeCheck className="w-7 h-7 sm:w-8 sm:h-8 text-red-600" />,
        title: 'تضمین کیفیت',
        description: 'فروش قطعات با بالاترین سطح کیفی و استاندارد.',
    },
];

export default function WhyUsSection() {
    return (
        <section className="bg-gray-50 py-10 sm:py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 sm:mb-10 text-gray-800">
                    چرا خرید از ما؟
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">
                    {features.map((f, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-xl p-5 sm:p-6 shadow hover:shadow-md transition duration-300 border border-gray-100"
                        >
                            <div className="mb-4 flex justify-center">{f.icon}</div>
                            <h3 className="text-base sm:text-lg font-semibold mb-2 text-red-600">{f.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{f.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
