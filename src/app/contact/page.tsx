'use client';

import {EnvelopeIcon, MapPinIcon, PhoneIcon,} from '@heroicons/react/24/outline';

export default function ContactPage() {
    return (
        <main
            className="min-h-[calc(100vh-60px)] bg-gradient-to-br from-gray-50 to-white px-4 py-8 flex flex-col justify-center items-center">
            <div
                className="w-full max-w-4xl bg-white bg-opacity-90 backdrop-blur-md shadow-xl rounded-2xl p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* اطلاعات تماس و نقشه */}
                <div className="flex flex-col gap-6 justify-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-2 text-center lg:text-right">تماس با ما</h1>
                    <div className="flex items-center gap-2 text-gray-700">
                        <PhoneIcon className="w-5 h-5 text-red-500"/>
                        <span>۰۹۱۹۹۰۹۰۹۸۹</span>
                        <span>۰۹۱۹۹۰۹۰۹۸۹</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                        <EnvelopeIcon className="w-5 h-5 text-blue-500"/>
                        <span>info@example.com</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                        <MapPinIcon className="w-5 h-5 text-green-500"/>
                        <span>تهران، خیابان آزادی</span>
                    </div>

                    <div className="rounded-xl overflow-hidden shadow-md mt-4">
                        <iframe
                            src="https://maps.google.com/maps?q=35.6889915,51.4265473&z=17&hl=fa&output=embed"
                            className="w-full h-56 border-none"
                            loading="lazy"
                            title="لوکیشن لوازم یدکی رنو pk"
                        />
                    </div>
                </div>

                {/* فرم تماس */}
                <form className="space-y-4">
                    <div>
                        <label className="block mb-1 font-semibold text-gray-700">نام شما</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                            placeholder="مثلاً علی رضایی"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-semibold text-gray-700">شماره تماس</label>
                        <input
                            type="tel"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                            placeholder="مثلاً ۰۹۱۹۹۰۹۰۹۸۹"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-semibold text-gray-700">پیام شما</label>
                        <textarea
                            rows={4}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                            placeholder="پیام خود را اینجا بنویسید..."
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-red-600 text-white w-full py-2 rounded-lg font-semibold hover:bg-red-700 transition"
                    >
                        ارسال پیام
                    </button>
                </form>
            </div>
            <div className="mt-8">
                {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                <a href="/"
                   className="inline-flex items-center gap-2 border border-red-600 text-red-600 px-6 py-2 rounded-lg font-semibold hover:bg-red-50 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                         viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M3 10l9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M9 22V12h6v10"/>
                    </svg>
                    بازگشت به صفحه اصلی
                </a>
            </div>
        </main>
    );
}
