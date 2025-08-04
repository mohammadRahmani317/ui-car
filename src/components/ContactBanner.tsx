'use client';
import { PhoneCall } from 'lucide-react';

export default function ContactBanner() {
    return (
        <section className="bg-red-600 text-white py-8 px-4">
            <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-right">
                <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
                        نیاز به مشاوره خرید دارید؟
                    </h3>
                    <p className="text-sm sm:text-base">
                        با ما تماس بگیرید یا از طریق پیام‌رسان‌ها در ارتباط باشید.
                    </p>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg font-semibold">
                    <PhoneCall className="w-5 h-5 sm:w-6 sm:h-6" />
                    <span className="ltr text-white">۰۹۱۹-۹۰۹۰-۹۸۹</span>
                </div>
            </div>
        </section>
    );
}
