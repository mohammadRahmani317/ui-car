import Link from "next/link";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Header() {
    return (
        <header className="bg-white shadow-md px-4 py-4 flex flex-col md:flex-row items-center gap-4 md:gap-6 justify-between relative z-10">
            {/* لوگو */}
            <Link href="/" className="flex-shrink-0">
                <Image
                    src="/images/logo.jpeg"
                    alt="لوگو"
                    width={100}
                    height={40}
                    className="cursor-pointer"
                />
            </Link>

            {/* سرچ‌بار جدید */}
            <div className="w-full md:flex-1 max-w-4xl relative">
                <input
                    type="text"
                    placeholder="جستجو بر اساس کد یا نام قطعه..."
                    className="w-full border border-gray-200 rounded-xl py-4 px-5 pr-14 bg-gray-50 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-400 transition-all"
                />
                <MagnifyingGlassIcon
                    className="w-6 h-6 text-red-600 absolute right-4 top-1/2 transform -translate-y-1/2"
                />
            </div>

            {/* ورود / عضویت */}
            <Link
                href="/login"
                className="text-sm text-gray-700 hover:text-red-600 transition whitespace-nowrap"
            >
                ورود / عضویت
            </Link>
        </header>
    );
}
