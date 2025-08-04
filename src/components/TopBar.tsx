'use client';

import Link from 'next/link';
import {
    PhoneIcon,
    ArrowTopRightOnSquareIcon,
    ChatBubbleLeftRightIcon,
    InformationCircleIcon,
    ShoppingBagIcon,
} from '@heroicons/react/24/outline';
import {FaWhatsapp, FaInstagram, FaPhone} from 'react-icons/fa';

export default function TopBar() {
    return (
        <div className="bg-gray-100 text-gray-700 text-sm px-4 py-2 flex justify-between items-center">
            {/* اطلاعات تماس و شبکه اجتماعی */}
            <div className="flex items-center gap-4">

                <Link href="tel:+989199090989" className="hover:text-red-600 transition">
                    <div className="flex items-center gap-1">
                        <FaPhone className="w-4 h-4 text-gray-500" />
                        <span>۰۹۱۹۹۰۹۰۹۸۹</span>
                    </div>
                </Link>

                <Link href="https://www.instagram.com/amir_6959/?locale=zh_CN" className="hover:text-red-600 transition"
                      target="_blank">
                    <div className="flex items-center gap-1">
                        <FaInstagram className="w-4 h-4 text-pink-600"/>
                        اینستاگرام ما
                    </div>
                </Link>

                <Link href="https://wa.me/989199090989" className="hover:text-green-600 transition" target="_blank">
                    <div className="flex items-center gap-1">
                        <FaWhatsapp className="w-4 h-4 text-green-500"/>
                        واتساپ
                    </div>
                </Link>

            </div>

            {/* لینک‌های ثابت */}
            <div className="flex items-center gap-6">
                <Link href="/products" className="flex items-center gap-1 hover:text-red-600 transition">
                    <ShoppingBagIcon className="w-4 h-4"/>
                    <span>محصولات</span>
                </Link>

                <Link href="/contact" className="flex items-center gap-1 hover:text-red-600 transition">
                    <ChatBubbleLeftRightIcon className="w-4 h-4"/>
                    <span>تماس با ما</span>
                </Link>

                <Link href="/about" className="flex items-center gap-1 hover:text-red-600 transition">
                    <InformationCircleIcon className="w-4 h-4"/>
                    <span>درباره ما</span>
                </Link>
            </div>
        </div>
    );
}
