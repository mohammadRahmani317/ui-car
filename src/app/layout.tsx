import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'فروشگاه قطعات هیوندا و کیا',
    description: 'خرید آنلاین قطعات یدکی هیوندای و کیا',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fa" dir="rtl">
        <body className="font-vazir bg-white text-gray-900">
        {children}
        </body>
        </html>
    )
}
