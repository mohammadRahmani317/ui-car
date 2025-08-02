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

            {/* سرچ‌بار */}
            <div className="flex-1 mx-6 max-w-xl relative">
                <input
                    type="text"
                    placeholder="جستجو بر اساس کد یا نام قطعه..."
                    className="w-full border border-gray-300 rounded-full py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                />
                <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute right-3 top-2.5" />
            </div>

            {/* ورود / عضویت */}
            <Link href="/login" className="text-sm text-gray-700 hover:text-red-600 transition">
                ورود / عضویت
            </Link>
        </header>
    );
}
