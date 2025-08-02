// src/components/TopBar.tsx
import { PhoneIcon } from "@heroicons/react/24/outline";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function TopBar() {
    return (
        <div className="bg-gray-100 text-gray-600 text-sm px-4 py-2 flex justify-between items-center">
            {/* شماره تماس */}
            <div className="flex items-center gap-2">
                <PhoneIcon className="w-4 h-4 text-gray-500" />
                <span>۰۹۱۲۱۲۳۴۵۶۷</span>
            </div>

            {/* لینک اینستاگرام */}
            <div className="flex items-center gap-2">
                <ArrowTopRightOnSquareIcon className="w-4 h-4 text-pink-600" />
                <Link
                    href="https://www.instagram.com/yourpage"
                    className="hover:text-red-600 transition"
                    target="_blank"
                >
                    صفحه اینستاگرام ما
                </Link>
            </div>
        </div>
    );
}
