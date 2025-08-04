'use client';
import { PhoneCall } from 'lucide-react';
import Link from 'next/link';

export default function ContactBanner() {
    return (
        <section className="bg-red-600 text-white py-10 px-4">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-right">
                    <h3 className="text-xl md:text-2xl font-bold mb-2">نیاز به مشاوره خرید دارید؟</h3>
                    <p className="text-sm md:text-base">با ما تماس بگیرید یا از طریق پیام‌رسان‌ها در ارتباط باشید.</p>
                </div>
                <div className="flex items-center gap-3 text-lg font-semibold">
                    <PhoneCall className="w-6 h-6" />
                    <span>۰۹۱۹-۹۰۹۰-۹۸۹</span>
                </div>
            </div>
        </section>
    );
}
