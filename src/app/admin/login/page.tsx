'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        
        // Simulate login process
        setTimeout(() => {
            setIsLoading(false);
            // For demo purposes, accept any email/password
            if (email && password) {
                localStorage.setItem('adminLoggedIn', 'true');
                router.push('/admin/dashboard');
            }
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div className="text-center">
                    <div className="flex justify-center mb-6">
                        <Image
                            src="/images/logo.jpeg"
                            alt="لوگو"
                            width={120}
                            height={50}
                            className="cursor-pointer"
                        />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        ورود به پنل مدیریت
                    </h2>
                    <p className="text-gray-600">
                        لطفاً اطلاعات ورود خود را وارد کنید
                    </p>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-8">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                ایمیل یا شماره تلفن
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="text"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full border border-gray-200 rounded-xl py-4 px-5 bg-gray-50 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-400 transition-all"
                                placeholder="ایمیل یا شماره تلفن خود را وارد کنید"
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                رمز عبور
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full border border-gray-200 rounded-xl py-4 px-5 bg-gray-50 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-400 transition-all"
                                placeholder="رمز عبور خود را وارد کنید"
                            />
                        </div>
                        
                        <div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
                            >
                                {isLoading ? (
                                    <div className="flex items-center justify-center">
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white ml-2"></div>
                                        در حال ورود...
                                    </div>
                                ) : (
                                    'ورود به پنل مدیریت'
                                )}
                            </button>
                        </div>
                    </form>
                </div>
                
                <div className="text-center">
                    <Link href="/" className="text-red-600 hover:text-red-700 text-sm">
                        بازگشت به صفحه اصلی
                    </Link>
                </div>
            </div>
        </div>
    );
} 