'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        // Skip authentication check for login page
        if (pathname === '/admin/login') {
            return;
        }

        // Check if admin is logged in
        const isLoggedIn = localStorage.getItem('adminLoggedIn');
        if (!isLoggedIn) {
            router.push('/admin/login');
        }
    }, [router, pathname]);

    // Don't render layout for login page
    if (pathname === '/admin/login') {
        return <>{children}</>;
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {children}
        </div>
    );
} 