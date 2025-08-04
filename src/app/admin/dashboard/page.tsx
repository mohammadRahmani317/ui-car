'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { productsMock, Product } from '@/data/productsMock';
import AdminProductTable from '@/components/AdminProductTable';

export default function AdminDashboard() {
    const [products, setProducts] = useState<Product[]>(productsMock);
    const [storeInfo, setStoreInfo] = useState({
        phone1: '021-12345678',
        phone2: '0912-3456789',
        address: 'تهران، خیابان ولیعصر، پلاک 123'
    });
    const [isEditingStore, setIsEditingStore] = useState(false);
    const [isAddingProduct, setIsAddingProduct] = useState(false);
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);
    const router = useRouter();

    useEffect(() => {
        // Check if admin is logged in
        const isLoggedIn = localStorage.getItem('adminLoggedIn');
        if (!isLoggedIn) {
            router.push('/admin/login');
        }
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem('adminLoggedIn');
        router.push('/admin/login');
    };

    const handleDeleteProduct = (productId: number) => {
        if (confirm('آیا از حذف این محصول اطمینان دارید؟')) {
            setProducts(products.filter(p => p.id !== productId));
        }
    };

    const handleToggleBestSeller = (productId: number) => {
        setProducts(products.map(p => 
            p.id === productId ? { ...p, isBestSeller: !p.isBestSeller } : p
        ));
    };

    const handleEditProduct = (product: Product) => {
        setEditingProduct(product);
        setIsAddingProduct(true);
    };

    const handleSaveProduct = (productData: Partial<Product>) => {
        if (editingProduct) {
            // Edit existing product
            setProducts(products.map(p => 
                p.id === editingProduct.id ? { ...p, ...productData } : p
            ));
        } else {
            // Add new product
            const newProduct: Product = {
                id: Math.max(...products.map(p => p.id)) + 1,
                brand: productData.brand as 'kia' | 'hyundai',
                name: productData.name || '',
                price: productData.price || 0,
                image: productData.image || '/images/products/hyundai-air-filter.jpg',
                isBestSeller: productData.isBestSeller || false
            };
            setProducts([...products, newProduct]);
        }
        setIsAddingProduct(false);
        setEditingProduct(null);
    };

    const handleSaveStoreInfo = () => {
        setIsEditingStore(false);
        // Here you would typically save to backend
        alert('اطلاعات فروشگاه با موفقیت ذخیره شد');
    };



    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-md px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Image
                            src="/images/logo.jpeg"
                            alt="لوگو"
                            width={100}
                            height={40}
                            className="cursor-pointer"
                        />
                        <h1 className="text-2xl font-bold text-gray-900">پنل مدیریت</h1>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                        خروج
                    </button>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Statistics Overview */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <div className="flex items-center">
                            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                            </div>
                            <div className="mr-4">
                                <p className="text-sm font-medium text-gray-600">کل محصولات</p>
                                <p className="text-2xl font-bold text-gray-900">{products.length}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <div className="flex items-center">
                            <div className="p-3 rounded-full bg-green-100 text-green-600">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </div>
                            <div className="mr-4">
                                <p className="text-sm font-medium text-gray-600">محصولات محبوب</p>
                                <p className="text-2xl font-bold text-gray-900">{products.filter(p => p.isBestSeller).length}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <div className="flex items-center">
                            <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                </svg>
                            </div>
                            <div className="mr-4">
                                <p className="text-sm font-medium text-gray-600">محصولات کیا</p>
                                <p className="text-2xl font-bold text-gray-900">{products.filter(p => p.brand === 'kia').length}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <div className="flex items-center">
                            <div className="p-3 rounded-full bg-orange-100 text-orange-600">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                </svg>
                            </div>
                            <div className="mr-4">
                                <p className="text-sm font-medium text-gray-600">محصولات هیوندای</p>
                                <p className="text-2xl font-bold text-gray-900">{products.filter(p => p.brand === 'hyundai').length}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Store Information Section */}
                <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-gray-900">اطلاعات فروشگاه</h2>
                        <button
                            onClick={() => setIsEditingStore(!isEditingStore)}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                        >
                            {isEditingStore ? 'انصراف' : 'ویرایش'}
                        </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                شماره تلفن اول
                            </label>
                            <input
                                type="text"
                                value={storeInfo.phone1}
                                onChange={(e) => setStoreInfo({...storeInfo, phone1: e.target.value})}
                                disabled={!isEditingStore}
                                className="w-full border border-gray-200 rounded-lg py-3 px-4 bg-gray-50 disabled:bg-gray-100"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                شماره تلفن دوم
                            </label>
                            <input
                                type="text"
                                value={storeInfo.phone2}
                                onChange={(e) => setStoreInfo({...storeInfo, phone2: e.target.value})}
                                disabled={!isEditingStore}
                                className="w-full border border-gray-200 rounded-lg py-3 px-4 bg-gray-50 disabled:bg-gray-100"
                            />
                        </div>
                        <div className="md:col-span-3">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                آدرس فروشگاه
                            </label>
                            <textarea
                                value={storeInfo.address}
                                onChange={(e) => setStoreInfo({...storeInfo, address: e.target.value})}
                                disabled={!isEditingStore}
                                rows={3}
                                className="w-full border border-gray-200 rounded-lg py-3 px-4 bg-gray-50 disabled:bg-gray-100"
                            />
                        </div>
                    </div>
                    
                    {isEditingStore && (
                        <div className="mt-6 flex gap-4">
                            <button
                                onClick={handleSaveStoreInfo}
                                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors"
                            >
                                ذخیره تغییرات
                            </button>
                            <button
                                onClick={() => setIsEditingStore(false)}
                                className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors"
                            >
                                انصراف
                            </button>
                        </div>
                    )}
                </div>

                {/* Products Section */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-gray-900">مدیریت محصولات</h2>
                        <button
                            onClick={() => setIsAddingProduct(true)}
                            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                        >
                            افزودن محصول جدید
                        </button>
                    </div>
                    
                    <AdminProductTable
                        products={products}
                        onEdit={handleEditProduct}
                        onDelete={handleDeleteProduct}
                        onToggleBestSeller={handleToggleBestSeller}
                    />
                </div>
            </div>

            {/* Product Modal */}
            {isAddingProduct && (
                <ProductModal
                    product={editingProduct}
                    onSave={handleSaveProduct}
                    onClose={() => {
                        setIsAddingProduct(false);
                        setEditingProduct(null);
                    }}
                />
            )}
        </div>
    );
}

