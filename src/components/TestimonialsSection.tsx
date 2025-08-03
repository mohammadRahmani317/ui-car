'use client';

import { StarIcon } from 'lucide-react';

const testimonials = [
    {
        name: 'علی رضایی',
        comment: 'خیلی راضی بودم، قطعه به‌موقع و با کیفیت رسید. ممنون از تیم پشتیبانی عالی‌تون!',
    },
    {
        name: 'زهرا احمدی',
        comment: 'قیمت‌ها منصفانه‌اس و خیلی راحت تونستم قطعه مناسب رو پیدا کنم.',
    },
    {
        name: 'مهدی جعفری',
        comment: 'ارسال سریع بود و کیفیت قطعه فوق‌العاده بود. حتما دوباره خرید می‌کنم.',
    },
];

export default function TestimonialsSection() {
    return (
        <section className="w-full bg-gray-50 py-12">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
                    نظرات مشتریان ما
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((t, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow p-6 text-center flex flex-col items-center gap-4"
                        >
                            <StarIcon className="w-6 h-6 text-yellow-500" />
                            <p className="text-gray-700 text-sm leading-relaxed">"{t.comment}"</p>
                            <span className="text-red-600 font-semibold text-sm">{t.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}