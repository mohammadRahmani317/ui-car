'use client';

import Link from 'next/link';
import {
    ChatBubbleLeftRightIcon,
    InformationCircleIcon,
    ShoppingBagIcon,
} from '@heroicons/react/24/outline';
import { FaWhatsapp, FaInstagram, FaPhone } from 'react-icons/fa';

export default function TopBar() {
    return (
        <div className="bg-gray-100 text-gray-700 text-xs sm:text-sm px-3 sm:px-4 py-2 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
            {/* اطلاعات تماس و شبکه اجتماعی */}
            <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4">
                <a href="tel:09199090989" className="flex items-center gap-1 hover:text-red-600 transition">
                    <FaPhone className="w-4 h-4 text-gray-500" />
                    <span>۰۹۱۹۹۰۹۰۹۸۹</span>
                </a>

                <Link
                    href="https://www.instagram.com/amir_6959/?locale=zh_CN"
                    className="flex items-center gap-1 hover:text-pink-600 transition"
                    target="_blank"
                >
                    <FaInstagram className="w-4 h-4" />
                    <span>اینستاگرام</span>
                </Link>

                <Link
                    href="https://wa.me/989199090989"
                    className="flex items-center gap-1 hover:text-green-600 transition"
                    target="_blank"
                >
                    <FaWhatsapp className="w-4 h-4" />
                    <span>واتساپ</span>
                </Link>
            </div>

            {/* لینک‌های ثابت */}
            <div className="flex flex-wrap justify-center sm:justify-end items-center gap-4">
                <Link href="/products" className="flex items-center gap-1 hover:text-red-600 transition">
                    <ShoppingBagIcon className="w-4 h-4" />
                    <span>محصولات</span>
                </Link>

                <Link href="/contact" className="flex items-center gap-1 hover:text-red-600 transition">
                    <ChatBubbleLeftRightIcon className="w-4 h-4" />
                    <span>تماس با ما</span>
                </Link>

                <Link href="/about" className="flex items-center gap-1 hover:text-red-600 transition">
                    <InformationCircleIcon className="w-4 h-4" />
                    <span>درباره ما</span>
                </Link>
            </div>
        </div>
    );
}