// Product Modal Component
function ProductModal({ 
    product, 
    onSave, 
    onClose 
}: { 
    product: Product | null; 
    onSave: (productData: Partial<Product>) => void; 
    onClose: () => void; 
}) {
    const [formData, setFormData] = useState({
        name: product?.name || '',
        brand: product?.brand || 'hyundai',
        price: product?.price || 0,
        image: product?.image || '/images/products/hyundai-air-filter.jpg',
        isBestSeller: product?.isBestSeller || false
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                    {product ? 'ویرایش محصول' : 'افزودن محصول جدید'}
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            نام محصول
                        </label>
                        <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full border border-gray-200 rounded-lg py-3 px-4"
                            required
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            برند
                        </label>
                        <select
                            value={formData.brand}
                            onChange={(e) => setFormData({...formData, brand: e.target.value as 'kia' | 'hyundai'})}
                            className="w-full border border-gray-200 rounded-lg py-3 px-4"
                        >
                            <option value="hyundai">هیوندای</option>
                            <option value="kia">کیا</option>
                        </select>
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            قیمت (تومان)
                        </label>
                        <input
                            type="number"
                            value={formData.price}
                            onChange={(e) => setFormData({...formData, price: parseInt(e.target.value)})}
                            className="w-full border border-gray-200 rounded-lg py-3 px-4"
                            required
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            آدرس تصویر
                        </label>
                        <input
                            type="text"
                            value={formData.image}
                            onChange={(e) => setFormData({...formData, image: e.target.value})}
                            className="w-full border border-gray-200 rounded-lg py-3 px-4"
                            required
                        />
                    </div>
                    
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="isBestSeller"
                            checked={formData.isBestSeller}
                            onChange={(e) => setFormData({...formData, isBestSeller: e.target.checked})}
                            className="ml-2"
                        />
                        <label htmlFor="isBestSeller" className="text-sm text-gray-700">
                            محصول محبوب
                        </label>
                    </div>
                    
                    <div className="flex gap-4 pt-4">
                        <button
                            type="submit"
                            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition-colors"
                        >
                            {product ? 'ویرایش' : 'افزودن'}
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-3 rounded-lg transition-colors"
                        >
                            انصراف
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
} 