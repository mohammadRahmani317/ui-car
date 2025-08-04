'use client';

import {
    BuildingStorefrontIcon,
    Cog6ToothIcon,
    ShieldCheckIcon,
    TruckIcon
} from '@heroicons/react/24/outline';

export default function AboutPage() {
    return (
        <main className="w-full bg-white">
            {/* Hero */}
            <section className="relative h-40 sm:h-52 md:h-64 lg:h-80 bg-gray-800">
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">
                        درباره ما
                    </h1>
                </div>
            </section>

            {/* داستان ما */}
            <section className="max-w-5xl mx-auto px-4 py-10 sm:py-12 space-y-6 sm:space-y-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 text-center">
                    داستان ما
                </h2>
                <p className="text-gray-700 leading-7 sm:leading-8 text-sm sm:text-base text-justify">
                    فروشگاه قطعات کیا و هیوندای از سال ۱۳۹۵ با هدف تأمین قطعات اصلی و باکیفیت برای خودروهای کره‌ای
                    فعالیت خود را آغاز کرد.
                    ما با یک تیم کوچک و عاشق خودرو شروع کردیم و امروز با افتخار به یکی از مراجع معتبر در بازار قطعات
                    یدکی ایران تبدیل شده‌ایم.
                </p>
            </section>

            {/* ماموریت و ارزش‌ها */}
            <section className="bg-gray-50 py-10 sm:py-12">
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8 sm:mb-10">
                        مأموریت و ارزش‌های ما
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        {/* مأموریت */}
                        <div className="flex items-start gap-4">
                            <BuildingStorefrontIcon className="w-8 h-8 sm:w-10 sm:h-10 text-red-600 shrink-0"/>
                            <div>
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1 sm:mb-2">
                                    مأموریت ما
                                </h3>
                                <p className="text-gray-700 leading-6 sm:leading-7 text-sm sm:text-base text-justify">
                                    فراهم‌کردن قطعات اصلی با بهترین قیمت و ارسال سریع به تمام نقاط کشور، به‌گونه‌ای که
                                    هر مالک خودرو بتواند با آرامش خاطر از کیفیت قطعات خود مطمئن باشد.
                                </p>
                            </div>
                        </div>

                        {/* تضمین اصالت */}
                        <div className="flex items-start gap-4">
                            <ShieldCheckIcon className="w-8 h-8 sm:w-10 sm:h-10 text-red-600 shrink-0"/>
                            <div>
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1 sm:mb-2">
                                    تضمین اصالت
                                </h3>
                                <p className="text-gray-700 leading-6 sm:leading-7 text-sm sm:text-base text-justify">
                                    تمامی محصولات با گارانتی اصالت و سلامت فیزیکی ارائه می‌شوند. ما مستقیماً با
                                    تأمین‌کنندگان معتبر همکاری می‌کنیم تا از اورجینال بودن کالای شما مطمئن شویم.
                                </p>
                            </div>
                        </div>

                        {/* نوآوری */}
                        <div className="flex items-start gap-4">
                            <Cog6ToothIcon className="w-8 h-8 sm:w-10 sm:h-10 text-red-600 shrink-0"/>
                            <div>
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1 sm:mb-2">
                                    نوآوری مداوم
                                </h3>
                                <p className="text-gray-700 leading-6 sm:leading-7 text-sm sm:text-base text-justify">
                                    ما همواره در حال بهبود تجربهٔ خرید آنلاین هستیم؛ از ایجاد جستجوی پیشرفته گرفته تا
                                    ارائهٔ مشاورهٔ تخصصی قبل از خرید.
                                </p>
                            </div>
                        </div>

                        {/* ارسال سریع */}
                        <div className="flex items-start gap-4">
                            <TruckIcon className="w-8 h-8 sm:w-10 sm:h-10 text-red-600 shrink-0"/>
                            <div>
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1 sm:mb-2">
                                    ارسال سریع
                                </h3>
                                <p className="text-gray-700 leading-6 sm:leading-7 text-sm sm:text-base text-justify">
                                    با همکاری بهترین شرکت‌های حمل‌ونقل، سفارش‌ها را در کوتاه‌ترین زمان ممکن به دست
                                    مشتریان می‌رسانیم.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Buttons */}
            <section className="py-10 sm:py-12">
                <div className="flex justify-center items-center gap-4 flex-wrap">
                    <a
                        href="/contact"
                        className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
                    >
                        تماس با ما
                    </a>
                    {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                    <a
                        href="/"
                        className="border border-red-600 text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition"
                    >
                        بازگشت به خانه
                    </a>
                </div>
            </section>

        </main>
    );
}
