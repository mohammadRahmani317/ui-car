'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminHome() {
    const router = useRouter();

    useEffect(() => {
        router.push('/admin/dashboard');
    }, [router]);

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
                <p className="text-gray-600">در حال انتقال...</p>
            </div>
        </div>
    );
} 