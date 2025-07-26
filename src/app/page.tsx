'use client';
import Image from 'next/image';
import Link from 'next/link';
import {useState} from 'react';
import {
    ChatBubbleLeftRightIcon,
    HomeIcon,
    MagnifyingGlassIcon,
    PhoneIcon,
    ShoppingBagIcon,
    UserIcon,
} from '@heroicons/react/24/outline';

export default function Home() {
    const [search, setSearch] = useState('');

    const onSearch = () => {
        alert(`جستجو: ${search}`);
    };

    return (
        <div
            className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth"
            style={{scrollSnapType: 'y mandatory'}}
        >
            {/* صفحه اول - هدر و بنر */}
            <section className="snap-start h-screen w-full relative flex flex-col">
                <header className="bg-white shadow px-6 py-4 flex items-center justify-between z-50 sticky top-0">
                    <Link href="#" className="flex items-center gap-1 text-gray-700 hover:text-blue-700 transition">
                        <UserIcon className="w-5 h-5"/>
                        ورود
                    </Link>

                    <h1 className="text-xl md:text-2xl font-extrabold text-blue-900 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
                        فروشگاه قطعات هیوندا و کیا
                    </h1>

                    <nav className="flex gap-6 text-base font-medium text-gray-700">
                        <Link href="#" className="flex items-center gap-1 hover:text-blue-700 transition">
                            <HomeIcon className="w-5 h-5"/>
                            خانه
                        </Link>
                        <Link href="#" className="flex items-center gap-1 hover:text-blue-700 transition">
                            <ShoppingBagIcon className="w-5 h-5"/>
                            محصولات
                        </Link>
                        <Link href="#" className="flex items-center gap-1 hover:text-blue-700 transition">
                            <PhoneIcon className="w-5 h-5"/>
                            تماس با ما
                        </Link>
                    </nav>
                </header>

                <div className="relative flex-grow">
                    <Image
                        src="/images/branding.jpg"
                        alt="بنر خودرو"
                        fill
                        className="object-cover object-center brightness-75"
                        priority
                    />
                    <div
                        className="absolute inset-0 flex flex-col justify-center items-center text-white px-6 text-center">
                        <h2 className="text-4xl md:text-6xl font-extrabold mb-5 drop-shadow-lg">
                            فروش قطعات یدکی هیوندای و کیا
                        </h2>
                        <p className="text-lg md:text-2xl mb-10 font-light drop-shadow-md max-w-2xl">
                            کیفیت اصلی با قیمت مناسب و ارسال سریع به سراسر کشور
                        </p>
                        <div className="flex flex-wrap justify-center gap-8">
                            <Link
                                href="#"
                                className="w-44 h-44 flex flex-col items-center justify-center bg-white/90 text-blue-800 font-bold rounded-2xl shadow-lg border border-gray-300 hover:bg-blue-500 hover:text-white transition"
                            >
                                <Image
                                    src="/images/hyundai-logo.png"
                                    alt="هیوندای"
                                    width={60}
                                    height={60}
                                    className="mb-3"
                                />
                                هیوندای
                            </Link>
                            <Link
                                href="#"
                                className="w-44 h-44 flex flex-col items-center justify-center bg-white/90 text-red-700 font-bold rounded-2xl shadow-lg border border-gray-300 hover:bg-red-500 hover:text-white transition"
                            >
                                <Image
                                    src="/images/kia-logo.png"
                                    alt="کیا"
                                    width={60}
                                    height={60}
                                    className="mb-3"
                                />
                                کیا
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* صفحه دوم - قطعات پرفروش */}
            <section
                className="snap-start h-screen w-full flex flex-col items-center justify-center bg-gradient-to-tr from-blue-100 to-white px-6 md:px-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-12">قطعات پرفروش</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl w-full">
                    {[1, 2, 3].map((item) => (
                        <div
                            key={item}
                            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-transform transform hover:-translate-y-1"
                        >
                            <Image
                                src={`/images/bestseller${item}.jpg`}
                                alt={`قطعه ${item}`}
                                width={400}
                                height={300}
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-5">
                                <h3 className="text-xl font-semibold mb-2 text-gray-900">قطعه یدکی {item}</h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    توضیح کوتاه و جذاب درباره این قطعه و کاربرد آن در خودروهای هیوندای و کیا.
                                </p>
                                <button
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition">
                                    مشاهده و خرید
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* صفحه سوم - اسکرول افقی: جستجو + چرا از ما بخرید */}
            {/* Search & Why Us Section */}
            <section
                className="h-screen px-4 md:px-10 bg-white text-center snap-start flex flex-col justify-center flex-shrink-0 space-y-16">
                <div>
                    <h2 className="text-2xl font-bold mb-6 text-blue-900">جستجوی سریع قطعه</h2>
                    <p className="text-gray-600 mb-8">بر اساس کد فنی یا مدل خودرو جستجو کنید</p>
                    <div
                        className="max-w-xl mx-auto flex items-center border border-blue-300 rounded-xl overflow-hidden shadow-lg">
                        <input type="text" placeholder="کد فنی یا مدل خودرو..."
                               className="flex-1 px-5 py-4 focus:outline-none text-lg"/>
                        <button
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 flex items-center gap-2 transition text-lg">
                            <MagnifyingGlassIcon className="w-5 h-5"/> جستجو
                        </button>
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-bold mb-6 text-blue-900">چرا از ما بخرید؟</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        <div className="bg-blue-50 p-6 rounded-xl shadow">
                            <ChatBubbleLeftRightIcon className="w-10 h-10 text-blue-500 mx-auto mb-4"/>
                            <h4 className="font-semibold text-blue-800 mb-2">پشتیبانی حرفه‌ای</h4>
                            <p className="text-gray-600 text-sm">تیم ما همیشه آماده پاسخگویی به سوالات شماست.</p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-xl shadow">
                            <ShoppingBagIcon className="w-10 h-10 text-blue-500 mx-auto mb-4"/>
                            <h4 className="font-semibold text-blue-800 mb-2">تنوع قطعات</h4>
                            <p className="text-gray-600 text-sm">دسترسی به گستره وسیعی از قطعات اورجینال هیوندای و
                                کیا.</p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-xl shadow">
                            <PhoneIcon className="w-10 h-10 text-blue-500 mx-auto mb-4"/>
                            <h4 className="font-semibold text-blue-800 mb-2">ارسال سریع</h4>
                            <p className="text-gray-600 text-sm">تحویل فوری به سراسر کشور با کمترین هزینه.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Footer */}
            <footer className="bg-blue-50 text-center text-sm text-gray-600 py-4 border-t snap-start flex-shrink-0">
                © {new Date().getFullYear()} فروشگاه قطعات هیوندا و کیا. تمامی حقوق محفوظ است.
            </footer>


        </div>
    );
}
