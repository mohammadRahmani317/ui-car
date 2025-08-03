// src/components/Header.tsx
import Link from "next/link";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Header() {
    return (
        <header className="bg-white shadow-md px-4 py-4 flex items-center justify-between relative z-10">
            {/* لوگو */}
            <Link href="/">
                <Image
                    src="/images/logo.jpeg"
                    alt="لوگو"
                    width={100}
                    height={40}
                    className="cursor-pointer"
                />
            </Link>

            {/* سرچ‌بار جدید */}
            <div className="flex-1 mx-6 max-w-4xl relative">
                <input
                    type="text"
                    placeholder="جستجو بر اساس کد یا نام قطعه..."
                    className="w-full border border-gray-200 rounded-xl py-5 px-5 pr-14 bg-gray-50 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-400 transition-all"
                />
                <MagnifyingGlassIcon
                    className="w-7 h-7 text-red-600 absolute right-3 top-1/2 transform -translate-y-1/2"
                />
            </div>

            {/* ورود / عضویت */}
            <Link href="/login" className="text-sm text-gray-700 hover:text-red-600 transition">
                ورود / عضویت
            </Link>
        </header>
    );
}
